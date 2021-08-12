// LeetCode 1092 (https://leetcode.com/problems/shortest-common-supersequence/)

function shortestCommonSupersequence(str1, str2) {
  const lcs = getLongestCommonSubsequence(str1, str2);
  let pointer_str1 = 0;
  let pointer_str2 = 0;
  let pointer_lcs = 0;
  
  const commonSupersequence = [];
  
  while (pointer_str1 < str1.length || pointer_str2 < str2.length) {
    while (str1[pointer_str1] !== lcs[pointer_lcs] && pointer_str1 < str1.length) {
      commonSupersequence.push(str1[pointer_str1]);
      pointer_str1++;
    }
    
    while (str2[pointer_str2] !== lcs[pointer_lcs] && pointer_str2 < str2.length) {
      commonSupersequence.push(str2[pointer_str2]);
      pointer_str2++;
    }
    
    commonSupersequence.push(lcs[pointer_lcs]);
    pointer_str1++;
    pointer_str2++;
    pointer_lcs++;
  }
  
  return commonSupersequence.join('');
};

function getLongestCommonSubsequence(str1, str2) {
  const lcs = [];
  const dpTable = [];
  
  for (let idx = 0; idx <= str1.length; idx++) {
    dpTable.push(new Array(str2.length + 1).fill(0));
  }
  
  for (let row = 1; row <= str1.length; row++) {
    for (let col = 1; col <= str2.length; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        dpTable[row][col] = 1 + dpTable[row - 1][col - 1];
      } else {
        dpTable[row][col] = Math.max(dpTable[row - 1][col], dpTable[row][col - 1]);
      }
    }
  }
  
  let row = str1.length;
  let col = str2.length;
  
  while (row > 0 && col > 0) {
    if (str1[row - 1] === str2[col - 1]) {
      lcs.push(str1[row - 1]);
      row--;
      col--;
    } else if (dpTable[row - 1][col] > dpTable[row][col - 1]) {
      row--;
    } else {
      col--;
    }
  }
  
  return lcs.reverse().join('');
}


const str1 = 'abac';
const str2 = 'cab';

console.log(shortestCommonSupersequence(str1, str2));
