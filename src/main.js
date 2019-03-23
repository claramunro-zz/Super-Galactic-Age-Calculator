import Birthday from '../src/solar';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {
  $("#inputForm").submit(function (event) {
    event.preventDefault();

    // INPUT SECTION

    let dayInput = parseInt($("#dayInput").val());
    let monthInput = parseInt($("#monthInput").val());
    let yearInput = parseInt($("#yearInput").val());
    let expectancy = parseInt($("#expectancyInput").val());

    let birthday = new Birthday(yearInput, monthInput, dayInput, expectancy);
    console.log(birthday);


    // AGE SECTION

    let age = birthday.calcAge();
    console.log(`Earth Years: ${age}`);
    let mercuryAge = birthday.mercuryAge(age);
    console.log(`Mercury years: ${mercuryAge}`);
    let venusAge = birthday.venusAge(age);
    console.log(`Venus years: ${venusAge}`);
    let marsAge = birthday.marsAge(age);
    console.log(`Mars years: ${marsAge}`);
    let jupiterAge = birthday.jupiterAge(age);
    console.log(`Jupiter years: ${jupiterAge}`);

    $("#resultAge").text(`
    ${age} Earth years old,
    ${mercuryAge} Mercury years old,
    ${venusAge} Venus years old,
    ${marsAge} Mars years old,
    ${jupiterAge} Jupiter years old,
    `);


    // EXPECTANCY SECTION

    let earthExepectancy = birthday.earthExepectancy(age);
    console.log(earthExepectancy);

    let mercuryExepectancy = birthday.mercuryExepectancy(mercuryAge);
    console.log(mercuryExepectancy);

    // let venusExpectancy = birthday.venusExpectancy(venusAge, expectancy);
    // let marsExpectancy= birthday.marsExpectancy(marsAge, expectancy);
    // let jupiterExpectancy = birthday.jupiterExpectancy(jupiterAge, expectancy);

    // $("#resultExpectancy").text(`
    // ${expectancy} Earth years left,
    // ${mercuryExepectancy} Mercury years left,
    // ${venusExpectancy} Venus years left,
    // ${marsExpectancy} Mars years left,
    // ${jupiterExpectancy} Jupiter years left,
    // `);
    

  });
});