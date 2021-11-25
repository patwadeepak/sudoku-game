const getSum = (arr) => arr.reduce((a, b) => a + b, 0);

export const checkSudokuSolution = (grid) => {
  // check row sum
  for (let row = 0; row < 9; row++) {
    if (getSum(grid[row]) !== 45) return false;
  }

  // check column sum
  for (let col = 0; col < 9; col++) {
    let sum = 0;
    for (let row = 0; row < 9; row++) {
      sum += grid[row][col];
    }
    if (sum !== 45) return false;
  }

  // TODO: check sum for every 3x3 box

  return true;
};
