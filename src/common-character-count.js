const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  s1 = s1.split("").sort((a,b) => a > b ? 1 : -1)
  s2 = s2.split("").sort((a,b) => a > b ? 1 : -1)
  let smallArr = s1.length <= s2.length ? s1 : s2;
  let bigArr = s1.length > s2.length ? s1 : s2;
  for (let i = smallArr.length - 1; i > -1; i--)
    for (let j = bigArr.length - 1; j > -1; j--)
      if (smallArr[i] === bigArr[j]){
        counter++;
        smallArr.splice(i, 1)
        bigArr.splice(j, 1)
        break;
      }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
