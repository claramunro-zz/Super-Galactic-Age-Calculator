
import Birthday from '../src/solar.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#inputForm").submit(function (event) {
    event.preventDefault();

    let dayInput = parseInt($("#dayInput").val());
    let monthInput = parseInt($("#monthInput").val());
    let yearInput = parseInt($("#yearInput").val());
    // let expectancy = parseInt($("#expectancyInput").val());
    console.log(dayInput);

    let birthday = new Birthday(yearInput, monthInput, dayInput);
    console.log(birthday);

    let earthAge = Birthday.calcAge(birthday);
  
    // let mercuryAge = Birthday.mercuryAge(earthAge); 
    // let venusAge = Birthday.venusAge(earthAge);
    // let marsAge = Birthday.marsAge(earthAge); 
    // let jupiterAge = Birthday.jupiterAge(earthAge);
    
    $("#result").text(earthAge);
    console.log(earthAge);
    

  });
});