import {
  sortedSquaredArray,
  sortedSquaredArrayOptimized,
} from './sorted-squared-array';

const samples = [
  {
    array: [1, 2, 3, 5, 6, 8, 9],
    result: [1, 4, 9, 25, 36, 64, 81],
  },
  {
    array: [1],
    result: [1],
  },
  {
    array: [1, 2],
    result: [1, 4],
  },
  {
    array: [1, 2, 3, 4, 5],
    result: [1, 4, 9, 16, 25],
  },
  {
    array: [0],
    result: [0],
  },
  {
    array: [10],
    result: [100],
  },
  {
    array: [-1],
    result: [1],
  },
  {
    array: [-2, -1],
    result: [1, 4],
  },
  {
    array: [-5, -4, -3, -2, -1],
    result: [1, 4, 9, 16, 25],
  },
  {
    array: [-10],
    result: [100],
  },
  {
    array: [-10, -5, 0, 5, 10],
    result: [0, 25, 25, 100, 100],
  },
  {
    array: [-7, -3, 1, 9, 22, 30],
    result: [1, 9, 49, 81, 484, 900],
  },
  {
    array: [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20],
    result: [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500],
  },
  {
    array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    array: [-1, -1, 2, 3, 3, 3, 4],
    result: [1, 1, 4, 9, 9, 9, 16],
  },
  {
    array: [-3, -2, -1],
    result: [1, 4, 9],
  },
  {
    array: [-3, -2, -1],
    result: [1, 4, 9],
  },
];

describe('sorted squared array', () => {
  it('should work with original attempt', () => {
    for (const sample of samples) {
      expect(sortedSquaredArray(sample.array)).toEqual(sample.result);
    }
  });

  it('should work with optimized attempt', () => {
    for (const sample of samples) {
      expect(sortedSquaredArrayOptimized(sample.array)).toEqual(sample.result);
    }
  });
});
