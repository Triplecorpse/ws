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
    // to create deep copy of array and shallow copy of objects
    return people.map(x => x);
}

module.exports = {
  getPeople, removePerson, addPerson, clearPeople
};