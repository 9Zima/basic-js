const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsCounter = 0;
  for (let rows = 0; rows < matrix.length; rows++) 
    for (let cols = 0; cols < matrix[rows].length; cols++)
      if (matrix[rows][cols] === "^^")
        catsCounter++
  return catsCounter;
}

module.exports = {
  countCats
};
