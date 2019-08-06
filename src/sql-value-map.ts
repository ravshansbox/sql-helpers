import { filterProps } from './filter-props';
import { notUndefined } from './not-undefined';
import { sqlValue } from './sql-value';

export const sqlValueMap = (map) => {
  return Object.keys(filterProps(map, notUndefined)).reduce((agg, key) => {
    agg[key] = sqlValue(map[key]);
    return agg;
  }, {});
};
