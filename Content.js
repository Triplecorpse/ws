const contentTpl = JSON.stringify(require('./assets/content.json'));

class Viewer {
  constructor() {
    const tpl = JSON.parse(contentTpl);

    tpl.properties.person_id = Math.ceil(Math.random() * 10000);
    tpl.properties.local_timestamp = new Date().getTime();
    tpl.properties.content_name = (6 * +Math.random()).toFixed(0) + '.jpg';

    this.properties = tpl.properties;
    this.title = tpl.title;
    this.type = tpl.type;
  }
}

module.exports = Viewer;