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
let res = n.toString()
console.log('RES--->', res)
let max = res.substring(1)
console.log('MAX--->', max)
for(let i = 0; i < res.length; i++){
const num = res.substring(0, i) + res.substring(i + 1)
console.log('NUM--->', num)
if(num > max){
  max = num
}
}
return Number(max)
}


module.exports = {
  deleteDigit
};
