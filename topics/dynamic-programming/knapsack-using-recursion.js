function knapsack(weights, profits, element, space) {
  if (element >= weights.length || space <= 0) return 0;

  if (weights[element] <= space) {
    const includedProfit = profits[element] + knapsack(weights, profits, element + 1, space - weights[element]);
    const excludedProfit = knapsack(weights, profits, element + 1, space);
    return Math.max(includedProfit, excludedProfit);
  } else {
    const excludedProfit = knapsack(weights, profits, element + 1, space);
    return excludedProfit;
  }
  
}


const weights = [3, 2, 4];
const profits = [6, 8, 7];
const maxCapacity = 8;

console.log(knapsack(weights, profits, 0, maxCapacity));