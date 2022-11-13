export const getDayKey = (date = new Date()): string => {
  const parsedDate = new Date(date);
  return `${parsedDate.getFullYear()}${parsedDate.getMonth()}${parsedDate.getDate()}`;
};
