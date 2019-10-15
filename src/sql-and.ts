import { sqlSeparator } from './sql-separator';
import { sqlWrap } from './sql-wrap';

export const sqlAnd = (...predicates) => {
  return sqlWrap(sqlSeparator(predicates, 'and'));
};
