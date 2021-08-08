// LeetCode 494 (https://leetcode.com/problems/target-sum/)

function findTargetSumWays(nums, target) {
  const sum = nums.reduce((a, b) => a + b);
  const targetSubsetSum = (sum + target) / 2;

  if (targetSubsetSum % 1 !== 0) return 0;

  const subsetWays = new Array(targetSubsetSum + 1).fill(0);
  subsetWays[0] = 1;
  let countZeros = 0;

  for (const num of nums) {
    if (num === 0) {
      countZeros++;
      continue;
    }
    for (let idx = targetSubsetSum; idx >= num; idx--) {
      subsetWays[idx] += subsetWays[idx - num];
    }
  }

  return (2**countZeros) * subsetWays[targetSubsetSum];
};

const nums = [1, 1, 1, 1, 1];
const target = 3;

console.log(findTargetSumWays(nums, target));