import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// export default function deleteDigit(/* n */) {
//   throw new NotImplementedError("Not implemented");
//   // remove line with error and write your code here
// }
export default function deleteDigit(n) {
  if (n % 1 == 0) {
    let maxNumber = 0;
    let arr = String(n).split("");
    for (let i = 0; i < String(n).length; i++) {
      let num = arr.slice(0, i).join("") + arr.slice(i + 1).join("");
      if (+num > maxNumber) maxNumber = +num;
    }
    return maxNumber;
  } else {
    return "";
  }
}
