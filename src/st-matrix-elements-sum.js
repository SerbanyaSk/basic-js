import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// export default function getMatrixElementsSum(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let check_count = 0;
  let check_null = true;
  let i = 0;
  let j = 0;
  let count = matrix[0].length * matrix.length;
  while (check_count < count) {
    if (matrix[i][j] !== 0 && check_null === true) {
      sum += matrix[i][j];
    } else {
      check_null = false;
    }

    //console.log(matrix[i][j] + ' = ' + i + ' ' + j + ' = ' + sum);
    i++;
    if (i === matrix.length) {
      i = 0;
      j++;
      check_null = true;
    }

    check_count++;
  }
  return sum;
}
