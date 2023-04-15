const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
const emailResult = email.split('@')
return emailResult[emailResult.length -1]
}
getEmailDomain('very.unusual.@.unusual.com@usual.com')
module.exports = {
  getEmailDomain
};
