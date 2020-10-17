const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Missing argument');

    message =  message.toLowerCase();
    key = key.toLowerCase();
  
    let result = '';

    for(let i = 0; i < message.length; i++) {
      if (message.length > key.length) {
        key = `${key}${key[i]}`
      }
    }

    for (let i = 0, j = 0; i < message.length; i++) {
      let c = message.charCodeAt(i);
      let k = key.charCodeAt(j);

      if (97 <= c && c <= 122) {
        result += String.fromCharCode(((c - 97) + (k - 97)) % 26 + 97);
        j++; // so as not to switch to a new letter in key
      } else {
        result +=  String.fromCharCode(c);
      }
    }
    
    return this.mode === true ? result.toUpperCase() : result.split('').reverse().join('').toUpperCase();
  }    

  decrypt(message, key) {
    if(!message || !key) throw Error('Missing argument');
    
    message =  message.toLowerCase();
    key = key.toLowerCase();

    let result = '';

    for(let i = 0; i < message.length; i++) {
      if (message.length > key.length) {
        key = `${key}${key[i]}`
      }
    }

    for (let i = 0, j = 0; i < message.length; i++) {
      let c = message.charCodeAt(i);
      let k = key.charCodeAt(j);

      if (97 <= c && c <= 122) {
        result += String.fromCharCode((c + 26 - k)  % 26 + 97);
        j++; // so as not to switch to a new letter in key
      } else {
        result +=  String.fromCharCode(c);
      }
    }
    
    return this.mode === true ? result.toUpperCase() : result.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;