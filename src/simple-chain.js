const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultChain: [],
  getLength() {
    return this.resultChain.length;
  },
  addLink(value) {
    if(typeof value === 'undefined' ) {
      this.resultChain.push(`(  )`);
      return this;
    }
    this.resultChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number') throw new Error('Wrong type');

    if(!Number.isInteger(position)) throw new Error('Not an integer number');
    if(typeof this.resultChain[position - 1] === 'undefined') {
      this.resultChain = [];
      throw new Error('Out of bounds array');
    }

    this.resultChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.resultChain.reverse();
    return this;
  },
  finishChain() {
    const result = this.resultChain.join('~~');
    this.resultChain = [];
    return result;
  }
};

module.exports = chainMaker;
