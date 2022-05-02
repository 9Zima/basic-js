const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let oneIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      oneIndexes.push(i)
      arr.splice(i, 1)
      i--
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1)
      i--
    }
  }
  arr.sort((a,b) => a > b ? 1 : -1)
  for (let i = 0; i < oneIndexes.length; i++) {
    if (oneIndexes.includes(i)) {
      arr.splice(i, 0, -1)
      i--
    }
  }
  console.log(oneIndexes)
  console.log(arr)
  return arr
}

module.exports = {
  sortByHeight
};
