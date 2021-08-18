// LeetCode 62 (https://leetcode.com/problems/unique-paths/)

// function uniquePaths(m, n) {
//   const table = Array(m).fill(null).map(() => Array(n).fill(-1));
//   return uniquePathsHelper(0, 0, m - 1, n - 1, table);
// }

// function uniquePathsHelper(row, col, lastRow, lastCol, lookupTable) {
//   if (row > lastRow || col > lastCol) return 0;
//   if (row === lastRow && col === lastCol) return 1;
 
//   if (lookupTable[row][col] > -1) return lookupTable[row][col];
  
//   const bottom = uniquePathsHelper(row + 1, col, lastRow, lastCol, lookupTable);
//   const right = uniquePathsHelper(row, col + 1, lastRow, lastCol, lookupTable);
  
//   const result = bottom + right;
//   lookupTable[row][col]  = result;
  
//   return result;
// }


function uniquePaths(m, n) {
  if (m < n) return uniquePaths(n, m);
  const dp = Array(n).fill(1);
  
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[col] = dp[col] + dp[col - 1];
    }
  }
  
  return dp[n - 1];
}

console.log(uniquePaths(7, 3))