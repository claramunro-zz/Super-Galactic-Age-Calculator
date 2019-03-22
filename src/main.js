
import Birthday from './userForm.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#inputForm").submit(function (event) {
    event.preventDefault();

    let infoo = new Birthday();

    let dayInput = $("#dayInput").val();
    let monthInput = $("#monthInput").val();
    let yearInput = $("#yearInput").val();
    let expectancy = $("#expectancyInput").val();
    console.log(dayInput);

    infoo = new Birthday(yearInput, monthInput, dayInput, expectancy);
    console.log(infoo);

    let earthAge = Birthday.calcAge(infoo);
  
    // let mercuryAge = Birthday.mercuryAge(earthAge); 
    // let venusAge = Birthday.venusAge(earthAge);
    // let marsAge = Birthday.marsAge(earthAge); 
    // let jupiterAge = Birthday.jupiterAge(earthAge);
    
    $("#result").text(earthAge);
    console.log(earthAge);
    

  });
});