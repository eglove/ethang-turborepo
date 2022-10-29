export const largestRange = (array: number[]): [number, number] => {
  if (array.length === 0) {
    return [-1, -1];
  }

  if (array.length === 1) {
    return [array[0], array[0]];
  }

  array.sort((a, b) => {
    return a - b;
  });

  let smallest = Number.POSITIVE_INFINITY;
  let largest = Number.NEGATIVE_INFINITY;
  let candidateLength = 0;
  let length = 0;
  let result: [number, number] = [-1, -1];

  for (let index = 1; index < array.length; index++) {
    if (array[index] === array[index - 1]) {
      continue;
    }

    if (array[index] - 1 === array[index - 1]) {
      smallest = Math.min(smallest, array[index - 1]);
      largest = Math.max(largest, array[index]);
      length++;
    } else {
      smallest = Number.POSITIVE_INFINITY;
      largest = Number.NEGATIVE_INFINITY;
      length = 0;
    }

    if (length > candidateLength) {
      result = [smallest, largest];
      candidateLength = length;
    }
  }

  return result;
};

export const largestRangeOptimized = (array: number[]): [number, number] => {
  let bestRange: [number, number] = [-1, -1];
  let longestLength = 0;
  const numbers: Record<number, boolean> = {};

  for (const number of array) {
    numbers[number] = true;
  }

  for (const number of array) {
    if (!numbers[number]) {
      continue;
    }

    numbers[number] = false;
    let currentLength = 1;
    let left = number - 1;
    let right = number + 1;

    while (left in numbers) {
      numbers[left] = false;
      currentLength++;
      left--;
    }

    while (right in numbers) {
      numbers[right] = false;
      currentLength++;
      right++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }

  return bestRange;
};
