const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let numbMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    numbMatrix.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      numbMatrix[i].push(0)
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        for (let g = -1; g < 2; g++) {
          for (let k = -1; k < 2; k++) {
            matrix[i+g][j+k]++;
          }
        }
      }
    }
  }
  console.log(numbMatrix)
  return numbMatrix
}

module.exports = {
  minesweeper
};
