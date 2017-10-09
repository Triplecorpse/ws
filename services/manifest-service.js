const https = require('https');
const config = require('./../config');
const applicationsService = require('./application-service');

module.exports = app => {
    https.get(`${config.endpoint}?token=${config.poiToken}`, response => {

        let data = '';

        // A chunk of data has been recieved.
        response.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        response.on('end', () => {
            applicationsService(app, JSON.parse(data));
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};
