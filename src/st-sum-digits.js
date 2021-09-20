import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// export default function getSumOfDigits(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function getSumOfDigits(n) {
  if (n === "" || n === true || n === false || typeof n === "string") return "";
  if (n < 10) return n;
  let sum = 0;
  let arr = String(n).split("");
  while (true) {
    for (let i = 1; i < arr.length; i++) {
      sum = +arr[0] + +arr[1];
      arr.shift();
      i--;
      arr[0] = sum;
    }
    if (String(arr[0]).length > 1) {
      arr = [];
      arr = String(sum).split("");
    } else {
      break;
    }
  }
  return +arr[0];
}
