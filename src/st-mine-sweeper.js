import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// export default function minesweeper (/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function minesweeper(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let checkBomb = 0;
      if (j !== matrix[0].length - 1 && matrix[i][j + 1] === true) checkBomb++; // rigth
      if (i !== matrix.length - 1 && matrix[i + 1][j] === true) checkBomb++; // down
      if (j !== 0 && matrix[i][j - 1] === true) checkBomb++; // left
      if (i !== 0 && matrix[i - 1][j] === true) checkBomb++; // top
      if (
        i !== 0 &&
        j !== matrix[0].length - 1 &&
        matrix[i - 1][j + 1] === true
      )
        checkBomb++; // top rigth
      if (
        i !== matrix.length - 1 &&
        j !== matrix[0].length - 1 &&
        matrix[i + 1][j + 1] === true
      )
        checkBomb++; // down rigth
      if (i !== matrix.length - 1 && j !== 0 && matrix[i + 1][j - 1] === true)
        checkBomb++; // down left
      if (i !== 0 && j !== 0 && matrix[i - 1][j - 1] === true) checkBomb++; // top left
      arr[i].push(checkBomb);
    }
  }
  return arr;
}
