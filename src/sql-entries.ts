import { sqlSeparator } from './sql-separator';

export const sqlEntries = map => {
  return sqlSeparator(
    Object.keys(map).reduce((agg, key) => {
      agg.push(`'${key}'`);
      agg.push(map[key]);
      return agg;
    }, []),
  );
};
