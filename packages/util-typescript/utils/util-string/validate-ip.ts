export const isValidIpV4 = (v4Address: string): boolean => {
  const parts = v4Address.split('.');

  if (parts.length !== 4) {
    return false;
  }

  for (const part of parts) {
    if (Number.isNaN(Number(part)) || Number(part) < 0 || Number(part) > 255) {
      return false;
    }
  }

  return true;
};

export const isValidIpV6 = (v6Address: string): boolean => {
  const parts = v6Address.split(':');

  if (parts.length > 8) {
    return false;
  }

  if (parts.length < 6 && !parts.includes('')) {
    return false;
  }

  if (!/[\d:A-Fa-f]/.test(v6Address)) {
    return false;
  }

  for (const part of parts) {
    if (part.length > 4) {
      return false;
    }
  }

  return true;
};

export const isValidDualIp = (ipAddress: string): boolean => {
  // IPv6 must come first.
  for (const char of ipAddress) {
    if (char === '.') {
      return false;
    }

    if (char === ':') {
      break;
    }
  }

  // Y : y : y : y : y : y : x . x . x . x
  // -> ['y ', ' y ', ' y ', ' y ', ' y ', ' y ', ' x . x . x . x']
  let split: string | string[] = ipAddress.split(':');
  if (!isValidIpV4(split[split.length - 1])) {
    return false;
  }

  split.pop();
  split = split.join(':');
  return isValidIpV6(split);
};

export const isValidIpAddress = (string: string): boolean => {
  const validSingle = isValidIpV4(string) || isValidIpV6(string);

  if (!validSingle) {
    return isValidDualIp(string);
  }

  return true;
};
