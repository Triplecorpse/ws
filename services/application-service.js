const https = require('https');
const fs = require('fs');
const url = require('url');


module.exports = (app, data) => {
    const applications = [];
    const statuses = [];

    data.applications.forEach(app => {
        const uri = app.uri.substr(0, app.uri.indexOf('?'));
        const lastSlash = uri.lastIndexOf('/');
        const fileName = uri.substr(lastSlash + 1);
        const file = fs.createWriteStream(`./assets/apps/${fileName}`);
        const folderNameArr = fileName.split('.');
        folderNameArr.pop();
        const folderName = folderNameArr.join('.');


        applications.push(false);

        https.get(uri, function (response) {
            response.pipe(file);

            file.on('finish', function() {
                file.close();
                fs.stat(`./assets/apps/${folderName}`, (err, stat) => {
                    console.log(err, stat);
                    if (err) {
                        fs.mkdir(`./assets/apps/${folderName}`);
                    }
                });
            });
        }).on('error', function(err) { // Handle errors
            fs.unlink(`./assets/apps/${fileName}`); // Delete the file async. (But we don't check the result)
            console.error(err);
        });
    })
};

