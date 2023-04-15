const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {}
for(const domain of domains){
  const parts = domain.split('.').reverse()
  console.log(parts)
  let current = ''

  for(const part of parts){
    current = `${part}.${current}`;
    console.log(current)
    if(stats[current]){
      stats[current] +=1
    }else{
      stats[current] = 1
    }
}
}
const result = {};
for (const key in stats) {
  if (stats.hasOwnProperty(key)) {
    const newKey = `${key.split(".").reverse().join(".")}`;
    result[newKey] = stats[key];
  }
}
return result
}
module.exports = {
  getDNSStats
};
//npm run test test/dns-stats.test.js