const PersonUpdate = require('../models/PersonUpdateModel');
const people = [];

function addPerson(age, gender, position, looking, ageDev, posDev) {
    people.push(new PersonUpdate(age, gender, position, looking, ageDev, posDev));
}

function removePerson(id) {
    let index;

    people.forEach((iterablePerson, personIndex) => {
        if (iterablePerson.data.person_id === id) {
            index = personIndex;
        }
    });

    if (!id || index === undefined) {
        return false;
    }

    people.splice(index, 1);

    return true;
}

function clearPeople() {
    people.splice(0);
}

function getPeople() {
    return people;
}

module.exports = {
  getPeople, removePerson, addPerson, clearPeople
};