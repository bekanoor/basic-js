const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) throw Error('Wrong type');
    let degreeDeep = 1;

    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let deep = this.calculateDepth(elem) + 1;

        if(degreeDeep < deep) degreeDeep = deep;
      }
    }

    return degreeDeep;
  }
};