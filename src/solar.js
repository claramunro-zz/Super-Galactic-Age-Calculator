export default class Birthday {
  constructor(year, month, day, expectancy) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.expectancy = expectancy;
  }


  calcAge(birthday) {
    let birthdaydate = new Date(birthday.year, birthday.month, birthday.day);
    let today = new Date();  // todays date
    let earthAge = (today - birthdaydate);
    console.log(earthAge);
    return earthAge;
  }

  calcExpectancy(age) {
    const expectancyLeft = this.expectancy - age;
    return expectancyLeft;
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