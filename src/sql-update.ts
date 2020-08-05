import { sqlQuery } from './sql-query';
import { sqlSet } from './sql-set';
import { sqlWhere } from './sql-where';
import { MutationOptions, Values, Where } from './types';
import { unshift } from './unshift';

export const sqlUpdate = (
  table: string,
  values: Values,
  where: Where,
  { returning }: Partial<MutationOptions> = {}
) => {
  return sqlQuery(
    ['update', table],
    sqlSet(values),
    sqlWhere(where),
    unshift('returning', returning ? returning : ['*'])
  );
};
