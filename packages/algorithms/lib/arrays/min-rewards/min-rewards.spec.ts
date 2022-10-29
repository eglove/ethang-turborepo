import { minRewards, minRewardsOptimized } from './min-rewards';

describe('min rewards', () => {
  it('should work with the original implementation', () => {
    for (const sample of samples) {
      expect(minRewards(sample.scores)).toEqual(sample.expected);
    }
  });

  it('should work with the optimized implementation', () => {
    for (const sample of samples) {
      expect(minRewardsOptimized(sample.scores)).toEqual(sample.expected);
    }
  });
});

const samples = [
  {
    expected: 25,
    scores: [8, 4, 2, 1, 3, 6, 7, 9, 5],
  },
  {
    expected: 1,
    scores: [1],
  },
  {
    expected: 3,
    scores: [5, 10],
  },
  {
    expected: 3,
    scores: [10, 5],
  },
  {
    expected: 8,
    scores: [4, 2, 1, 3],
  },
  {
    expected: 9,
    scores: [0, 4, 2, 1, 3],
  },
  {
    expected: 52,
    scores: [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0],
  },
  {
    expected: 15,
    scores: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9],
  },
  {
    expected: 93,
    scores: [
      800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3,
      6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53,
    ],
  },
];
