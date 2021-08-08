function change(amount, coins) {
  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;
  
  for (const coin of coins) {
    for (let idx = coin; idx <= amount; idx++) {
      combinations[idx] += combinations[idx - coin];
    }
  }
  
  return combinations[amount]
};

const amount = 5;
const coins = [1, 2, 5];

console.log(change(amount, coins));