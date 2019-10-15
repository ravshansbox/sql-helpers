import { sqlSeparator } from './sql-separator';
import { sqlWrap } from './sql-wrap';

export const sqlOr = (...predicates) => {
  return sqlWrap(sqlSeparator(predicates, 'or'));
};
