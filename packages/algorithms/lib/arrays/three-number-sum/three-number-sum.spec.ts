import { threeNumberSum } from './three-number-sum';

const samples = [
  {
    array: [12, 3, 1, 2, -6, 5, -8, 6],
    output: [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ],
    targetSum: 0,
  },
  {
    array: [1, 2, 3],
    output: [[1, 2, 3]],
    targetSum: 6,
  },
  {
    array: [1, 2, 3],
    output: [],
    targetSum: 7,
  },
  {
    array: [8, 10, -2, 49, 14],
    output: [[-2, 10, 49]],
    targetSum: 57,
  },
  {
    array: [12, 3, 1, 2, -6, 5, 0, -8, -1],
    output: [
      [-8, 3, 5],
      [-6, 1, 5],
      [-1, 0, 1],
    ],
    targetSum: 0,
  },
  {
    array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
    output: [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-1, 0, 1],
    ],
    targetSum: 0,
  },
  {
    array: [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
    output: [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-5, -1, 6],
      [-5, 0, 5],
      [-5, 2, 3],
      [-1, 0, 1],
    ],
    targetSum: 0,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    output: [
      [1, 2, 15],
      [1, 8, 9],
      [2, 7, 9],
      [3, 6, 9],
      [3, 7, 8],
      [4, 5, 9],
      [4, 6, 8],
      [5, 6, 7],
    ],
    targetSum: 18,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    output: [[8, 9, 15]],
    targetSum: 32,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    output: [],
    targetSum: 33,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
    output: [],
    targetSum: 5,
  },
];

describe('threeNumberSum', () => {
  it('should work with the original solution', () => {
    for (const sample of samples) {
      expect(threeNumberSum(sample.array, sample.targetSum)).toEqual(
        sample.output
      );
    }
  });
});
