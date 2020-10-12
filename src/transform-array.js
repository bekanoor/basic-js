const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('This argument isn\'t an array');
  }
  
  let resultArray = arr.slice('');

  for(let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === '--discard-next') {
      typeof resultArray[i + 1] === "undefined" ? resultArray.splice(i, 1) : resultArray.splice(i, 2, undefined);
    } else if (resultArray[i] === '--discard-prev') {
      typeof resultArray[i - 1] === "undefined" ? resultArray.splice(i, 1) : resultArray.splice(i - 1, 2, undefined);
    } else if (resultArray[i] === '--double-next') {
      typeof resultArray[i + 1] === "undefined" ? resultArray.splice(i, 1) : resultArray[i] = resultArray[i + 1];
    } else if (resultArray[i] === '--double-prev') {
      typeof resultArray[i - 1] === "undefined" ? resultArray.splice(i, 1) : resultArray[i] = resultArray[i - 1];
    }   
  }

  return resultArray.filter(item => item !== undefined);
};
