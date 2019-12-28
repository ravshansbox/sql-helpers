import { unshift } from './unshift';

export const sqlOn = (...predicates) => {
  return unshift('on', predicates);
};
