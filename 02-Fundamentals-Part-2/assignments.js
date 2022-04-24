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
// return population / 7900 * 100;
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

// const percentageOfWorld3 = population => population / 7900 * 100;

// console.log(percentageOfWorld3(18.75));
// console.log(percentageOfWorld3(125.8));
// console.log(percentageOfWorld3(18.75));

// Functions Calling Other Functions

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld2(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`
// }

// console.log(describePopulation('Kazakhstan', 18.75));
// console.log(describePopulation('Japan', 125.8));
// console.log(describePopulation('Denmark', 18.75));

// Arrays

// const populations = [18.75, 125.8, 5.8, 11.3];
// console.log(populations.length === 4);
// const percentages = [
// percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]),
// percentageOfWorld1(populations[2]),
// percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// const neighbours = ['Russia', 'China', 'Kyrgyzstan', 'Uzbekistan', 'Turkmenistan'];
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('Germany')) console.log('Probably not a central European country :D');
// const indexChina = neighbours.indexOf('China');
// neighbours[indexChina] = 'PRC';
// console.log(neighbours);

// Objects

// const myCountry = {
//     country: 'Kazakhstan',
//     capital: 'Nur-Sultan',
//     language: 'Kazakh',
//     population: 18.75,
//     neighbours: [
//         'Russia',
//         'China',
//         'Kyrgyzstan',
//         'Uzbekistan',
//         'Turkmenistan'
//     ],
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
//     },
//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// };

// console.log(myCountry.checkIsland());
// console.log(myCountry)

// Loops

// for (let i = 0; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting.`)
// }

// const populations = [18.75, 125.8, 5.8, 11.3];
// const percentages2 = [];

// for (let i = 0; i <= populations.length - 1; i++) {
//     percentages2.push(percentageOfWorld2(populations[i]));
// }
// console.log(percentages2);

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// const populations = [18.75, 125.8, 5.8, 11.3];
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld2(populations[i]));
//     i++;
// }
// console.log(percentages3);