import { sqlSeparator } from './sql-separator';
import { sqlValue } from './sql-value';
import { sqlWrap } from './sql-wrap';

export const sqlIn = (column, values) => {
  return [column, 'in', sqlWrap(sqlSeparator(values.map(value => sqlValue(value))))];
};
