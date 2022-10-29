export const isValidSubsequence = (
  array: number[],
  sequence: number[]
): boolean => {
  let sequenceIndex = 0;

  for (const number of array) {
    if (sequenceIndex === sequence.length) {
      return true;
    }

    if (sequence[sequenceIndex] === number) {
      sequenceIndex++;
    }
  }

  return sequenceIndex === sequence.length;
};
