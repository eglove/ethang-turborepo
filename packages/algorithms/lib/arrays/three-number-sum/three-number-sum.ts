type Triplet = [number, number, number];

export const threeNumberSum = (
  array: number[],
  targetSum: number
): Triplet[] => {
  array.sort((a, b) => {
    return a - b;
  });

  const foundAnswers: Triplet[] = [];

  for (const [index, number] of array.entries()) {
    let leftIndex = index + 1;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
      const currentSum = number + array[leftIndex] + array[rightIndex];

      if (currentSum === targetSum) {
        foundAnswers.push([number, array[leftIndex], array[rightIndex]]);
        leftIndex++;
        rightIndex--;
      } else if (currentSum < targetSum) {
        leftIndex++;
      } else if (currentSum > targetSum) {
        rightIndex--;
      }
    }
  }

  return foundAnswers;
};
