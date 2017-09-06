import {IStats} from "./i-stats";
export class Stats implements IStats {
  constructor(private male: number = 0, private female: number = 0) {

  }

  countMale() {
    this.male++;
  }

  countFemale() {
    this.female++;
  }

  addMale(male: number): void {
    this.male += male;
  }

  addFemale(female: number): void {
    this.female += female;
  }


  resetAll() {
    this.male = 0;
    this.female = 0;
  }

}
