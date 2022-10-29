type IMovement = {
  horizontalDirection?: 'left' | 'right';
  verticalDirection?: 'up' | 'down';
  zigZagState: ZigZagState;
};

type ZigZagState = {
  column: number;
  goingDown: boolean;
  height: number;
  result: number[];
  row: number;
  width: number;
};

export const zigzagTraverse = (array: number[][]): number[] => {
  const zigZagState: ZigZagState = {
    column: 0,
    goingDown: true,
    height: array.length - 1,
    result: [],
    row: 0,
    width: array[0].length - 1,
  };

  while (!isOutOfBounds(zigZagState)) {
    zigZagState.result.push(array[zigZagState.row][zigZagState.column]);
    if (zigZagState.goingDown) {
      if (zigZagState.column === 0 || zigZagState.row === zigZagState.height) {
        atLeftOrBottom(zigZagState);
      } else {
        movePointer({
          horizontalDirection: 'left',
          verticalDirection: 'down',
          zigZagState,
        });
      }
    } else if (
      zigZagState.row === 0 ||
      zigZagState.column === zigZagState.width
    ) {
      atTopOrRight(zigZagState);
    } else {
      movePointer({
        horizontalDirection: 'right',
        verticalDirection: 'up',
        zigZagState,
      });
    }
  }

  return zigZagState.result;
};

const movePointer = ({
  horizontalDirection,
  verticalDirection,
  zigZagState,
}: IMovement): void => {
  if (horizontalDirection === 'left') {
    zigZagState.column--;
  } else if (horizontalDirection === 'right') {
    zigZagState.column++;
  }

  if (verticalDirection === 'up') {
    zigZagState.row--;
  } else if (verticalDirection === 'down') {
    zigZagState.row++;
  }
};

const atLeftOrBottom = (zigZagState: ZigZagState): void => {
  zigZagState.goingDown = false;
  if (zigZagState.row === zigZagState.height) {
    movePointer({ horizontalDirection: 'right', zigZagState });
  } else {
    movePointer({ verticalDirection: 'down', zigZagState });
  }
};

const atTopOrRight = (zigZagState: ZigZagState): void => {
  zigZagState.goingDown = true;
  if (zigZagState.column === zigZagState.width) {
    movePointer({ verticalDirection: 'down', zigZagState });
  } else {
    movePointer({ horizontalDirection: 'right', zigZagState });
  }
};

const isOutOfBounds = (zigZagState: ZigZagState): boolean => {
  return (
    zigZagState.row < 0 ||
    zigZagState.row > zigZagState.height ||
    zigZagState.column < 0 ||
    zigZagState.column > zigZagState.width
  );
};
