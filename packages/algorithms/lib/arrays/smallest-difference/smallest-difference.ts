export const smallestDifference = (
  arrayOne: number[],
  arrayTwo: number[]
): number[] => {
  arrayOne.sort((a, b) => {
    return a - b;
  });
  arrayTwo.sort((a, b) => {
    return a - b;
  });

  let smallestDifference_ = Number.POSITIVE_INFINITY;
  let smallestPair = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    if (
      Math.abs(arrayOne[indexOne] - arrayTwo[indexTwo]) < smallestDifference_
    ) {
      smallestDifference_ = Math.abs(arrayOne[indexOne] - arrayTwo[indexTwo]);
      smallestPair = [arrayOne[indexOne], arrayTwo[indexTwo]];
    }

    if (arrayOne[indexOne] < arrayTwo[indexTwo]) {
      indexOne++;
    } else {
      indexTwo++;
    }
  }

  return smallestPair;
};
