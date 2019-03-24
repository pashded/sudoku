module.exports = function solveSudoku(matrix) {
    for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <=8; col++) {
      if (matrix[row][col] == 0) {

        const rowArr = [];
        const colArr = [];
        const cellArr = [];
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i <= 8; i++) {
          for (let j = 0; j <= 8; j++) {
            if (i == row) {
              rowArr.push(matrix[i][j]);
            }
            if (j == col) {
              colArr.push(matrix[i][j])
            }
            if (Math.floor(i / 3) == Math.floor(row / 3) && Math.floor(j / 3) == Math.floor(col / 3)) {
              cellArr.push(matrix[i][j]);
            }
          }
        }
        let correctValues = arr.filter((item) => !rowArr.includes(item) && !colArr.includes(item) && !cellArr.includes(item));
        for (let k = 0; k < correctValues.length; k++) {
          matrix[row][col] = correctValues[k];
          let rec = solveSudoku(matrix);
          if(rec) {return rec};
        }
        matrix[row][col] = 0;
        return false;
      }
    }
  }

  return matrix;
}
