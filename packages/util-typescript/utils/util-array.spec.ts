import {
  arrayHasDuplicate,
  isNonEmptyArray,
  shuffleArray,
  sortObjectArray,
} from './util-array';

describe('arrayHasDuplicate', () => {
  it('should return true if the array contains duplicate elements', () => {
    expect(arrayHasDuplicate([1, 2, 3, 4, 5, 1])).toBe(true);
    expect(arrayHasDuplicate([1, 2, 3, 4, 5, 1])).toBe(true);
    expect(arrayHasDuplicate([1, 2, 3, 4, 0, 0])).toBe(true);
    expect(arrayHasDuplicate([1, 2, 3, 4, 5, 5])).toBe(true);
  });

  it('should return false if the array does not contain duplicate elements', () => {
    expect(arrayHasDuplicate([1, 2, 3, 4, 5])).toBe(false);
    expect(arrayHasDuplicate([1, 2, 3, 4, {}])).toBe(false);
    expect(arrayHasDuplicate([1, 2, 3, 4, '5'])).toBe(false);
    expect(arrayHasDuplicate([1, 2, 3, 4, null])).toBe(false);
  });
});

describe('isNonEmptyArray', () => {
  it('should return true if the input is a non-empty array', () => {
    expect(isNonEmptyArray([1, 2, 3, 4, 5])).toBe(true);
    expect(isNonEmptyArray([1, 2, 3, 4, '5'])).toBe(true);
    expect(isNonEmptyArray([1, 2, 3, 4, {}])).toBe(true);
    expect(isNonEmptyArray([1, 2, 3, 4, null])).toBe(true);
  });

  it('should return false if the input is an empty array', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  it('should return false if the input is not an array', () => {
    expect(isNonEmptyArray(null)).toBe(false);
    expect(isNonEmptyArray()).toBe(false);
  });
});

describe('sortObjectArray', () => {
  it('should sort the array of objects by the specified key', () => {
    const array = [
      { age: 24, name: 'Alice' },
      { age: 28, name: 'Bob' },
      { age: 32, name: 'Charlie' },
    ];

    expect(sortObjectArray(array, 'name')).toEqual([
      { age: 24, name: 'Alice' },
      { age: 28, name: 'Bob' },
      { age: 32, name: 'Charlie' },
    ]);

    expect(sortObjectArray(array, 'age')).toEqual([
      { age: 24, name: 'Alice' },
      { age: 28, name: 'Bob' },
      { age: 32, name: 'Charlie' },
    ]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(sortObjectArray([], 'name')).toEqual([]);
  });

  it('should return the input array if it only contains one object', () => {
    const array = [{ age: 24, name: 'Alice' }];
    expect(sortObjectArray(array, 'name')).toEqual(array);
    expect(sortObjectArray(array, 'age')).toEqual(array);
  });
});

describe('shuffleArray', () => {
  it('should shuffle the elements of the input array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(array);

    expect(shuffledArray).not.toEqual(array);

    const sortedShuffledArray = [...shuffledArray].sort((a, b) => {
      return a - b;
    });
    expect(sortedShuffledArray).toEqual(array);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(shuffleArray([])).toEqual([]);
  });

  it('should return the input array if it only contains one element', () => {
    const array = [1];
    expect(shuffleArray(array)).toEqual(array);
  });
});
