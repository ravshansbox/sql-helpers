import { filterProps } from './filter-props';
import { notUndefined } from './not-undefined';
import { sqlSeparator } from './sql-separator';
import { unshift } from './unshift';

export const sqlSet = map => {
  return unshift(
    sqlSeparator(
      Object.keys(filterProps(map, notUndefined)).map(key => {
        return [key, '=', map[key]];
      }),
    ),
    'set',
  );
};
