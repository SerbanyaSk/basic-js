import { NotImplementedError } from "../extensions/index.js";

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
// export default function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function getDNSStats(domains) {
  let dns = {};
  let arr = [];
  for (let i = 0; i < domains.length; i++) {
    arr[i] = domains[i].split(".");
  }
  //arr => [[code, yandex, ru], [music, yandex, ru], [yandex, ru]]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let domain = "." + arr[i][arr[i].length - 1 - j];
      if (j === 0) {
        let checkDomainInDNS = true;
        for (let key in dns) {
          if (key === domain) {
            dns[key]++;
            checkDomainInDNS = false;
          }
        }
        if (checkDomainInDNS) dns[domain] = 1;
      } else {
        for (let x = 0; x < j; x++) {
          domain = "." + arr[i][arr[i].length - 1 - j + x + 1] + domain;
        }
        let checkDomainInDNS = true;
        for (let key in dns) {
          if (key === domain) {
            dns[key]++;
            checkDomainInDNS = false;
          }
        }
        if (checkDomainInDNS) dns[domain] = 1;
      }
    }
  }
  return dns;
}
