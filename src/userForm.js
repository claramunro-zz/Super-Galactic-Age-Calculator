export default class Birthday {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  dateBirthday(birthday) {
    const birthdaydate = new Date(birthday.year, birthday.month, birthday.day);
    return birthdaydate;
  }

  calcAge(birthday) {
    const today = new Date();  // todays date
    const birthdaydate = Birthday.dateBirthday(birthday);
    const age = today - birthdaydate;
    console.log(age);
    return age;
  }







}