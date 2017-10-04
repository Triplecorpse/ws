const generateId = require( '../services/idGenerator');
const deviate = require('../services/deviator');

module.exports = class PersonUpdateModel {
    constructor(age, gender, position, looking, ageDev, posDev) {
        age = age || +(Math.random() * 100).toFixed(0) + 10;
        position = {x: position.x || 0, y: position.y || 0, z: position.z || 0};

        if (!gender) {
            if ((Math.random() * 100).toFixed(0) % 2) {
                gender = 'male';
            } else {
                gender = 'female';
            }
        }

        this.data = {
            camera_id: "Camera: USB 0",
            coordinates: position,
            local_timestamp: new Date().getTime(),
            looking_at_screen: looking,
            person_id: generateId(),
            person_put_id: generateId(),
            poi: -1,
            record_type: "person",
            rolling_expected_values: {
                age: age,
                gender: gender
            }
        };

        this.subject = 'person_update';
        this.type = 'subject';
        this.deviations = {
            devAge: ageDev || 0,
            devPosition: posDev || 0,
            initAge: age,
            initPos: {
                x: position.x,
                y: position.y,
                z: position.z
            },
            initTimestamp: new Date().getTime()
        }
    }

    renewPutId() {
        this.data.person_put_id = generateId();
    }

    deviateAge() {
        this.data.rolling_expected_values.age = deviate(+this.deviations.initAge, +this.deviations.devAge);
    }

    deviatePosition() {
        this.data.coordinates.x = deviate(+this.deviations.initPos.x, +this.deviations.devPosition);
        this.data.coordinates.y = deviate(+this.deviations.initPos.y, +this.deviations.devPosition);
        this.data.coordinates.z = deviate(+this.deviations.initPos.z, +this.deviations.devPosition);
    }

    restampTime() {
        this.data.local_timestamp = new Date().getTime();
    }
};
