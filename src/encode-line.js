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
  if(str === ''){return ''}
const substring = str.match(/(.)\1*/g);
let result = substring
.map(element => element.length > 1 ? element.length + element[0] : element)
.join('')
return result
}

module.exports = {
  encodeLine
};
