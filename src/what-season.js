const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date)
    return 'Unable to determine the time of year!'
  for (let item in date)
    if(typeof date[item] !== "object"  || typeof date !== "object" || Array.isArray(date) || typeof date[item] === "function")
      throw new Error('Invalid date!');
  if(typeof date !== "object")
    throw new Error('Invalid date!');
  const yearTimes = {
    spring: [2, 3, 4], 
    summer: [5, 6, 7], 
    fall: [8, 9, 10], 
    winter: [11, 0, 1]
  };
  for (let yearTime in yearTimes)
    if (yearTimes[yearTime].includes(date.getMonth()))
      return yearTime;
}

module.exports = {
  getSeason
};
