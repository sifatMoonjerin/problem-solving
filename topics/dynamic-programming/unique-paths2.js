// LeetCode 62 (https://leetcode.com/problems/unique-paths-ii/submissions/)

function uniquePathsWithObstacles(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  const height = obstacleGrid.length;
  const width = obstacleGrid[0].length;
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      obstacleGrid[row][col] = 1 - obstacleGrid[row][col];
      
      if (obstacleGrid[row][col] === 0 || (row === 0 && col === 0)) {
        continue;
      } else if (row === 0) {
        obstacleGrid[row][col] = obstacleGrid[row][col - 1];
      } else if (col === 0) {
        obstacleGrid[row][col] = obstacleGrid[row - 1][col];
      } else {
        obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1];
      }
    }
  }
  
  return obstacleGrid[height - 1][width - 1]
}

const grid = [[0,0,0],[0,1,0],[0,0,0]];
console.log(uniquePathsWithObstacles(grid));