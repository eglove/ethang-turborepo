import { isValidSubsequence } from './is-valid-subsequence';

describe('validate subsequence', () => {
  it('should work', () => {
    const samples = [
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [1, 6, -1, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [5, 1, 22, 25, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [5, 1, 22, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [22, 25, 6],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [1, 6, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [5, 1, 22, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [5, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: true,
        sequence: [25],
      },
      {
        array: [1, 1, 1, 1, 1],
        result: true,
        sequence: [1, 1, 1],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 1, 22, 23, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 1, 22, 22, 25, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 1, 22, 22, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [1, 6, -1, -1],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [1, 6, -1, -1, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [1, 6, -1, -2],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [26],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 1, 25, 22, 6, -1, 8, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 26, 22, 8],
      },
      {
        array: [1, 1, 6, 1],
        result: false,
        sequence: [1, 1, 1, 6],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [1, 6, -1, 10, 11, 11, 11, 11],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [5, 1, 22, 25, 6, -1, 8, 10, 10],
      },
      {
        array: [5, 1, 22, 25, 6, -1, 8, 10],
        result: false,
        sequence: [1, 6, -1, 5],
      },
    ];

    for (const sample of samples) {
      expect(isValidSubsequence(sample.array, sample.sequence)).toEqual(
        sample.result
      );
    }
  });
});
