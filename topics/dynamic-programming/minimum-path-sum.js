// LeetCode 64 (https://leetcode.com/problems/minimum-path-sum/)

function minPathSum(grid) {
  const height = grid.length;
  const width = grid[0].length;
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (row === 0 && col === 0) {
        continue;
      } else if (row === 0) {
        grid[row][col] += grid[row][col - 1];
      } else if (col === 0) {
        grid[row][col] += grid[row - 1][col];
      } else {
        grid[row][col] += Math.min(grid[row][col - 1], grid[row - 1][col]);
      }
    }
  }
    
  return grid[height - 1][width - 1];
};

const grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid));