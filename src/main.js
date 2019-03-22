import Birthday from './userForm.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#userForm").submit(function(event){
    event.preventDefault();
    const dayInput = parseInt($("#dayInput")).val();
    const monthInput = parseInt($("#monthInput")).val();
    const yearInput = parseInt($("#yearInput")).val();
    let birthdayInput = new Birthday(yearInput, monthInput, dayInput);
    let age = Birthday.calcAge(birthdayInput);
    console.log(age);

    // Calc Mercury Age
    // Calc Venus Age
    // Calc Mars Age
    // Calc Jupiter Age

    // Calc Earth Years Left
    // Calc Mercury Years Left
    // Calc Venus Years Left
    // Calc Mars Years Left
    // Calc Jupiter Years Left

    // $("#result").show();
    // $("#result").text(Calc Earth Age);
    // $("#result").text(Calc Mercury Age);
    // $("#result").text(Calc Venus Age);
    // $("#result").text(Calc Mars Age);
    // $("#result").text(Calc Jupiter Age);

  });
});