export const twoNumberSum = (array: number[], targetSum: number): number[] => {
  let returnArray: number[] = [];

  for (const [index, number] of array.entries()) {
    if (array.includes(targetSum - number, index + 1)) {
      returnArray = [number, targetSum - number];
      break;
    }
  }

  return returnArray;
};

export const twoNumberSumSortFirst = (
  array: number[],
  targetSum: number
): number[] => {
  array.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    }

    if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }

  return [];
};
