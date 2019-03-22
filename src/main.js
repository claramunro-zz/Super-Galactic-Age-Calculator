import Date from './userForm.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {

  $("#userForm").submit(function(event){
    event.preventDefault();

    const dayInput = parseInt($("#dayInput")).val();
    const monthInput = parseInt($("#monthInput")).val();
    const yearInput = parseInt($("#yearInput")).val();

    let dateObject = new Date(yearInput, monthInput, dayInput);

    let calcAge = Date.calcAge(dateObject);

    // Calc Earth Age
    // Calc Mercury Age
    // Calc Venus Age
    // Calc Mars Age
    // Calc Jupiter Age

    // Calc Earth Years Left
    // Calc Mercury Years Left
    // Calc Venus Years Left
    // Calc Mars Years Left
    // Calc Jupiter Years Left


    $("#result").text(Calc Earth Age);
    $("#result").text(Calc Mercury Age);
    $("#result").text(Calc Venus Age);
    $("#result").text(Calc Mars Age);
    $("#result").text(Calc Jupiter Age);


    let updatedDays = dateObject.leapYearAddDays(yearNumber, countDays);
    let finalDay = dateObject.getWeekday(updatedDays);
    $("#result").text(finalDay);
    dateObject.resetDays(yearNumber, monthNumber, dayNumber);
  });
});