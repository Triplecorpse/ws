const express = require('express');
const fs = require('fs');
const app = express();
const expressWs = require('express-ws')(app);
const Viewer = require('./Viewer');
const Content = require('./Content');
let viewers = [];
let viewerTimer;
let contentTimer;

app.use(express.static('public/dist'));

app.get('/', function (req, res) {
  fs.readFile('public/dist/index.html', 'UTF8', (err, file) => {
    console.log(err, file);
    if (!err) {
      res.send(file)
    } else {
      res.status(500).send(err)
    }
  });
});

app.ws('/connect-viewer', function (ws) {
  ws.on('message', function (msg) {
    const message = JSON.parse(msg);

    switch (message.message) {
      case 'start':
        addViewer();
        if (!viewerTimer) {
          startViewerStream(ws);
        }
        break;
      case 'stop':
        stopStream(ws);
        break;
      case 'remove.one':
        removeOnePerson(ws, Math.floor(Math.random() * viewers.length));
        break;
    }
  });
});

app.ws('/show-content', function (ws) {
  ws.on('message', function (msg) {
    const message = JSON.parse(msg);

    switch (message.message) {
      case 'start':
        startContentStream(ws);
        break;
    }
  });
});

function addViewer() {
  const viewer = new Viewer();
  viewer.lifeTime = (57 * Math.random() + 3) * 1000;

  viewers.push(viewer);
}

function stopStream(ws) {
  clearInterval(viewerTimer);
  console.log('STOP');
  viewers.splice(0);
  ws.send('{"away": "-1"}');
}

function removeOnePerson(ws, index) {
  if (!viewers.length || index > viewers.length - 1) {
    return;
  }
  console.log('REMOVE');
  viewers.splice(index, 1);
  ws.send('{"away": "' + index + '"}');
}

function startViewerStream(ws) {
  viewerTimer = setInterval(() => {
    const corpses = [];

    viewers.forEach((viewer, index) => {
      const currentDate = new Date().getTime();

      if (currentDate - viewer.local_timestamp >= viewer.lifeTime) {
        corpses.push(index);
      }
    });

    corpses.forEach(index => {
      viewers.splice(index, 1)
    });

    corpses.splice(0);
    try {
      ws.send(JSON.stringify(viewers));
    } catch (e) {
      console.error(e);
    }
  }, 200)
}

function startContentStream(ws) {
  const content = new Content();
  const lifeTime = (+(35 * Math.random()).toFixed(0) + 10) * 1000;

  clearTimeout(contentTimer);

  ws.send(JSON.stringify(content));
  contentTimer = setTimeout(() => {
    startContentStream(ws)
  }, lifeTime);
}

app.listen(3333, function () {
  console.log('Example app listening on port 3333!')
});
