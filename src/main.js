/* eslint-disable no-console */
import Birthday from './userForm.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    const dayInput = parseInt($("#dayInput")).val();
    const monthInput = parseInt($("#monthInput")).val();
    const yearInput = parseInt($("#yearInput")).val();
    // const expectancyInput = parseInt($("#expectancyInput")).val();

    let birthdayInput = new Birthday(yearInput, monthInput, dayInput);

    let age = Birthday.calcAge(birthdayInput);
    console.log(age);
    let earthAge = Birthday.convertAgeToSeconds(age);
    console.log(earthAge);



  });
});