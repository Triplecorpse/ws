const generateId = require( '../services/idGenerator');

module.exports = class PersonUpdateMessage {
    constructor(age, gender, position) {
        age = age || +(Math.random() * 100).toFixed(0) + 10;
        position = position || {x: 0, y: 0, z: 0};

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
            looking_at_screen: 0,
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
    }

    renewPutId() {
        this.data.person_put_id = generateId();
    }
}
