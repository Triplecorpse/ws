const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const bodyParser = require('body-parser');

const routePerson = require('./routes/person');
const routeRoot = require('./routes/root');
const routeRootWs = require('./routes/rootWs');
const routeManifest = require('./routes/manifest');

const timers = require('./services/timers');

app.use(express.static('public/dist'));
app.use(express.static('assets'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

expressWs.getWss().on('connection', function (ws) {
    console.log('connection open', new Date(), ws.upgradeReq.headers['sec-websocket-key']);
    timers.registerNewKey(ws.upgradeReq.headers['sec-websocket-key']);
});

routeRoot(app);
routeRootWs(app);
routePerson(app);
routeManifest(app);

app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
});
