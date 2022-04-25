// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let forecastText = '';
  for (let i = 0; i < arr.length; i++) {
    forecastText += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(forecastText);
};
printForecast([17, 21, 23]);
