import { twoNumberSum, twoNumberSumSortFirst } from './two-number-sum';

const numberSorter = (a: number, b: number): number => {
  return a - b;
};

describe('two number sum', () => {
  it('should work', () => {
    const samples = [
      {
        array: [3, 5, -4, 8, 11, 1, -1, 6],
        output: [11, -1],
        targetSum: 10,
      },
      {
        array: [4, 6],
        output: [4, 6],
        targetSum: 10,
      },
      {
        array: [4, 6, 1],
        output: [4, 1],
        targetSum: 5,
      },
      {
        array: [4, 6, 1, -3],
        output: [6, -3],
        targetSum: 3,
      },
      {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        output: [8, 9],
        targetSum: 17,
      },
      {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
        output: [3, 15],
        targetSum: 18,
      },
      {
        array: [-7, -5, -3, -1, 0, 1, 3, 5, 7],
        output: [-5, 0],
        targetSum: -5,
      },
      {
        array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
        output: [210, -47],
        targetSum: 163,
      },
      {
        array: [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
        output: [],
        targetSum: 164,
      },
      {
        array: [3, 5, -4, 8, 11, 1, -1, 6],
        output: [],
        targetSum: 15,
      },
      {
        array: [14],
        output: [],
        targetSum: 15,
      },
      {
        array: [15],
        output: [],
        targetSum: 15,
      },
    ];

    for (const sample of samples) {
      sample.output.sort(numberSorter);
      expect(
        twoNumberSum(sample.array, sample.targetSum)?.sort(numberSorter)
      ).toEqual(sample.output);

      expect(
        twoNumberSumSortFirst(sample.array, sample.targetSum).sort(numberSorter)
      ).toEqual(sample.output);
    }
  });
});
