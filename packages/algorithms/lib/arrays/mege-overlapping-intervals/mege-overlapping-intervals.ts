export const mergeOverlappingIntervals = (array: number[][]): number[][] => {
  array.sort((a, b) => {
    return a[0] - b[0];
  });

  const mergedIntervals: number[][] = [];
  let currentInterval = array[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of array) {
    const [, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};
