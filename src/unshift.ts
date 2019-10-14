import { flatten } from './flatten';

export const unshift = (array, prefix) => {
  const flatArray = flatten(array);
  if (flatArray.length === 0) {
    return [];
  }
  return [prefix, flatArray];
};
