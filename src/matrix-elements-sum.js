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
function getMatrixElementsSum (matrix) {
  let sumMinArr = 0
for(let i = 0; i < matrix.length; i++){
  for(let j = 0; i < i.length; j++){
if(j === j && matrix[j] !== 0){
  sumMinArr += matrix[j]
}
}
}
console.log(sumMinArr)
}
getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])
module.exports = {
  getMatrixElementsSum
};
