class Viewer {
  constructor() {
    this.rolling_expected_values = {};

    this.person_id = Math.ceil(Math.random() * 10000);
    this.local_timestamp = new Date().getTime();
    this.rolling_expected_values.age = +(Math.random() * 100).toFixed(0) + 10;
    this.rolling_expected_values.age = +(Math.random() * 100).toFixed(0) + 10;

    if ((Math.random() * 100).toFixed(0) % 2){
      this.rolling_expected_values.gender = 'male';
    } else {
      this.rolling_expected_values.gender = 'female';
    }

      if ((Math.random() * 100).toFixed(0) % 2){
          this.rolling_expected_values.isLooking = true;
      } else {
          this.rolling_expected_values.isLooking = false;
      }
  }
}

module.exports = Viewer;