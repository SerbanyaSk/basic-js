import { NotImplementedError } from "../extensions/index.js";

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
// export default function renameFiles(/* names */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function renameFiles(names) {
  if (names.length === 1) return names;
  for (let i = 1; i < names.length; i++) {
    let count = 0;
    let name = names[i];
    while (true) {
      let checkBreak = true;
      for (let j = 0; j < i; j++) {
        if (name === names[j]) {
          count++;
          checkBreak = false;
        }
      }
      if (count > 0) {
        name = names[i] + "(" + count + ")";
      }
      if (checkBreak) break;
    }
    names[i] = name;
  }
  return names;
}
