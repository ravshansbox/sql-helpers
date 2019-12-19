import { sqlEqual } from './sql-equal';
import { sqlOperator } from './sql-operator';

export const sqlMapToPredicates = map => {
  return sqlOperator(
    'and',
    ...Object.keys(map).map(key => {
      return sqlEqual(key, map[key]);
    }),
  );
};
