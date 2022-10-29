export const arrayOfProducts = (array: number[]): number[] => {
  const result = [];

  for (const [index] of array.entries()) {
    const filteredArray = array.filter((_, index_) => {
      return index_ !== index;
    });

    result.push(
      filteredArray.reduce((previousValue, currentValue) => {
        return previousValue * currentValue;
      })
    );
  }

  return result;
};

export const arrayOfProductsOptimized = (array: number[]): number[] => {
  const result: number[] = Array.from<number>({ length: array.length });

  let runningProduct = 1;
  for (const [index, number] of array.entries()) {
    result[index] = runningProduct;
    runningProduct *= number;
  }

  runningProduct = 1;
  for (let index = array.length - 1; index >= 0; index--) {
    result[index] *= runningProduct;
    runningProduct *= array[index];
  }

  return result;
};
