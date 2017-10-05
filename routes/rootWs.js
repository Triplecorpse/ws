const ManifestMessage = require('../models/ManifestModel');
const personAlive = require('../models/PersonAliveModel');
const people = require('../models/PeopleModel');
const timers = require('../services/timers');

const manifest = new ManifestMessage();

function sendStartPoint(ws, id) {
    const localManifest = new ManifestMessage();

    localManifest.type = 'rpc_response';
    localManifest.message_id = id;
    localManifest.success = true;
    ws.send(JSON.stringify(localManifest));
    manifest.subject = 'manifest';
}

function startManifestStream(ws) {
    return () => {
        try {
            ws.send(JSON.stringify(manifest));
            manifest.update();
        } catch (e) {
            console.log('Error, Manifest Stream');
        }
    }
}

function startPersonAliveStream(ws) {
    return () => {
        try {
            personAlive.setActiveIds(people.getPeople().map(x => x.data.person_id));
            ws.send(JSON.stringify(personAlive));
        } catch (e) {
            console.log('Error, Person Alive Stream', e);
        }
    }
}

function startPersonUpdateStream(ws) {
    return () => {
        try {
            if (people.getPeople().length) {
                people.getPeople().forEach(person_update => {
                    let rolling_expected_values = person_update.data.rolling_expected_values;
                    let deviations = person_update.deviations;


                    person_update.renewPutId();
                    person_update.deviateAge();
                    person_update.deviatePosition();
                    person_update.restampTime();

                    if (person_update.data.local_timestamp - person_update.deviations.initTimestamp <= 2000) {
                        delete person_update.data.rolling_expected_values;
                    }

                    delete person_update.deviations;
                    ws.send(JSON.stringify(person_update));

                    person_update.deviations = deviations;
                    person_update.data.rolling_expected_values = rolling_expected_values;
                })
            }
        } catch (e) {
            console.log('Error, Person Update Stream', e);
        }
    }
}

module.exports = app => {
    app.ws('/', function (ws) {
        ws.on('message', function (msg) {
            const message = JSON.parse(msg);

            switch (message.method_name) {
                case 'request_manifest':
                    sendStartPoint(ws, message.message_id);

                    timers.addTimer({
                        manifest: startManifestStream(ws),
                        person_update: startPersonUpdateStream(ws),
                        persons_alive: startPersonAliveStream(ws)
                    });

                    break;
            }
        });

        ws.on('close', () => {
            timers.clearTimer(ws.upgradeReq.headers['sec-websocket-key']);
            console.log('connection closed, ws', new Date(), ws.upgradeReq.headers['sec-websocket-key']);
        });
    });
};