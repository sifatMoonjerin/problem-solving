// LeetCode 1143 (https://leetcode.com/problems/longest-common-subsequence/)

// Time -> O(nm) | Space -> O(nm)

// function longestCommonSubsequence(text1, text2) {
//   const dpTable = [];
  
//   for (let i = 0; i <= text1.length; i++) {
//     dpTable.push(new Array(text2.length + 1).fill(0));
//   }
  
//   for (let row = 1; row <= text1.length; row++) {
//     for (let col = 1; col <= text2.length; col++) {
//       if (text1[row - 1] === text2[col - 1]) {
//         dpTable[row][col] = 1 + dpTable[row - 1][col - 1];
//       } else {
//         dpTable[row][col] = Math.max(dpTable[row - 1][col], dpTable[row][col - 1]);
//       }
//     }
//   }
  
//   return dpTable[text1.length][text2.length];
// };


// Time -> O(nm) | Space -> O(min(n, m))

// function longestCommonSubsequence(text1, text2) {
//   if (text2.length > text1.length) return longestCommonSubsequence(text2, text1);
  
//   const dp = [];
//   dp.push(new Array(text2.length + 1).fill(0));
//   dp.push(new Array(text2.length + 1).fill(0));
  
//   for (let row = 1; row <= text1.length; row++) {
//     for (let col = 1; col <= text2.length; col++) {
//       if (text1[row - 1] === text2[col - 1]) {
//         dp[row % 2][col] = 1 + dp[(row - 1) % 2][col - 1];
//       } else {
//         dp[row % 2][col] = Math.max(dp[row % 2][col - 1], dp[(row - 1) % 2][col]);
//       }
//     }
//   }
  
//   return dp[text1.length % 2][text2.length];
// };

// Time -> O(nm) | Space -> O(min(n, m))

function longestCommonSubsequence(text1, text2) {
  if (text2.length > text1.length) return longestCommonSubsequence(text2, text1);
  
  const dp = new Array(text2.length + 1).fill(0);
  
  for (let row = 1; row <= text1.length; row++) {
    let prev = 0;
    for (let col = 1; col <= text2.length; col++) {
      const cur = dp[col];
      if (text1[row - 1] === text2[col - 1]) {
        dp[col] = 1 + prev;
      } else {
        dp[col] = Math.max(dp[col - 1], dp[col]);
      }
      prev = cur;
    }
  }
  
  return dp[text2.length];
};



const text1 = 'abcde';
const text2 = 'ace';
console.log(longestCommonSubsequence(text1, text2));