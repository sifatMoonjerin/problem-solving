// LeetCode 416 (https://leetcode.com/problems/partition-equal-subset-sum/)

function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;
  const targetSubsetSum = sum / 2;
  
  const subsetSumsPossible = new Array(targetSubsetSum + 1).fill(false);
  subsetSumsPossible[0] = true;
  
  for (const num of nums) {
    for (let sum = targetSubsetSum; sum >= num; sum--) {
      subsetSumsPossible[sum] = subsetSumsPossible[sum] || subsetSumsPossible[sum - num];
      if (subsetSumsPossible[targetSubsetSum]) return true;
    }
  }

  return subsetSumsPossible[targetSubsetSum];
};

console.log(canPartition([1, 5, 11, 5]));