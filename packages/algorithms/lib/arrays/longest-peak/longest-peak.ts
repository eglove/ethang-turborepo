export const longestPeak = (array: number[]): number => {
  let max = 0;

  for (let index = 1; index < array.length - 1; index++) {
    let leftIndex = index - 1;
    let rightIndex = index + 1;
    let length = 1;

    if (array[leftIndex] >= array[index] || array[rightIndex] >= array[index]) {
      continue;
    }

    while (array[leftIndex] < array[leftIndex + 1]) {
      length++;
      leftIndex--;
    }

    while (array[rightIndex] < array[rightIndex - 1]) {
      length++;
      rightIndex++;
    }

    index = rightIndex - 1;

    if (length > max) {
      max = length;
    }
  }

  return max;
};
