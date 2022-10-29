export const yieldToMain = async (): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};
