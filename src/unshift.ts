export const unshift = (array, prefix) => {
  if (array.length === 0) {
    return [];
  }
  return [prefix, array];
};
