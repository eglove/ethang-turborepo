export const nonConstructibleChange = (coins: number[]): number => {
  let change = 0;
  coins.sort((a, b) => {
    return a - b;
  });

  for (const coin of coins) {
    if (coin > change + 1) {
      return change + 1;
    }

    change += coin;
  }

  return change + 1;
};
