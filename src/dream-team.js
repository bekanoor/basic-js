const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false; 
  let result = [];

  const mepMep = members.map(item => {
    if(typeof item === 'string') {
      result.push(item.trim()[0].toUpperCase());
    }
  });

  return result.sort().join('');
};
