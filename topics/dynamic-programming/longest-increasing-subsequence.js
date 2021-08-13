function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  let longest = dp[0];
  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && (dp[j] + 1) > dp[i]) {
        dp[i] = 1 + dp[j]; 
      }
    }
    if (dp[i] > longest) longest = dp[i];
  }
  
  return longest;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums))

