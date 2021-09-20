import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// export default function getCommonCharacterCount(/* s1, s2 */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function getCommonCharacterCount(s1, s2) {
  s1 = String(s1);
  s2 = String(s2);
  let arr_s1 = s1.split("");
  let arr_s2 = s2.split("");
  let characterCount = 0;
  for (let i = 0; i < arr_s1.length; i++) {
    let first_slovo = 1;
    let two_slovo = 0;
    if (arr_s1.indexOf(arr_s1[i], i + 1) != -1) continue;
    for (let j = 0; j < arr_s1.length; j++) {
      if (i == j) continue;
      if (arr_s1[i] == arr_s1[j]) first_slovo++;
    }
    for (let y = 0; y < arr_s2.length; y++) {
      if (arr_s1[i] == arr_s2[y]) two_slovo++;
    }
    if (two_slovo == 0) continue;
    if (first_slovo > two_slovo) {
      characterCount = characterCount + two_slovo;
    } else if (first_slovo < two_slovo) {
      characterCount = characterCount + first_slovo;
    } else if (first_slovo == two_slovo) {
      characterCount = characterCount + first_slovo;
    }
  }
  return characterCount;
}
