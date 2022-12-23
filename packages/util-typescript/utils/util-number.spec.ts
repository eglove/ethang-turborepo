import { getRandomNumber } from './util-number';

describe('util-number', () => {
  describe('randomNumber', () => {
    it('should return a number between the given range', () => {
      const from = 1;
      const to = 100;
      const number = getRandomNumber(from, to);

      expect(number).toBeGreaterThanOrEqual(from);
      expect(number).toBeLessThanOrEqual(to);
    });

    it('should return a different number each time it is called', () => {
      const from = 1;
      const to = 999;
      const number1 = getRandomNumber(from, to);
      const number2 = getRandomNumber(from, to);

      expect(number1).not.toEqual(number2);
    });

    it('should return a float within the given range', () => {
      const from = 1;
      const to = 2;
      const random = getRandomNumber(from, to, true);

      expect(random).toBeGreaterThanOrEqual(from);
      expect(random).toBeLessThanOrEqual(to);
      expect(random % 1).not.toEqual(0);
    });

    it('should return a random number between the given range when running in the browser', () => {
      global.window = {
        crypto: {
          // @ts-expect-error force mock
          // eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-vars
          getRandomValues: jest.fn(array => {
            return [42];
          }),
        },
      };

      const from = 1;
      const to = 10;
      const randomNumber = getRandomNumber(from, to);

      expect(randomNumber).toBeGreaterThanOrEqual(from);
      expect(randomNumber).toBeLessThanOrEqual(to);
    });
  });
});
