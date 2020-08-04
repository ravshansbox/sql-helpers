import { sqlQuery } from './sql-query';
import { sqlSeparator } from './sql-separator';
import { sqlValue } from './sql-value';
import { sqlWhere } from './sql-where';
import { SelectOptions } from './types';
import { unshift } from './unshift';

export const sqlSelect = (
  table: string,
  { columns, where, limit, offset }: Partial<SelectOptions> = {}
) => {
  return sqlQuery(
    ['select', sqlSeparator(columns ? columns : ['*'])],
    ['from', table],
    sqlWhere(where),
    unshift('limit', limit ? [sqlValue(limit)] : []),
    unshift('offset', offset ? [sqlValue(offset)] : [])
  );
};
