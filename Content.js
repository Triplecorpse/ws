class Viewer {
  constructor() {
    this.content_id = Math.ceil(Math.random() * 10000).toString();
    this.local_timestamp = new Date().getTime();
    this.content_name = (6 * +Math.random()).toFixed(0) + '.jpg';
    this.name_of_event = "image"
  }
}

module.exports = Viewer;