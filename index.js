const express = require('express');
const fs = require('fs');
const app = express();
const expressWs = require('express-ws')(app);
const Viewer = require('./Viewer');
let viewers = [];
let senderTimer;

app.use(express.static('public/dist'));

// expressWs.getWss().on('connection', function (ws) {
//   console.log(expressWs.getWss().clients);
//   ws.on('close', () => {
//     console.log('WebSocket was closed')
//   });
//   // ws.send('Life is good');
//   // ws.send('Life is good');
// });


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
        if (!senderTimer) {
          startStream(ws);
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

function addViewer() {
  const viewer = new Viewer();

  viewers.push(viewer);
}

function stopStream(ws) {
  clearInterval(senderTimer);
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

function startStream(ws) {
  senderTimer = setInterval(() => {
    viewers.forEach(viewer => {
      viewer.properties.local_timestamp = new Date().getTime();
    });
    ws.send(JSON.stringify(viewers));
  }, 200)
}

app.listen(3333, function () {
  console.log('Example app listening on port 3333!')
});
