import { smallestDifference } from './smallest-difference';

const samples = [
  {
    arrayOne: [-1, 5, 10, 20, 28, 3],
    arrayTwo: [26, 134, 135, 15, 17],
    output: [28, 26],
  },
];

describe('smallestDifference', () => {
  it('should work with the original solution', () => {
    for (const sample of samples) {
      expect(smallestDifference(sample.arrayOne, sample.arrayTwo)).toEqual(
        sample.output
      );
    }
  });
});
