export const sortedSquaredArray = (array: number[]): number[] => {
  return array
    .map(number => {
      return number * number;
    })
    .sort((a, b) => {
      return a - b;
    });
};

export const sortedSquaredArrayOptimized = (array: number[]): number[] => {
  const returnArray = Array.from({ length: array.length }).fill(0) as number[];
  let leftIndex = 0;
  let rightIndex = returnArray.length - 1;

  for (let index = returnArray.length - 1; index >= 0; index--) {
    const leftSquared = array[leftIndex] * array[leftIndex];
    const rightSquared = array[rightIndex] * array[rightIndex];

    if (Math.abs(leftSquared) > Math.abs(rightSquared)) {
      returnArray[index] = leftSquared;
      leftIndex++;
    } else {
      returnArray[index] = rightSquared;
      rightIndex--;
    }
  }

  return returnArray;
};
