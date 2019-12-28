import { sqlSeparator } from './sql-separator';
import { unshift } from './unshift';

export const sqlGroupBy = (...columns: string[]) => {
  return unshift('group by', sqlSeparator(columns));
};
