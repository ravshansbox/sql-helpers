import { sqlMapToPredicates } from '../src/sql-map-to-predicates';
import { sqlSelect } from '../src/sql-select';
import { sqlValueMap } from '../src/sql-value-map';

describe('sqlSelect', () => {
  it('should generate correct sql', () => {
    const result = sqlSelect('table1', {
      columns: ['column1'],
      where: sqlMapToPredicates(sqlValueMap({ column2: 'value2' })),
      limit: 10,
      offset: 5
    });
    expect(result).toEqual({
      text: 'select column1 from table1 where column2 = $1 limit $2 offset $3',
      values: ['value2', 10, 5]
    });
  });
});
