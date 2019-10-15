import { sqlSeparator } from './sql-separator';

export const sqlOr = (...predicates) => {
  return sqlSeparator(predicates, 'or');
};
