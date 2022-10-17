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
    this.alphabet = this.makeAlphabet();
    this.alphabetNumberKeys = this.makeAlphabet(true);
  }
  makeAlphabet(numberKeys = false) {
    const alphabet = {};
    if (numberKeys)
      for (let ASCIILetter = 65; ASCIILetter < 91; ASCIILetter++)
        alphabet[ASCIILetter] = String.fromCharCode(ASCIILetter);
    else
      for (let ASCIILetter = 65; ASCIILetter < 91; ASCIILetter++)
        alphabet[String.fromCharCode(ASCIILetter)] = ASCIILetter;
    return alphabet;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw Error("Incorrect arguments!")
    if (!this.isDirect)
      message = Array.from(message).reverse().join('');
    let currentKeyLetter = 0;
    let encryptedString = '';
    // console.log('this.alphabetNumberKeys:', this.alphabetNumberKeys)
    for (let currentMessageLetter = 0; currentMessageLetter < message.length; currentMessageLetter++) {
      if (!this.alphabet.hasOwnProperty(message[currentMessageLetter].toUpperCase())) {
        // console.log('non standart symbol:', message[currentMessageLetter])
        encryptedString += message[currentMessageLetter];
        continue;
      }
      let lettersSum = this.alphabet[message[currentMessageLetter].toUpperCase()] + this.alphabet[key[currentKeyLetter].toUpperCase()];
      // console.log('lettersSum:', lettersSum)

      lettersSum < 156 ?
      encryptedString += this.alphabetNumberKeys[lettersSum - 65] :
      encryptedString += this.alphabetNumberKeys[lettersSum - 91];
      // console.log('encryptedString:', encryptedString)
      currentKeyLetter++;
      if (currentKeyLetter === key.length)
        currentKeyLetter = 0;
    }
    return encryptedString;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw Error("Incorrect arguments!")
    if (!this.isDirect)
      message = Array.from(message).reverse().join('');
    let currentKeyLetter = 0;
    let encryptedString = '';
    // console.log('this.alphabetNumberKeys:', this.alphabetNumberKeys)
    for (let currentMessageLetter = 0; currentMessageLetter < message.length; currentMessageLetter++) {
      if (!this.alphabet.hasOwnProperty(message[currentMessageLetter].toUpperCase())) {
        // console.log('non standart symbol:', message[currentMessageLetter])
        encryptedString += message[currentMessageLetter];
        continue;
      }
      let lettersSum = this.alphabet[message[currentMessageLetter].toUpperCase()] - this.alphabet[key[currentKeyLetter].toUpperCase()];
      // console.log('lettersSum:', lettersSum)

      lettersSum < 0 ?
      encryptedString += this.alphabetNumberKeys[lettersSum + 91] :
      encryptedString += this.alphabetNumberKeys[lettersSum + 65];
      // console.log('encryptedString:', encryptedString)
      currentKeyLetter++;
      if (currentKeyLetter === key.length)
        currentKeyLetter = 0;
    }
    return encryptedString;
  }
}

module.exports = {
  VigenereCipheringMachine
};
