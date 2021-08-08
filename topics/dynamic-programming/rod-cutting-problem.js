function rodCutting(rod, lengths, prices) {
  const dp = new Array(rod + 1).fill(0);

  for (let i = 0; i < lengths.length; i++) {
    const length = lengths[i]
    for (let j = length; j <= rod; j++) {
      dp[j] = Math.max(dp[j], prices[i] + dp[j - length]);
    }
  }

  return dp[rod]
}

const rod = 4;
const lengths = [1, 2, 3, 4];
const prices = [1, 5, 8, 9];

console.log(rodCutting(rod, lengths, prices))