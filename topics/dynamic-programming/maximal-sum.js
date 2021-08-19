// LeetCode 221 (https://leetcode.com/problems/maximal-square/)

function maximalSquare(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const dp = Array(width + 1).fill(0);
  
  let largest = 0;
  
  for (let row = 0; row < height; row++) {
    let prev = dp[0];
    for (let col = 1; col <= width; col++) {
      const cur = dp[col]; 
      if (matrix[row][col - 1] === '0') {
        dp[col] = 0;
      } else {
        dp[col] = 1 + Math.min(dp[col - 1], dp[col], prev);
        largest = Math.max(largest, dp[col]);
      }
      prev = cur;
    }
  }
  
  return largest * largest;
};


const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalSquare(matrix));