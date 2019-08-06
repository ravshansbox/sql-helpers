import { sqlSeparator } from './sql-separator';
import { unshift } from './unshift';

export const sqlGroupBy = (...columns: string[]) => {
  return unshift(sqlSeparator(columns), 'group by');
};
