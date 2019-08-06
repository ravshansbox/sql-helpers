# SQL helpers
## Usage examples
```
const { Client } = require('pg');
const sh = require('@ravshansbox/sql-helpers');

const client = new Client();

const queryConfig = sh.sqlQuery(
  'select',
  sh.sqlSeparator([
    't1.column1_1', 't1.column1_2', 't2.column2_1',
    ['json_build_object', sh.sqlWrap(sh.sqlEntries({id: 't1.id', desc: 't2.desc'}))]
  ]),
  'from table1 as t1',
  'join table2 as t2', sh.sqlOnMap({
    't2.ref_id': 't1.id'
  }),
  sh.sqlWhere(
    sh.sqlOperator('and',
      ['t1.column1_1', '>', 't1.column1_2'],
      sh.sqlEqual('t2.column2_1', sh.sqlValue('abc'))
    )
  ),
  sh.sqlGroupBy('t1.column1_1', 't1.column1_2', 't2.column2_1')
);

client.query(queryConfig).then(console.info, console.error);
```
