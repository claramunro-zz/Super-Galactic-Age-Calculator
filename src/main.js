
import Birthday from './userForm.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#inputForm").submit(function (event) {
    event.preventDefault();

    let birthday = new Birthday();

    let dayInput = parseInt($("#dayInput").val());
    let monthInput = parseInt($("#monthInput").val());
    let yearInput = parseInt($("#yearInput").val());
    let expectancy = parseInt($("#expectancyInput").val());
    console.log(dayInput);

    birthday = new Birthday(yearInput, monthInput, dayInput, expectancy);
    console.log(birthday);

    let earthAge = Birthday.ageCalc();
  
    // let mercuryAge = Birthday.mercuryAge(earthAge); 
    // let venusAge = Birthday.venusAge(earthAge);
    // let marsAge = Birthday.marsAge(earthAge); 
    // let jupiterAge = Birthday.jupiterAge(earthAge);
    
    $("#result").text(earthAge);
    console.log(earthAge);
    

  });
});