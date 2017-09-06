export interface IStats {
  countMale(),
  countFemale(),
  addMale(male: number):void,
  addFemale(female: number):void,
  resetAll()
}
