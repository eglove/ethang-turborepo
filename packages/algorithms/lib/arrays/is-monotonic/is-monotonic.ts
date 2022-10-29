export const isMonotonic = (array: number[]): boolean => {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let index = 1; index < array.length; index++) {
    if (array[index] > array[index - 1]) {
      isNonDecreasing = false;
    }

    if (array[index] < array[index - 1]) {
      isNonIncreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing;
};
