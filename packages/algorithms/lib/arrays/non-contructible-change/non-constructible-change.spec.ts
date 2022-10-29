import { nonConstructibleChange } from './non-constructible-change';

const samples = [
  {
    coins: [5, 7, 1, 1, 2, 3, 22],
    output: 20,
  },
  {
    coins: [1, 1, 1, 1, 1],
    output: 6,
  },
  {
    coins: [1, 5, 1, 1, 1, 10, 15, 20, 100],
    output: 55,
  },
  {
    coins: [6, 4, 5, 1, 1, 8, 9],
    output: 3,
  },
  {
    coins: [],
    output: 1,
  },
  {
    coins: [87],
    output: 1,
  },
  {
    coins: [5, 6, 1, 1, 2, 3, 4, 9],
    output: 32,
  },
  {
    coins: [5, 6, 1, 1, 2, 3, 43],
    output: 19,
  },
  {
    coins: [1, 1],
    output: 3,
  },
  {
    coins: [2],
    output: 1,
  },
  {
    coins: [1],
    output: 2,
  },
  {
    coins: [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4],
    output: 87,
  },
  {
    coins: [1, 2, 3, 4, 5, 6, 7],
    output: 29,
  },
];

describe('nonConstructibleChange', () => {
  it('should work with the original solution', () => {
    for (const sample of samples) {
      expect(nonConstructibleChange(sample.coins)).toEqual(sample.output);
    }
  });
});
