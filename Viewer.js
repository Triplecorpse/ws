const viewerTpl = JSON.stringify(require('./assets/viewer.json'));

class Viewer {
  constructor() {
    const tpl = JSON.parse(viewerTpl);

    tpl.properties.person_id = Math.ceil(Math.random() * 10000);

    this.properties = tpl.properties;
  }
}

module.exports = Viewer;