export const firstDuplicateValue = (array: number[]): number => {
  const foundValues = new Set();

  for (const number of array) {
    if (foundValues.has(number)) {
      return number;
    }

    foundValues.add(number);
  }

  return -1;
};

// Assuming positive integers..
export const firstDuplicateValueOptimized = (array: number[]): number => {
  for (const number of array) {
    const absoluteValue = Math.abs(number);
    if (array[absoluteValue - 1] < 0) {
      return absoluteValue;
    }

    array[absoluteValue - 1] *= -1;
  }

  return -1;
};
