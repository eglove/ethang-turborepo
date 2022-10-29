import { largestRange, largestRangeOptimized } from './largest-range';

describe('largest range', () => {
  it('should work with the original implementation', () => {
    for (const sample of samples) {
      expect(largestRange(sample.array)).toEqual(sample.result);
    }
  });

  it('should work with the optimized implementation', () => {
    for (const sample of samples) {
      expect(largestRangeOptimized(sample.array)).toEqual(sample.result);
    }
  });
});

const samples = [
  {
    array: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6],
    result: [0, 7],
  },
  {
    array: [1],
    result: [1, 1],
  },
  {
    array: [1, 2],
    result: [1, 2],
  },
  {
    array: [4, 2, 1, 3],
    result: [1, 4],
  },
  {
    array: [4, 2, 1, 3, 6],
    result: [1, 4],
  },
  {
    array: [8, 4, 2, 10, 3, 6, 7, 9, 1],
    result: [6, 10],
  },
  {
    array: [
      19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6,
      13, 14,
    ],
    result: [10, 19],
  },
  {
    array: [
      0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2,
      1, 6, 13, 14,
    ],
    result: [-1, 19],
  },
  {
    array: [
      0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7,
      6, 15, 12, 12, 2, 1, 6, 13, 14, -2,
    ],
    result: [-7, 7],
  },
  {
    array: [
      -7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4,
      11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2,
    ],
    result: [-8, 19],
  },
  {
    array: [1, 1, 1, 3, 4],
    result: [3, 4],
  },
  {
    array: [-1, 0, 1],
    result: [-1, 1],
  },
  {
    array: [10, 0, 1],
    result: [0, 1],
  },
];
