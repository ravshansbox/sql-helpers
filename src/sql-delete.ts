import { sqlQuery } from './sql-query';
import { sqlWhere } from './sql-where';
import { MutationOptions, Where } from './types';
import { unshift } from './unshift';

export const sqlDelete = (
  table: string,
  where: Where,
  { returning }: Partial<MutationOptions> = {}
) => {
  return sqlQuery(
    ['delete from', table],
    sqlWhere(where),
    unshift('returning', returning ? returning : ['*'])
  );
};
