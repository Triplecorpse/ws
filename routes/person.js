const people = require('../models/PeopleModel');

module.exports = app => {
    app.get('/person/:action', (req, res) => {

        if (req.params.action === 'add') {
            addPerson(req.query.ageValue, req.query.gender, req.query.posX, req.query.posY, req.query.posZ,
                req.query.lookingAtScreen, req.query.ageDeviation, req.query.posDeviation, req.query.qty);
            res.sendStatus(200);
        } else if (req.params.action === 'remove') {
            removePerson(req.query.id);
            res.sendStatus(200);
        } else if (req.params.action === 'clear') {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    });
};

function addPerson(age, gender, posX, posY, posZ, looking, ageDev, posDev, qty) {
    for (let i = 0; i < qty; i++) {
        if (gender === 'random') {
            gender = undefined;
        }

        if (looking === 'true') {
            looking = 1;
        } else {
            looking = 0;
        }

        const position = {
            x: posX,
            y: posY,
            z: posZ
        };

        people.addPerson(age, gender, position, looking, ageDev, posDev);
    }
}

function removePerson(id) {
    people.removePerson(id);
}
