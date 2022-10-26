// https://en.wikipedia.org/wiki/Email_address#Examples
import { isAlphaNumeric, isValidHostname } from '../util-regex';
import { isValidIpAddress } from './validate-ip';

// Used specifically for isValidEmail... if you have a need for this... feel free to export
const isStartingOrEndingsWithParenthesesWrappedString = (
  string: string
): { pass: boolean; wrappedString?: string } => {
  if (/\(/.exec(string)?.length !== 1 || /\)/.exec(string)?.length !== 1) {
    return { pass: false };
  }

  // One of these should be '', the other should not
  // This means string either starts or ends with (..anyTextHere...)
  // (heythere)example: before.length > 0, after.length === 0
  // example(heythere): before.length === 0, after.length > 0
  const before = string.slice(0, string.indexOf('('));
  const after = string.slice(string.indexOf(')'), -1);

  if (before.length > 0 && after.length > 0) {
    return { pass: false };
  }

  return {
    pass: true,
    wrappedString: string.slice(string.indexOf('(') + 1, string.indexOf(')')),
  };
};

const isValidEmailLocalPart = (localPart: string): boolean => {
  if (new Blob([localPart]).size > 64) {
    return false;
  }

  const allowedSpecialCharacters = "!#$%&'*+-/=?^_\\`{|}~.";
  const mustBeQuotedCharacters = '"(),:;<>@[\\]';

  const localPartIsQuoted =
    localPart.startsWith('"') && localPart.endsWith('"');

  const comment = isStartingOrEndingsWithParenthesesWrappedString(localPart);
  let cleanedLocalPart = localPartIsQuoted ? localPart.slice(1, -1) : localPart;
  if (comment.pass) {
    cleanedLocalPart = cleanedLocalPart.replace('(', '');
    cleanedLocalPart = cleanedLocalPart.replace(')', '');
  }

  for (const [index, char] of [...cleanedLocalPart].entries()) {
    const alphaNumeric = isAlphaNumeric(char);
    const charIsAllowed = allowedSpecialCharacters.includes(char);
    const spaceAndIsQuoted = localPartIsQuoted && char === ' ';
    if (!alphaNumeric && !charIsAllowed && !spaceAndIsQuoted) {
      return false;
    }

    // . can not be consecutive, unless local part is quoted
    if (
      !localPartIsQuoted &&
      index > 0 &&
      localPart.charAt(index - 1) === '.' &&
      char === '.'
    ) {
      return false;
    }

    if (!localPartIsQuoted && mustBeQuotedCharacters.includes(char)) {
      return false;
    }
  }

  return true;
};

const isValidEmailDomainPart = (domainPart: string): boolean => {
  if (domainPart.length > 63) {
    return false;
  }

  const domainPartIsBracketed =
    domainPart.startsWith('[') && domainPart.endsWith(']');

  // Pull out comment, is rest a valid hostname?
  const domainPartComment =
    isStartingOrEndingsWithParenthesesWrappedString(domainPart);
  let cleanedDomainPart = domainPart;
  if (domainPartComment.pass) {
    cleanedDomainPart = domainPart.replace('(', '');
    cleanedDomainPart = cleanedDomainPart.replace(')', '');
  }

  if (!domainPartIsBracketed && !isValidHostname(cleanedDomainPart)) {
    return false;
  }

  // If domainIsBracketed and is validIPAddress, return true, else false
  let justTheIp = cleanedDomainPart;
  if (domainPartIsBracketed && cleanedDomainPart.slice(1, 3) === 'IP') {
    justTheIp = justTheIp.slice(6, -1);
  } else if (domainPartIsBracketed) {
    justTheIp = justTheIp.slice(1, -1);
  }

  return !(domainPartIsBracketed && !isValidIpAddress(justTheIp));
};

export const isValidEmail = (string: string): boolean => {
  const emailSplit = string.split('@');

  if (emailSplit.length !== 2) {
    return false;
  }

  if (!isValidEmailLocalPart(emailSplit[0])) {
    return false;
  }

  return isValidEmailDomainPart(emailSplit[1]);
};
