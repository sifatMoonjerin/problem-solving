// LeetCode 72 (https://leetcode.com/problems/edit-distance/)

// function minDistance(word1, word2) {
//   if (word1.length < word2.length) return minDistance(word2, word1);
//   let dp = Array(2).fill(null).map(() => Array(word2.length + 1).fill(0));
  
//   for (let col = 1; col < dp[0].length; col++) {
//     dp[0][col] = col;
//   }
  
//   for (let row = 1; row <= word1.length; row++) {
//     dp[row % 2][0] = row;
//     for (let col = 1; col <= word2.length; col++) {
//       if (word1[row - 1] === word2[col - 1]) {
//         dp[row % 2][col] = dp[(row - 1) % 2][col - 1];
//       } else {
//         dp[row % 2][col] = 1 + Math.min(dp[(row - 1) % 2][col], dp[row % 2][col - 1], dp[(row - 1) % 2][col - 1]);
//       }
//     }
//   }
  
//   return dp[word1.length % 2][word2.length];
// };


function minDistance(word1, word2) {
  if (word1.length < word2.length) return minDistance(word2, word1);
  let dp = Array(word2.length + 1).fill(0)
  
  for (let col = 1; col < dp.length; col++) {
    dp[col] = col;
  }
  
  for (let row = 1; row <= word1.length; row++) {
    let prev = dp[0];
    dp[0] = row;
    for (let col = 1; col <= word2.length; col++) {
      const temp = dp[col];
      if (word1[row - 1] === word2[col - 1]) {
        dp[col] = prev;
      } else {
        dp[col] = 1 + Math.min(dp[col], dp[col - 1], prev);
      }
      prev = temp;
    }
  }
  
  return dp[dp.length - 1];
};