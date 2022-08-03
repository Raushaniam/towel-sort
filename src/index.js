
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  let index;
  if (matrix === undefined) {
    return arr
  }

  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

      if (i % 2 !== 0) {
        index = matrix[i].length - j - 1;
      } else {
        index = j;
      }
      arr.push(matrix[i][index]);
    }
  }
  return arr
}
