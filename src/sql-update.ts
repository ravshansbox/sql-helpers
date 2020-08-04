import { sqlQuery } from './sql-query';
import { sqlSet } from './sql-set';
import { sqlWhere } from './sql-where';
import { MutationOptions } from './types';
import { unshift } from './unshift';

export const sqlUpdate = (
  table: string,
  values: Record<string, unknown>,
  where: Record<string, unknown>,
  { returning }: Partial<MutationOptions> = {}
) => {
  return sqlQuery(
    ['update', table],
    sqlSet(values),
    sqlWhere(where),
    unshift('returning', returning ? returning : ['*'])
  );
};
