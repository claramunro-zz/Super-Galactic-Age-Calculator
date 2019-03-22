export default class Birthday {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  calcAge(birthdayInput) {
    const birthdaydate = new Date(birthdayInput.year, birthdayInput.month, birthdayInput.day);
    const today = new Date();  // todays date
    const age = today - birthdaydate;
    return age;
  }

  convertAgeToSeconds(age) {
    let secondsAge = Math.floor(age / 31536000);
    return secondsAge;
  }



  mercuryAge(age) {
    age = age/.24;
    return age;
  }

  venusAge(age) {
    age = age/.62;
    return age;
  }

  marsAge(age) {
    age = age/1.88;
    return age;
  }

  jupiterAge(age) {
    age = age/11.86;
    return age;
  }



}