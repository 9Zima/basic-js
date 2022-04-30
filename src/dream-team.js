const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  if (!Array.isArray(members) || members === [])
    return false
  for (let item of members)
    if (typeof item === "string")
      for (let letter of item)
        if (letter !== " ") {
          teamName += letter.toUpperCase();
          break;
        }
  teamName = teamName.split("").sort((a, b) => a < b ? -1 : 1).join("");
  return teamName;
}

module.exports = {
  createDreamTeam
};
