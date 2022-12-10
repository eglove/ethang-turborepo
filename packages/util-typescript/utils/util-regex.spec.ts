import { allDigitsInString, isValidPhoneNumber } from './util-regex';

describe('getNumericalCharacters', () => {
  it('should get all of the numerical characters in a string', () => {
    const input = 'Hello, world! 1234567890';

    const numericalCharacters = allDigitsInString(input);

    expect(numericalCharacters).toEqual('1234567890');
  });

  it('should get all of the numerical characters in a string with randomly placed numbers', () => {
    const input = 'H3ll0, w0rld! 1234506789';

    const numericalCharacters = allDigitsInString(input);

    expect(numericalCharacters).toEqual('3001234506789');
  });
});

describe('isValidPhoneNumber', () => {
  it('should return true for valid phone numbers', () => {
    const phoneNumbers = [
      '555-555-5555',
      '(555) 555-5555',
      '1-555-555-5555',
      '555 555 5555',
      '5555555555',
    ];

    for (const phoneNumber of phoneNumbers) {
      expect(isValidPhoneNumber(phoneNumber)).toBe(true);
    }
  });

  it('should return false for invalid phone numbers', () => {
    const phoneNumbers = [
      '555-555-555',
      '555-555-55555',
      '555-555-555a',
      '555-555-555 ',
      '555.555.5555',
    ];

    for (const phoneNumber of phoneNumbers) {
      expect(isValidPhoneNumber(phoneNumber)).toBe(false);
    }
  });
});
