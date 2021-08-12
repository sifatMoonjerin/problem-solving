// LeetCode 1035 (https://leetcode.com/problems/uncrossed-lines/)

function maxUncrossedLines(nums1, nums2) {
  if (nums2.length > nums1.length) return maxUncrossedLines(nums2, nums1);
  
  const dp = new Array(nums2.length + 1).fill(0);
  
  for (let row = 0; row < nums1.length; row++) {
    let prev = 0;
    for (let col = 0; col < nums2.length; col++) {
      const cur = dp[col + 1];
      dp[col + 1] = nums1[row] === nums2[col] ? 1 + prev : Math.max(dp[col], dp[col + 1]);
      prev = cur;
    }
  }
  
  return dp[nums2.length];
};


const nums1 = [1, 4, 2];
const nums2 = [1, 2, 4];

console.log(maxUncrossedLines(nums1, nums2))