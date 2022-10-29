import { longestPeak } from './longest-peak';

describe('longest peak', () => {
  it('should work with the original implementation', () => {
    for (const sample of samples) {
      expect(longestPeak(sample.array)).toEqual(sample.result);
    }
  });
});

const samples = [
  {
    array: [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3],
    result: 6,
  },
  {
    array: [],
    result: 0,
  },
  {
    array: [1, 3, 2],
    result: 3,
  },
  {
    array: [1, 2, 3, 4, 5, 1],
    result: 6,
  },
  {
    array: [5, 4, 3, 2, 1, 2, 1],
    result: 3,
  },
  {
    array: [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10],
    result: 5,
  },
  {
    array: [5, 4, 3, 2, 1, 2, 10, 12],
    result: 0,
  },
  {
    array: [1, 2, 3, 4, 5, 6, 10, 100, 1000],
    result: 0,
  },
  {
    array: [1, 2, 3, 3, 2, 1],
    result: 0,
  },
  {
    array: [1, 1, 3, 2, 1],
    result: 4,
  },
  {
    array: [1, 2, 3, 2, 1, 1],
    result: 5,
  },
  {
    array: [
      1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4,
      5, 0, -1, -1,
    ],
    result: 9,
  },
  {
    array: [1, 2, 3, 3, 4, 0, 10],
    result: 3,
  },
];
