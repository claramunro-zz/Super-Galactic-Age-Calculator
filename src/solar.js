export default class Birthday {
  constructor(year, month, day, expectancy) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.expectancy = expectancy;
  }

  // calculate earthage
  calcAge() {
    let today = new Date();
    let birthdaydate = new Date(this.year, this.month, this.day);
    let earthAge = (today - birthdaydate);
    earthAge = Math.floor(earthAge / 3.154e+10);  // miliseconds peryear
    return earthAge;
  }

  mercuryAge(age) {
    age *= .24;
    return age.toFixed(1);
  }

  venusAge(age) {
    age *= .62;
    return age.toFixed(1);
  }

  marsAge(age) {
    age *= 1.88;
    return age.toFixed(1);
  }

  jupiterAge(age) {
    age *= 11.86;
    return age.toFixed(1);
  }

  earthExepectancy(age) {
    let yearsLeft = this.expectancy - age;
    return yearsLeft;
  }

  mercuryExepectancy(mercuryAge) {
    let mercuryYearsLeft = this.expectancy * .24;
    let yearsLeft = mercuryYearsLeft - mercuryAge;
    
    return yearsLeft;

    // if less than 0
    // show # years that have passed

    // else
    // show # years left
  }


}