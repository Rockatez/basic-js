const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const keyChar = key[j % key.length];
        const charCode = ((char.charCodeAt(0) - 65) + (keyChar.charCodeAt(0) - 65)) % 26;
        const encryptedChar = String.fromCharCode(charCode + 65);
        encryptedMessage += encryptedChar;
        j++;
      } else {
        encryptedMessage += char;
      }
    }

    if (!this.isDirect) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char.match(/[A-Z]/)) {
        const keyChar = key[j % key.length];
        const charCode = ((char.charCodeAt(0) - 65) - (keyChar.charCodeAt(0) - 65) + 26) % 26;
        const decryptedChar = String.fromCharCode(charCode + 65);
        message += decryptedChar;
        j++;
      } else {
        message += char;
      }
    }

    if (!this.isDirect) {
      message = message.split('').reverse().join('');
    }

    return message;
  }
}
module.exports = {
  VigenereCipheringMachine
};
