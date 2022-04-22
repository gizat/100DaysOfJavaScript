'use strict';

// CODING CHALLENCE #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolhins, avgKoalas) {
    if ((avgDolhins / avgKoalas) >= 2) {
        return `Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`;
    } else if ((avgKoalas / avgDolhins) >= 2) {
        return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolhins})`;
    } else {
        return `No winner.`
    }
}

const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolhins, avgKoalas)

console.log(checkWinner(avgDolhins, avgKoalas));