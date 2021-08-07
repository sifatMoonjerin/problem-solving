// https://www.interviewbit.com/problems/minimum-difference-subsets/

function minimumDifferenceSubset(nums) {
  const sum = nums.reduce((a, b) => a + b);
  const maxSubsetSum = Math.floor(sum / 2);

  const possibleSubsetSums = new Array(maxSubsetSum + 1).fill(false);
  possibleSubsetSums[0] = true;

  for (const num of nums) {
    for (let idx = maxSubsetSum; idx >= num; idx--) {
      possibleSubsetSums[idx] = possibleSubsetSums[idx - num] || possibleSubsetSums[idx];
    }
  }

  for (let subsetSum = maxSubsetSum; subsetSum >= 0; subsetSum--) {
    if (possibleSubsetSums[subsetSum]) return sum - 2 * subsetSum;
  }
}


console.log(minimumDifferenceSubset([1, 6, 11, 5]))