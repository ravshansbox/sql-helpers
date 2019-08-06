import { sqlSeparator } from './sql-separator';
import { unshift } from './unshift';

export const sqlReturning = (...columns: string[]) => {
  return unshift(sqlSeparator(columns), 'returning');
};
