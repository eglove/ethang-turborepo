import { fourNumberSum } from './four-number-sum';

describe('four number sum', () => {
  it('should work with the original implementation', () => {
    for (const sample of samples) {
      expect(fourNumberSum(sample.array, sample.targetSum)).toEqual(
        sample.result
      );
    }
  });
});

const samples = [
  {
    array: [7, 6, 4, -1, 1, 2],
    result: [
      [7, 6, 4, -1],
      [7, 6, 1, 2],
    ],
    targetSum: 16,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7],
    result: [[1, 2, 3, 4]],
    targetSum: 10,
  },
  {
    array: [5, -5, -2, 2, 3, -3],
    result: [
      [5, -5, -2, 2],
      [5, -5, 3, -3],
      [-2, 2, 3, -3],
    ],
    targetSum: 0,
  },
  {
    array: [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    result: [
      [-2, -1, 1, 6],
      [-2, 1, 2, 3],
      [-2, -1, 2, 5],
      [-2, -1, 3, 4],
    ],
    targetSum: 4,
  },
  {
    array: [-1, 22, 18, 4, 7, 11, 2, -5, -3],
    result: [
      [-1, 22, 7, 2],
      [22, 4, 7, -3],
      [-1, 18, 11, 2],
      [18, 4, 11, -3],
      [22, 11, 2, -5],
    ],
    targetSum: 30,
  },
  {
    array: [-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5],
    result: [
      [-5, 2, 15, 8],
      [-3, 2, -7, 28],
      [-10, -3, 28, 5],
      [-10, 28, -6, 8],
      [-7, 28, -6, 5],
      [-5, 2, 12, 11],
      [-5, 12, 8, 5],
    ],
    targetSum: 20,
  },
  {
    array: [1, 2, 3, 4, 5],
    result: [],
    targetSum: 100,
  },
  {
    array: [1, 2, 3, 4, 5, -5, 6, -6],
    result: [
      [2, 3, 5, -5],
      [1, 4, 5, -5],
      [2, 4, 5, -6],
      [1, 3, -5, 6],
      [2, 3, 6, -6],
      [1, 4, 6, -6],
    ],
    targetSum: 5,
  },
];
