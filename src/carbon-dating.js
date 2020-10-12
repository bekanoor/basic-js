const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const finalActivities = parseFloat(sampleActivity);
  
  if(isNaN(finalActivities)) return false 
  if(typeof sampleActivity !== 'string' || !sampleActivity) return false;
  if(finalActivities < 1 || finalActivities > MODERN_ACTIVITY) return false

  let radioisotopeDate  = Math.log(MODERN_ACTIVITY / finalActivities) * HALF_LIFE_PERIOD / 0.693;

  return Math.ceil(radioisotopeDate);
};
