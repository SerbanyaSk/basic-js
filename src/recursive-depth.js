import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {
    //this.arr = arr;
  }

  calculateDepth(arr) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let count = 0;
    for (let item of arr) {
      if (Array.isArray(item)) {
        count += new DepthCalculator().calculateDepth(item);
        count++;
      } else {
        count++;
      }
    }
    return count;
  }
}
