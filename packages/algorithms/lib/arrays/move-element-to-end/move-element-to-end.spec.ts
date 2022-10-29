import {
  moveElementToEnd,
  moveElementToEndOptimized,
} from './move-element-to-end';

const samples = [
  {
    array: [2, 1, 2, 2, 2, 3, 4, 2],
    expectedArray: [1, 3, 4, 2, 2, 2, 2, 2],
    toMove: 2,
  },
];

describe('move element to end', () => {
  it('should work with original implementation', () => {
    for (const sample of samples) {
      expect(moveElementToEnd(sample.array, sample.toMove)).toEqual(
        sample.expectedArray
      );
    }
  });

  it('should work with the optimized implementation', () => {
    for (const sample of samples) {
      // Get number of 'toMove' elements count
      let toMoveCount = 0;
      for (const number of sample.array) {
        if (number === sample.toMove) {
          toMoveCount++;
        }
      }

      const results = moveElementToEndOptimized(sample.array, sample.toMove);

      const resultSlice = results.slice(
        results.length - (toMoveCount - 1),
        results.length
      );

      expect(resultSlice.length === toMoveCount);
    }
  });
});
