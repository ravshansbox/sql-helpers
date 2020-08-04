import { sqlQuery } from './sql-query';
import { sqlValueMap } from './sql-value-map';
import { sqlValues } from './sql-values';
import { MutationOptions } from './types';
import { unshift } from './unshift';

export const sqlInsert = (
  table: string,
  values: Record<string, unknown>,
  { returning }: Partial<MutationOptions> = {}
) => {
  return sqlQuery(
    ['insert into', table],
    sqlValues(sqlValueMap(values)),
    unshift('returning', returning ? returning : ['*'])
  );
};
