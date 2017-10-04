const ManifestMessage = require('../models/ManifestModel');
const personAlive = require('../models/PersonAliveModel');
const people = require('../models/PeopleModel');


const timers = {};

module.exports = app => {
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
};

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
            ws.send(JSON.stringify(manifest));
        } catch (e) {
            console.log('Error, Manifest Stream');
            restart(ws);
        }
    }, 60000)
}

function startPersonAliveStream(ws) {
    timers.person_alive = setInterval(() => {
        try {
            personAlive.setActiveIds(people.getPeople().map(x => x.data.person_id));
            ws.send(JSON.stringify(personAlive));
        } catch (e) {
            console.log('Error, Person Alive Stream',e);
            restart(ws);
        }
    }, 200)
}

function startPersonUpdateStream(ws) {
    timers.person_update = setInterval(() => {
        try {
            if (people.getPeople().length) {
                people.getPeople().forEach(person_update => {
                    person_update.renewPutId();
                    person_update.deviateAge();
                    person_update.deviatePosition();
                    ws.send(JSON.stringify(person_update));
                })
            }
        } catch (e) {
            console.log('Error, Person Update Stream');
            restart(ws);
        }
    }, 200)
}