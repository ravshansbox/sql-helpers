# SQL helpers
## Usage examples
```
const { Client } = require('pg');
const { sqlEntries, sqlEqual, sqlGroupBy, sqlOnMap, sqlOperator, sqlQuery, sqlSeparator, sqlValue, sqlWhere, sqlWrap } = require('@ravshansbox/sql-helpers');

const client = new Client();

const queryConfig = sqlQuery(
  'select',
  sqlSeparator([
    't1.column1_1', 't1.column1_2', 't2.column2_1',
    ['json_build_object', sqlWrap(sqlEntries({id: 't1.id', desc: 't2.desc'}))]
  ]),
  'from table1 as t1',
  'join table2 as t2', sqlOnMap({
    't2.ref_id': 't1.id'
  }),
  sqlWhere(
    sqlOperator('and',
      ['t1.column1_1', '>', 't1.column1_2'],
      sqlEqual('t2.column2_1', sqlValue('abc'))
    )
  ),
  sqlGroupBy('t1.column1_1', 't1.column1_2', 't2.column2_1')
);

client.query(queryConfig).then(console.info, console.error);
```
