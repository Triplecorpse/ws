const ManifestMessage = require('../models/ManifestModel');
const personAlive = require('../models/PersonAliveModel');
const people = require('../models/PeopleModel');
const timers = require('../services/timers');
const _ = require('lodash');

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

function sendPeopleAlive(ws) {
    try {
        personAlive.setActiveIds(people.getPeople().map(x => x.data.person_id));
        ws.send(JSON.stringify(personAlive));
    } catch (e) {
        console.log('Error in person_alive Stream ::::', e);
    }
}

function sendPeopleMessage(ws) {
    return () => {
        try {
            const choices = people.getPeople();

            if (choices.indexOf('person_alive') === -1) {
                choices.push('person_alive');
            }

            const messagesToSend = _.shuffle(choices);

            messagesToSend.forEach(message => {
                if (message === 'person_alive') {
                    sendPeopleAlive(ws);
                    return;
                }
                let rolling_expected_values = message.data.rolling_expected_values;
                let deviations = message.deviations;

                message.renewPutId();
                message.deviateAge();
                message.deviatePosition();
                message.restampTime();

                if (message.data.local_timestamp - message.deviations.initTimestamp <= 2000) {
                    delete message.data.rolling_expected_values;
                }

                delete message.deviations;
                ws.send(JSON.stringify(message));

                message.deviations = deviations;
                message.data.rolling_expected_values = rolling_expected_values;
            })
        } catch (e) {
            console.log('Error, Person Update Stream ::::', e);
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
                        person: sendPeopleMessage(ws)
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
