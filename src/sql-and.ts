import { sqlSeparator } from './sql-separator';

export const sqlAnd = (...predicates) => {
  return sqlSeparator(predicates, 'and');
};
