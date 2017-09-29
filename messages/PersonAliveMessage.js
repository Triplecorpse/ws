export default class PersonAliveMessage {
    constructor(alives) {
        alives = alives || [];

        this.data = {
            camera_id: "Camera: USB 0",
            person_ids: alives
        };
        this.subject = 'persons_alive';
        this.type = 'subject';
    }
}
