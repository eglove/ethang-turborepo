import { v4 as uuidv4 } from 'uuid';

export const capitalizeFirstLetter = (
  string: string,
  lowercaseRest = false
): string => {
  if (string === '') {
    return string;
  }

  if (string.length === 1) {
    return string.toUpperCase();
  }

  if (lowercaseRest) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const camelCaseToWordString = (string: string): string => {
  const words = string.replace(/([A-Z])/g, ' $1');
  return words.charAt(0).toUpperCase() + words.slice(1);
};

export const lowercaseFirstLetter = (string: string): string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const currencyFormat = (
  value: number,
  currency = 'USD',
  locale = 'en-US'
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
  });

  return formatter.format(value);
};

export const formatList = (list: string[]): string => {
  // Pop last element if empty in cases where split is used
  // name;hi; = [name, hi, '']
  if (list[list.length - 1] === '') {
    list.pop();
  }

  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });

  return formatter.format(list);
};

export const formatPhoneNumber = (string: string): string | undefined => {
  const phoneRegex = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;

  if (phoneRegex.test(string)) {
    return string.replace(phoneRegex, '($1) $2-$3');
  }

  return undefined;
};

export const randomColor = (): string => {
  return `#${Math.floor(Math.random() * 16_777_215).toString(16)}`;
};

export const removeNonAplhaNumericChars = (string: string): string => {
  return string.replace(/\W/g, '');
};

export const sortStringArray = (array: string[]): string[] => {
  return array.sort((a, b) => {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  });
};

export const isStringNot = (string: unknown, not?: string): boolean => {
  if (typeof not === 'undefined') {
    return typeof string === string;
  }

  return typeof string === 'string' && string !== not;
};

export const toCapitalizedWords = (string: string): string => {
  const words = string.match(/[A-Za-z][a-z]*|\d+/g) ?? [];

  return words
    .map(element => {
      return capitalizeFirstLetter(element);
    })
    .join(' ');
};

export const kebabCaseToWords = (string: string): string => {
  const words = string.split('-');

  return words
    .map(word => {
      return capitalizeFirstLetter(word, true);
    })
    .join(' ');
};

export const wordStringToCamelCase = (string: string, split = ' '): string => {
  const words = string.split(split);
  const firstWord = words[0].toLowerCase();
  return `${firstWord}${words.slice(1).join('')}`;
};

export const uuid = (): string => {
  return uuidv4() || crypto.getRandomValues(new Uint32Array(3)).join('');
};
