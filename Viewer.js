const viewerTpl = JSON.stringify(require('./assets/viewer.json'));

class Viewer {
  constructor() {
    const tpl = JSON.parse(viewerTpl);

    tpl.properties.person_id = Math.ceil(Math.random() * 10000);
    tpl.properties.local_timestamp = new Date().getTime();
    tpl.properties.rolling_expected_values.properties.age = +(Math.random() * 100).toFixed(0) + 10;

    if ((Math.random() * 100).toFixed(0) % 2){
      tpl.properties.rolling_expected_values.properties.gender = 'male';
    } else {
      tpl.properties.rolling_expected_values.properties.gender = 'female';
    }

    this.properties = tpl.properties;
    this.title = tpl.title;
    this.type = tpl.type;
  }
}

module.exports = Viewer;