import {
  firstDuplicateValue,
  firstDuplicateValueOptimized,
} from './first-duplicate-value';

describe('first duplicate value', () => {
  it('should work with the original implementation', () => {
    for (const sample of samples) {
      expect(firstDuplicateValue(sample.array)).toEqual(sample.result);
    }
  });

  it('should work with the optimized implementation', () => {
    for (const sample of samples) {
      expect(firstDuplicateValueOptimized(sample.array)).toEqual(sample.result);
    }
  });
});

const samples = [
  {
    array: [2, 1, 5, 2, 3, 3, 4],
    result: 2,
  },
  {
    array: [2, 1, 5, 3, 3, 2, 4],
    result: 3,
  },
];
