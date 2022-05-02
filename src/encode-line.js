const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter, temp, newStr = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i-1])
    counter++;
    else if (str[i-1] === undefined)
    counter = 1;
    else if (str[i] !== str[i-1]) {
      if (counter === 1)
      newStr += `${str[i-1]}`
      else newStr += `${counter}${str[i-1]}`
      counter = 1;
    }
  }
  return newStr
}

module.exports = {
  encodeLine
};
