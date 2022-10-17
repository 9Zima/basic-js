const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  if (number.toString().length > 1) {
    // let result = number;
    let arrayedNumber;
    while (number.toString().length > 1) {
        arrayedNumber = Array.from(number.toString());
        number = 0
      for (let i = 0; i < arrayedNumber.length; i++){
        number += Number(arrayedNumber[i])}
    } 
    return number
  }
  return number;
}

module.exports = {
  getSumOfDigits
};
