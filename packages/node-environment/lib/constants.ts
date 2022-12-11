export const getConst = (key: string): string => {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Constant ${key} not found.`);
  }

  return value;
};
