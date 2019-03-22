export default class Birthday {
  constructor(year, month, day, expectancy) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.expectancy = expectancy;
  }

  calcAge() {
    let birthdaydate = new Date(this.year, this.month, this.day);
    let today = new Date();  // todays date
    let earthAge = (today - birthdaydate);
    return earthAge;
  }

  mercuryAge(earthAge) {
    earthAge = earthAge/.24;
    return earthAge;
  }

  venusAge(earthAge) {
    earthAge = earthAge/.62;
    return earthAge;
  }

  marsAge(earthAge) {
    earthAge = earthAge/1.88;
    return earthAge;
  }

  jupiterAge(earthAge) {
    earthAge = earthAge/11.86;
    return earthAge;
  }



}