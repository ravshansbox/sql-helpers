# SQL helpers
## Usage examples
```
const { sqlQuery } = require('@ravshansbox/sql-helpers');

sqlQuery(
  'select',
  'from table1',
  'join table2', sqlOnMap({
    'table2.ref_id': 'table1.id'
  }),
  sqlSeparator(['column1','column2']),
  sqlWhere(
    ['column1', '>', 'column2'],
    sqlEqual('column1', sqlValue('abc')),
  ),
);
```
