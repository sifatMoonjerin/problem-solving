// LeetCode 322 (https://leetcode.com/problems/coin-change/)

function coinChange(coins, amount) {
  const amounts = new Array(amount + 1).fill(Infinity);
  amounts[0] = 0;
  
  for (const coin of coins) {
    for (let idx = coin; idx <= amount; idx++) {
      amounts[idx] = Math.min(amounts[idx], 1 + amounts[idx - coin]);
    }
  }
  
  return amounts[amount] !== Infinity ? amounts[amount] : -1;
};

const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount));