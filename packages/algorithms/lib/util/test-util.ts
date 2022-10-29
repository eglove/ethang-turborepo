export const logAverageTime = (times: number[]): void => {
  console.info(
    `Average time: ${
      times.reduce((a, b) => {
        return a + b;
      }) / times.length
    }ms`
  );
};
