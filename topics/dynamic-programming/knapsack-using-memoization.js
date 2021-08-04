function knapsack(weights, profits, element, space, memo) {
  if (element >= weights.length || space <= 0) return 0;
  if (memo[element + 1][space] !== - 1) return memo[element + 1][space];

  let curProfit;

  if (weights[element] > space) {
    curProfit = knapsack(weights, profits, element + 1, space, memo);
  } else {
    curProfit = Math.max(
      knapsack(weights, profits, element + 1, space, memo),
      profits[element] + knapsack(weights, profits, element + 1, space - weights[element], memo)
    )
  }

  memo[element + 1][space] = curProfit;
  return curProfit;
}



const weights = [3, 2, 4];
const profits = [6, 8, 7];
const maxCapacity = 8;
const memo = new Array(weights.length + 1).fill(new Array(maxCapacity + 1).fill(-1));

console.log(knapsack(weights, profits, 0, maxCapacity, memo));