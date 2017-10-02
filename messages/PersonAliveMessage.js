module.exports = class PersonAliveMessage {
    constructor(alives) {
        alives = alives || [];

        this.data = {
            camera_id: "Camera: USB 0",
            person_ids: alives
        };
        this.subject = 'persons_alive';
        this.type = 'subject';
    }

    addAliveId(id) {
        this.data.person_ids.push(id);
        return true;
    }

    removeAliveId(id) {
        const idIndex = this.data.person_ids.indexOf(id);

        if (id > -1) {
            this.data.person_ids.splice(idIndex, 1);
            return true;
        }

        return false;
    }

    setActiveIds(ids) {
        this.data.person_ids = ids;
        return true;
    }
}
