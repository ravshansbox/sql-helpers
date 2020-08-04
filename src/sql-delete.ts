import { sqlQuery } from './sql-query';
import { sqlWhere } from './sql-where';
import { MutationOptions } from './types';
import { unshift } from './unshift';

export const sqlDelete = (
  table: string,
  where: Record<string, unknown>,
  { returning }: Partial<MutationOptions> = {}
) => {
  return sqlQuery(
    ['delete from', table],
    sqlWhere(where),
    unshift('returning', returning ? returning : ['*'])
  );
};
