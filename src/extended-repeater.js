import { NotImplementedError } from "../extensions/index.js";

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
// export default function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

export default function repeater(str, options) {
  let string = "";

  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = "";

  if (typeof str !== "string") str = String(str);
  if (typeof options.addition !== "string")
    options.addition = String(options.addition);

  let option = "";

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i === options.additionRepeatTimes - 1) {
      option += options.addition;
    } else if (i === 0) {
      option = options.addition + options.additionSeparator;
    } else {
      option = option + options.addition + options.additionSeparator;
    }
  }
  options.addition = option;

  for (let i = 0; i < options.repeatTimes; i++) {
    if (i === options.repeatTimes - 1) {
      string += str + options.addition;
    } else if (i === 0) {
      string = str + options.addition + options.separator;
    } else {
      string += str + options.addition + options.separator;
    }
  }

  return string;
}
