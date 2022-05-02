const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0, arr ="", numb, temp;
  arr = (n + "").split("")
  for (let i = 0; i < arr.length; i++) {
    temp = arr.splice(i, 1);
    numb = +arr.join("");
    if (max < numb)
    max = numb;
    arr.splice(i, 0, temp);
  }
  return max
}

module.exports = {
  deleteDigit
};
