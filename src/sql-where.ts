import { unshift } from './unshift';

export const sqlWhere = (...predicates) => {
  return unshift('where', predicates);
};
