'use strict';

// Functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// console.log(describeCountry('Kazakhstan', 18.75, 'Nur-Sultan'));
// console.log(describeCountry('Japan', 125.8, 'Tokyo'));
// console.log(describeCountry('Denmark', 5.8, 'Copenhagen'));

// Function Declarations vs. Expressions

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// console.log(percentageOfWorld1(18.75));
// console.log(percentageOfWorld1(125.8));
// console.log(percentageOfWorld1(18.75));

// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }

// console.log(percentageOfWorld2(18.75));
// console.log(percentageOfWorld2(125.8));
// console.log(percentageOfWorld2(18.75));

// Arrow functions

const percentageOfWorld3 = population => population / 7900 * 100;

console.log(percentageOfWorld3(18.75));
console.log(percentageOfWorld3(125.8));
console.log(percentageOfWorld3(18.75));