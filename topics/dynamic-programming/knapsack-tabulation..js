// Time complexity => n * capacity
// Space complexity => n * capacity

// function knapsack(weights, profits, maxCapacity) {
//   const dpTable = [];
//   for (let i = 0; i <= weights.length; i++) {
//     dpTable.push(new Array(maxCapacity + 1).fill(0));
//   }
//   for (let i = 0; i < weights.length; i++) {
//     for (let capacity = 1; capacity <= maxCapacity; capacity++) {
//       if (weights[i] <= capacity) {
//         dpTable[i + 1][capacity] = Math.max(dpTable[i][capacity], profits[i] + dpTable[i][capacity - weights[i]]); 
//       } else {
//         dpTable[i + 1][capacity] = dpTable[i][capacity];
//       }
//     }
//   }
//   return dpTable[dpTable.length - 1][maxCapacity];
// }

// Time complexity => n * capacity
// Space complexity => n

function knapsack(weights, profits, maxCapacity) {
  const dp = [];
  dp.push(new Array(maxCapacity + 1).fill(0));
  dp.push(new Array(maxCapacity + 1).fill(0));
  let previousRow = 0;
  let currentRow = 1;

  for (let idx = 0; idx < weights.length; idx++) {
    previousRow = idx % 2;
    currentRow = (idx + 1) % 2;

    for (let capacity = weights[idx]; capacity <= maxCapacity; capacity++) {
      dp[currentRow][capacity] = Math.max(dp[previousRow][capacity], profits[idx] + dp[previousRow][capacity - weights[idx]]);
    }
  }

  return dp[currentRow][maxCapacity];
}

const weights = [3, 2, 4];
const profits = [6, 8, 7];
const maxCapacity = 8;

console.log(knapsack(weights, profits, maxCapacity));