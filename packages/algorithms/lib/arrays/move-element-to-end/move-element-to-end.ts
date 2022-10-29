export const moveElementToEnd = (array: number[], toMove: number): number[] => {
  let foundCount = 0;

  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] === toMove) {
      foundCount++;
      array.splice(index, 1);
      index--;
    }
  }

  for (let index = 0; index < foundCount; index++) {
    array.push(toMove);
  }

  return array;
};

export const moveElementToEndOptimized = (
  array: number[],
  toMove: number
): number[] => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    if (array[rightIndex] === toMove) {
      rightIndex--;
      continue;
    }

    if (array[leftIndex] === toMove && array[rightIndex] !== toMove) {
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = toMove;
      leftIndex++;
      rightIndex--;
      continue;
    }

    leftIndex++;
  }

  return array;
};
