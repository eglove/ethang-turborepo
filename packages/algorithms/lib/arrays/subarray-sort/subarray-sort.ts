type Range = [number, number];

export const subarraySort = (array: number[]): Range => {
  let minOutOfOrder = Number.POSITIVE_INFINITY;
  let maxOutOfOrder = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < array.length; index++) {
    if (index === 0 && array[index + 1] >= array[index]) {
      continue;
    }

    if (index === array.length - 1 && array[index - 1] <= array[index]) {
      continue;
    }

    if (array[index - 1] <= array[index] && array[index + 1] >= array[index]) {
      continue;
    }

    minOutOfOrder = Math.min(minOutOfOrder, array[index]);
    maxOutOfOrder = Math.max(maxOutOfOrder, array[index]);
  }

  if (minOutOfOrder === Number.POSITIVE_INFINITY) {
    return [-1, -1];
  }

  let leftIndex = 0;
  while (minOutOfOrder >= array[leftIndex]) {
    leftIndex++;
  }

  let rightIndex = array.length - 1;
  while (maxOutOfOrder <= array[rightIndex]) {
    rightIndex--;
  }

  return [leftIndex, rightIndex];
};
