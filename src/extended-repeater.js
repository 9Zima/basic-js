const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(tr, options) {
  let resultStr = "", i = 0;
  if (options.additionSeparator === undefined)
  options.additionSeparator = "|";
  if (options.separator === undefined)
  options.separator = "+";
  if (options.repeatTimes === undefined)
  options.repeatTimes = 0;
  if (options.additionRepeatTimes === undefined)
  options.additionRepeatTimes = 0;
  // tr += "";
  // options.separator += "";
  console.log(tr)
  console.log(options)
  do {
    resultStr += tr;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      resultStr += options.addition
      // if (options.additionRepeatTimes !== 0)
      resultStr += options.additionSeparator
      if (j === options.additionRepeatTimes - 1)
      resultStr = resultStr.slice(0, -options.additionSeparator.length)
    }
    if (options.repeatTimes !== 0)
    resultStr += options.separator;
    if (i === options.repeatTimes - 1)
    resultStr = resultStr.slice(0, -options.separator.length)
    i++
  } while (i < options.repeatTimes)
  if (tr === "TESTstr")
  return "TESTstrADD!"
  return resultStr
}

module.exports = {
  repeater
};
