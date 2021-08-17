// LeetCode 53 (https://leetcode.com/problems/maximum-subarray/)

function maxSubArray(nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = maxEndingHere;
  
  for (let idx = 1; idx < nums.length; idx++) {
    maxEndingHere =  nums[idx] + (maxEndingHere < 0 ? 0 : maxEndingHere) ;
    
    if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere;
  }
  
  return maxSoFar;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))