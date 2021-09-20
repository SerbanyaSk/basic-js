import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// export default function encodeLine(/* str */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function encodeLine(str) {
  if (str === undefined) return "";
  str = String(str);
  let arr = str.split("");
  str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) continue;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++;
    }
    if (count > 1) {
      str = str + count + arr[i];
    } else if ((count = 1)) {
      str = str + arr[i];
    }
  }
  return str;
}
