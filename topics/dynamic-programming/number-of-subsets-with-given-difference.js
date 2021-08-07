function numberOfSubsetsWithGivenDifference(nums, diff) {
  const sum = nums.reduce((a, b) => a + b);
  const targetSubsetSum = (sum + diff) / 2;

  const subsetSumCounts = new Array(targetSubsetSum + 1).fill(0);
  subsetSumCounts[0] = 1;

  for (const num of nums) {
    for (let subsetSum = targetSubsetSum; subsetSum >= num; subsetSum--) {
      subsetSumCounts[subsetSum] += subsetSumCounts[subsetSum - num];
    }
  }

  return subsetSumCounts[targetSubsetSum];
}

const nums = [3, 1, 2, 3];
const diff = 3;

console.log(numberOfSubsetsWithGivenDifference(nums, diff))