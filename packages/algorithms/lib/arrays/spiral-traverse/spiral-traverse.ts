export const spiralTraverse = (array: number[][]): number[] => {
  const result: number[] = [];
  spiralFill({
    array,
    endColumn: array[0].length - 1,
    endRow: array.length - 1,
    result,
    startColumn: 0,
    startRow: 0,
  });
  return result;
};

type SpiralFill = {
  array: number[][];
  endColumn: number;
  endRow: number;
  result: number[];
  startColumn: number;
  startRow: number;
};

const spiralFill = ({
  array,
  startRow,
  endRow,
  startColumn,
  endColumn,
  result,
}: SpiralFill): void => {
  if (startRow > endRow || startColumn > endColumn) {
    return;
  }

  for (let column = startColumn; column <= endColumn; column++) {
    result.push(array[startRow][column]);
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endColumn]);
  }

  for (let column = endColumn - 1; column >= startColumn; column--) {
    if (startRow === endRow) {
      break;
    }

    result.push(array[endRow][column]);
  }

  for (let row = endRow - 1; row >= startRow + 1; row--) {
    if (startColumn === endColumn) {
      break;
    }

    result.push(array[row][startColumn]);
  }

  spiralFill({
    array,
    endColumn: endColumn - 1,
    endRow: endRow - 1,
    result,
    startColumn: startColumn + 1,
    startRow: startRow + 1,
  });
};
