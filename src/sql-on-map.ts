import { sqlMapToPredicates } from './sql-map-to-predicates';
import { sqlOn } from './sql-on';

export const sqlOnMap = map => {
  return sqlOn(sqlMapToPredicates(map));
};
