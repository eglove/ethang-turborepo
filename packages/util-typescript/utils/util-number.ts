/* eslint-disable unicorn/no-abusive-eslint-disable */

export const getRandomNumber = (
  from: number,
  to: number,
  isFloat = false
): number => {
  const finalNumber = (randomNumber: number): number => {
    return isFloat
      ? (randomNumber / 0xff_ff_ff_ff) * (to - from) + from
      : (randomNumber % (to - from + 1)) + from;
  };

  if (typeof window === 'undefined') {
    /* eslint-disable */
    const crypto = require('node:crypto');
    const randomNumberBuffer = crypto.randomBytes(4);
    const randomNumber = randomNumberBuffer.readUint32BE(0);
    return finalNumber(randomNumber);
    /* eslint-enable */
  }

  const array = new Uint32Array(1);
  const randomValues = window.crypto.getRandomValues(array);
  const randomNumber = randomValues[0];
  return finalNumber(randomNumber);
};
