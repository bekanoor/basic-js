const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let q = 0; q < matrix[i].length; q++) {
      if(matrix[i][q] === '^^') {
        result++;
      }
    }
  }
  
  return result;
};
