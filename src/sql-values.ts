import { filterProps } from './filter-props';
import { notUndefined } from './not-undefined';
import { sqlSeparator } from './sql-separator';
import { sqlWrap } from './sql-wrap';

export const sqlValues = (map) => {
  const keys = Object.keys(filterProps(map, notUndefined));
  return [
    sqlWrap(sqlSeparator(keys)),
    'values',
    sqlWrap(sqlSeparator(keys.map((key) => map[key]))),
  ];
};
