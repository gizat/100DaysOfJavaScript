'use strict';

// CODING CHALLENCE #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if ((avgDolhins / avgKoalas) >= 2) {
//         return `Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`;
//     } else if ((avgKoalas / avgDolhins) >= 2) {
//         return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolhins})`;
//     } else {
//         return `No winner.`
//     }
// }

// const avgDolhins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolhins, avgKoalas)

// console.log(checkWinner(avgDolhins, avgKoalas));


// CODING CHALLENCE #2

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);
