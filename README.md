# SQL helpers
## Usage examples
```
const { Client } = require('pg');
const { sqlEqual, sqlOnMap, sqlOperator, sqlQuery, sqlSeparator, sqlValue, sqlWhere } = require('@ravshansbox/sql-helpers');

const client = new Client();

const queryConfig = sqlQuery(
  'select',
  sqlSeparator(['t1.column1_1', 't1.column1_2', 't2.column2_1']),
  'from table1 as t1',
  'join table2 as t2', sqlOnMap({
    't2.ref_id': 't1.id'
  }),
  sqlWhere(
    sqlOperator('and',
      ['t1.column1_1', '>', 't1.column1_2'],
      sqlEqual('t2.column2_1', sqlValue('abc')),
    ),
  ),
);

client.query(queryConfig).then(console.info, console.error);
```
