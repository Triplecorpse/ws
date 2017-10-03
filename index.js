const express = require('express');
const fs = require('fs');
const app = express();
const expressWs = require('express-ws')(app);
const timers = {};

const ManifestMessage = require('./messages/ManifestMessage');
const PersonAliveMessage = require('./messages/PersonAliveMessage');
const PersonUpdateMessage = require('./messages/PersonUpdateMessage');
const people = [new PersonUpdateMessage(), new PersonUpdateMessage(), new PersonUpdateMessage()];

app.use(express.static('public/dist'));
expressWs.getWss().on('connection', function (ws) {
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

        switch (message.method_name) {
            case 'request_manifest':
                sendStartPoint(ws, message.message_id);
                restart(ws);
                break;
        }
    });

    ws.on('close', function (ws) {
        for (let timer in timers) {
            clearInterval(timers[timer]);
        }
        console.log('connection closed', new Date());
    });
});

function addViewer(age, gender, position) {
    const viewer = new PersonUpdateMessage(age, gender, position);

    people.push(viewer);
}

function restart(ws) {
    for (let timer in timers) {
        clearInterval(timers[timer]);
    }

    startManifestStream(ws);
    startPersonUpdateStream(ws);
    startPersonAliveStream(ws);
}

function sendStartPoint(ws, id) {
    const manifest = new ManifestMessage();

    manifest.type = 'rpc_response';
    manifest.message_id = id;
    ws.send(JSON.stringify(manifest));
}

function startManifestStream(ws) {
    const manifest = new ManifestMessage();

    timers.manifest = setInterval(() => {
        try {
            console.log(manifest);
            ws.send(JSON.stringify(manifest));
        } catch (e) {
            console.log('Error, Manifest Stream');
            restart(ws);
        }
    }, 60000)
}

function startPersonAliveStream(ws) {
    const personAliveMessage = new PersonAliveMessage();

    personAliveMessage.setActiveIds(people.map(x => x.data.person_id));

    timers.person_alive = setInterval(() => {
        try {
            ws.send(JSON.stringify(personAliveMessage));
        } catch (e) {
            console.log('Error, Person Alive Stream',e);
            restart(ws);
        }
    }, 200)
}

function startPersonUpdateStream(ws) {
    timers.person_update = setInterval(() => {
        try {
            if (people.length) {
                people.forEach(person_update => {
                    person_update.renewPutId();
                    ws.send(JSON.stringify(person_update));
                })
            }
        } catch (e) {
            restart(ws);
            console.log('Error, Person Update Stream')
        }
    }, 200)
}

app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
});
