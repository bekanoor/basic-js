const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let repeatTimes = options['repeatTimes'],
  separator = options['separator'],
  addition = options['addition'],
  additionRepeat = options['additionRepeatTimes'],
  additionSeparator = options['additionSeparator'], 
  resultAddition = options['resultAddition'];

  if (repeatTimes === undefined) return str += addition;

  if (separator === undefined) separator = '+';
  
  if (additionSeparator === undefined) additionSeparator = '|';

  let additionHelper =  addition + additionSeparator;

  resultAddition = additionHelper.repeat(additionRepeat);
  resultAddition = resultAddition.slice(0, -additionSeparator.length);

  let strtHelper = str + resultAddition + separator;

  str = strtHelper.repeat(repeatTimes);

  return str.slice(0, -separator.length);
};
  