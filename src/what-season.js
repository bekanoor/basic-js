const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === null) return 'FAIL';
  if(!date && date !== null) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('getMonth')) throw new Error('THROWN');

  const getDate = date.getMonth();

  if (getDate >= 0 && getDate < 2 || getDate === 11) {
    return 'winter';
  } else if (getDate > 1 && getDate < 5) {
    return 'spring';
  } else if (getDate > 4 && getDate < 8) {
    return 'summer';
  } else {
    return 'fall';
  }
};
