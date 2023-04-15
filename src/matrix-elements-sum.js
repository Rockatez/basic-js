const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let total = 0;
  let prevZeroCols = [];

  matrix.forEach(row => {
    row.forEach((val, col) => {
      if (val === 0) {
        prevZeroCols.push(col);
      } else if (!prevZeroCols.includes(col)) {
        total += val;
      }
    });
  });

  return total;
}
module.exports = {
  getMatrixElementsSum
};
