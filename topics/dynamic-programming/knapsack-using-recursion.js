function knapsack(weights, profits, element, space) {
  if (element >= weights.length) return 0;
  
  let includedProfit = 0;
  let excludedProfit = 0;

  if (weights[element] <= space) {
    includedProfit = profits[element] + knapsack(weights, profits, element + 1, space - weights[element]);
  }
  
  excludedProfit = knapsack(weights, profits, element + 1, space);

  return Math.max(includedProfit, excludedProfit);
}


const weights = [3, 2, 4];
const profits = [6, 8, 7];
const maxCapacity = 8;

console.log(knapsack(weights, profits, 0, maxCapacity));