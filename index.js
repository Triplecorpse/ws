const express = require('express');
const fs = require('fs');
const app = express();
const expressWs = require('express-ws')(app);
const viewers = [];

const ManifestMessage = require('./messages/ManifestMessage');
const PersonAliveMessage = require('./messages/PersonAliveMessage');
const PersonUpdateMessage = require('./messages/PersonUpdateMessage');

app.use(express.static('public/dist'));
expressWs.getWss().on('connection', function(ws) {
    console.log('connection open', new Date());
});

app.get('/', function (req, res) {
    fs.readFile('public/dist/index.html', 'UTF8', (err, file) => {
        if (!err) {
            res.send(file)
        } else {
            res.status(500).send(err)
        }
    });
});

app.ws('/', function (ws) {
    ws.on('message', function (msg) {
        const message = JSON.parse(msg);
        switch (message.name) {
            case 'request_manifest':
                sendStartPoint(ws, message.message_id);
                startManifestStream(ws);
                startPersonUpdateStream(ws);
                startPersonAliveStream(ws);
                break;
        }
    });
});

function addViewer(age, gender, position) {
    const viewer = new PersonUpdateMessage(age, gender, position);

    viewers.push(viewer);
}

function sendStartPoint(ws, id) {
    const manifest = new ManifestMessage();

    manifest.type = 'rpc_response';
    manifest.message_id = id;
    ws.send(manifest);
}

function startManifestStream(ws) {
    const manifest = new ManifestMessage();

    setInterval(() => {
        ws.send(manifest);
    }, 60000)
}

function startPersonAliveStream(ws) {
    const personAliveMessage = new PersonAliveMessage();

    personAliveMessage.setActiveIds(viewers.map(x => x.person_id));

    setInterval(() => {
        ws.send(personAliveMessage);
    }, 200)
}

function startPersonUpdateStream(ws) {
    setInterval(() => {
        viewers.forEach(viewer => {
            viewer.renewPutId();
            ws.send(viewer);
        })
    }, 200)
}

app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
});
