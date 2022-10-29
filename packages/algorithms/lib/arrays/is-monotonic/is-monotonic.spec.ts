import { isMonotonic } from './is-monotonic';

const samples = [
  {
    array: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001],
    result: true,
  },
  {
    array: [],
    result: true,
  },
  {
    array: [1],
    result: true,
  },
  {
    array: [1, 2],
    result: true,
  },
  {
    array: [2, 1],
    result: true,
  },
  {
    array: [1, 5, 10, 1100, 1101, 1102, 9001],
    result: true,
  },
  {
    array: [-1, -5, -10, -1100, -1101, -1102, -9001],
    result: true,
  },
  {
    array: [-1, -5, -10, -1100, -900, -1101, -1102, -9001],
    result: false,
  },
  {
    array: [1, 2, 0],
    result: false,
  },
  {
    array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11],
    result: false,
  },
  {
    array: [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11],
    result: true,
  },
  {
    array: [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11],
    result: false,
  },
  {
    array: [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11],
    result: true,
  },
  {
    array: [-1, -1, -1, -1, -1, -1, -1, -1],
    result: true,
  },
  {
    array: [1, 2, -1, -2, -5],
    result: false,
  },
  {
    array: [-1, -5, 10],
    result: false,
  },
  {
    array: [2, 2, 2, 1, 4, 5],
    result: false,
  },
  {
    array: [1, 1, 1, 2, 3, 4, 1],
    result: false,
  },
  {
    array: [1, 2, 3, 3, 2, 1],
    result: false,
  },
];

describe('is monotonic', () => {
  it('should work with original implementation', () => {
    for (const sample of samples) {
      expect(isMonotonic(sample.array)).toEqual(sample.result);
    }
  });
});
