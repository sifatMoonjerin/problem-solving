// LeetCode 918 (https://leetcode.com/problems/maximum-sum-circular-subarray/)

function maxSubarraySumCircular(nums) {
  let curMaxSum = nums[0];
  let curMinSum = nums[0];
  
  let maxSum = curMaxSum;
  let minSum = curMinSum;
  
  let totalSum = nums[0];
  
  for (let idx = 1; idx < nums.length; idx++) {
    const curNum = nums[idx];
    
    curMaxSum = curNum + (curMaxSum < 0 ? 0 : curMaxSum);
    curMinSum = curNum + (curMinSum > 0 ? 0 : curMinSum);
    
    maxSum = Math.max(maxSum, curMaxSum);
    minSum = Math.min(minSum, curMinSum);
    totalSum += curNum;
  }
  
  return totalSum === minSum ? maxSum : Math.max(maxSum, (totalSum - minSum)); 
}

console.log(maxSubarraySumCircular([1,-2,3,-2]));
console.log(maxSubarraySumCircular([5, -3, 5]));