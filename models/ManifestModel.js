const manifest = require('../assets/manifest.json');
const fs = require('fs');

module.exports = class ManifestModel {
    constructor() {
        this.data = manifest;
        this.type = 'subject';
    }

    update() {
        fs.readFile('./assets/manifest.json', 'UTF8', (err, file) => {
            if (!err) {
                this.data = JSON.parse(file);
                console.log('Manifest successfully updated', new Date());
            } else {
                console.error('Error in manifest update', err);
            }
        });
    }
};
