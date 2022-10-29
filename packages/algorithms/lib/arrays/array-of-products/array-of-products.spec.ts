import { arrayOfProducts, arrayOfProductsOptimized } from './array-of-products';

describe('array of products', () => {
  it('should work with the original implementation', () => {
    for (const sample of samples) {
      expect(arrayOfProducts(sample.array)).toEqual(sample.result);
    }
  });

  it('should work with the optimized implementation', () => {
    for (const sample of samples) {
      expect(arrayOfProductsOptimized(sample.array)).toEqual(sample.result);
    }
  });
});

const samples = [
  {
    array: [5, 1, 4, 2],
    result: [8, 40, 10, 20],
  },
  {
    array: [1, 8, 6, 2, 4],
    result: [384, 48, 64, 192, 96],
  },
  {
    array: [-5, 2, -4, 14, -6],
    result: [672, -1680, 840, -240, 560],
  },
  {
    array: [9, 3, 2, 1, 9, 5, 3, 2],
    result: [1620, 4860, 7290, 14_580, 1620, 2916, 4860, 7290],
  },
  {
    array: [4, 4],
    result: [4, 4],
  },
  {
    array: [0, 0, 0, 0],
    result: [0, 0, 0, 0],
  },
  {
    array: [1, 1, 1, 1],
    result: [1, 1, 1, 1],
  },
  {
    array: [-1, -1, -1],
    result: [1, 1, 1],
  },
  {
    array: [-1, -1, -1, -1],
    result: [-1, -1, -1, -1],
  },
  {
    array: [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    result: [362_880, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
];
