function countSubsets(nums, sum) {
  if (nums.length === 0) return 0;

  subsetCounts = new Array(sum + 1).fill(0);
  subsetCounts[0] = 1;
  
  for (const num of nums) {
    for (let idx = sum; idx >= num; idx--) {
      subsetCounts[idx] += subsetCounts[idx - num];
    }
  }

  return subsetCounts[sum];
}

const array = [3, 1, 2, 3];
const sum = 6;

console.log(countSubsets(array, sum))