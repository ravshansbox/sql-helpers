import { sqlSeparator } from './sql-separator';
import { sqlWrap } from './sql-wrap';

export const sqlOperator = (operator, ...predicates) => {
  if (predicates.length <= 1) {
    return predicates;
  }
  return sqlWrap(sqlSeparator(predicates, operator));
};
