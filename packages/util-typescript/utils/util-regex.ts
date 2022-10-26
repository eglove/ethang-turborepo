import validator from 'validator';

export const allDigitsInString = (string: string): string | undefined => {
  return string.match(/\d+/g)?.join('');
};

export const isValidHostname = (string: string): boolean => {
  return /^(([\dA-Za-z]|[\dA-Za-z][\dA-Za-z-]*[\dA-Za-z])\.)*([\dA-Za-z]|[\dA-Za-z][\dA-Za-z-]*[\dA-Za-z])$/.test(
    string
  );
};

export const isValidPhoneNumber = (string: string): boolean => {
  return validator.isMobilePhone(string);
};

export const isValidUrl = (string: string): boolean => {
  return validator.isURL(string);
};

export const isAlphaNumeric = (string: string): boolean => {
  return validator.isAlpha(string);
};
