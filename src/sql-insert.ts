import { sqlQuery } from './sql-query';
import { sqlValueMap } from './sql-value-map';
import { sqlValues } from './sql-values';
import { MutationOptions, Values } from './types';
import { unshift } from './unshift';

export const sqlInsert = (
  table: string,
  values: Values,
  { returning }: Partial<MutationOptions> = {}
) => {
  return sqlQuery(
    ['insert into', table],
    sqlValues(sqlValueMap(values)),
    unshift('returning', returning ? returning : ['*'])
  );
};
