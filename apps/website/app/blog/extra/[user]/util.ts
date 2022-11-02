export const delay = async (
  delay: number,
  callback: Function
): Promise<void> => {
  const delayPromise = async (ms: number): Promise<unknown> => {
    return new Promise((response: Function) => {
      setTimeout(response, ms);
    });
  };

  await delayPromise(delay);

  callback();
};
