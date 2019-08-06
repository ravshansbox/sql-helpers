import { sqlMapToPredicates } from './sql-map-to-predicates';
import { sqlWhere } from './sql-where';

export const sqlWhereMap = (map) => {
  return sqlWhere(sqlMapToPredicates(map));
};
