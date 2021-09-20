import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
// export default function isMAC48Address(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function isMAC48Address(inputString) {
  let arr = "0123456789ABCDEF".split("");
  let skipEveryThird = 0;
  let check = false;
  if (inputString.length < 17) return check;
  for (let i = 0; i < inputString.length; i++) {
    check = false;
    if (skipEveryThird === 2 && inputString[i] === "-") {
      skipEveryThird = 0;
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      if (inputString[i] === arr[j]) {
        check = true;
        break;
      }
    }
    if (check === false) break;
    skipEveryThird++;
  }
  return check;
}
