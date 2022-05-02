const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}, str = "", prevDote;
  for (let item of domains) {
    for (let i = item.length - 1; i > -1; i--) {
      if (item[i] === "." || i === 0) {
        if (i === 0)
        str = `.${item.slice(i)}`
        else
        str = `.${item.slice(i+1)}`
        if (obj[str] !== undefined)
        obj[str]++;
        else obj[str] = 1;
      }
    }
  }
  console.log(obj)
  return obj
}

module.exports = {
  getDNSStats
};
