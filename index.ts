export const flatten = (source: any[], target = []) => {
  for (const element of source) {
    if (Array.isArray(element)) {
      flatten(element, target);
    } else {
      target.push(element);
    }
  }
  return target;
};

export const filterProps = (map, predicate) => {
  return Object.keys(map).reduce((agg, key) => {
    if (predicate(map[key], key)) {
      agg[key] = map[key];
    }
    return agg;
  }, {});
};

export const notUndefined = (value) => typeof value !== 'undefined';

export const sqlQuery = (...parts) => {
  const { text, values } = flatten(parts).reduce((agg, part) => {
    if (typeof part === 'string') {
      agg.text.push(part);
    } else if (typeof part === 'object' && part !== null) {
      if (part.type === 'value') {
        agg.values.push(part.value);
        agg.text.push(`$${agg.values.length}`);
      }
    }
    return agg;
  }, { text: [], values: [] });
  return { text: text.join(' '), values };
};

export const sqlSeparator = (parts: any[], separator = ',') => {
  if (parts.length <= 1) {
    return parts;
  }
  return parts.reduce((agg, part, index) => {
    if (index > 0) {
      agg.push(separator);
    }
    agg.push(part);
    return agg;
  }, []);
};

export const sqlValue = (value) => {
  return { type: 'value', value };
};

export const sqlEqual = (lhs, rhs) => {
  if (typeof rhs === 'undefined') {
    return [];
  }
  if (rhs === null) {
    return [lhs, 'is null'];
  }
  return [lhs, '=', rhs];
};

export const sqlWrap = (...expressions) => {
  return ['(', ...expressions, ')'];
};

export const sqlOperator = (operator, ...predicates) => {
  if (predicates.length <= 1) {
    return predicates;
  }
  return sqlWrap(sqlSeparator(predicates, operator));
};

export const sqlMapToPredicates = (map) => {
  return sqlOperator('and', ...Object.keys(map).map((key) => {
    return sqlEqual(key, map[key]);
  }));
};

export const sqlValues = (map) => {
  const keys = Object.keys(filterProps(map, notUndefined));
  return [
    sqlWrap(sqlSeparator(keys)),
    'values',
    sqlWrap(sqlSeparator(keys.map((key) => map[key]))),
  ];
};

export const sqlValueMap = (map) => {
  return Object.keys(filterProps(map, notUndefined)).reduce((agg, key) => {
    agg[key] = sqlValue(map[key]);
    return agg;
  }, {});
};

export const unshift = (array, prefix) => {
  if (array.length === 0) {
    return [];
  }
  return [prefix, array];
};

export const sqlSet = (map) => {
  return unshift(sqlSeparator(Object.keys(filterProps(map, notUndefined)).map((key) => {
    return [key, '=', map[key]];
  })), 'set');
};

export const sqlReturning = (...columns: string[]) => {
  return unshift(sqlSeparator(columns), 'returning');
};

export const sqlGroupBy = (...columns: string[]) => {
  return unshift(sqlSeparator(columns), 'group by');
};

export const sqlOn = (...predicates) => {
  return unshift(predicates, 'on');
};

export const sqlWhere = (...predicates) => {
  return unshift(predicates, 'where');
};

export const sqlOnMap = (map) => {
  return sqlOn(sqlMapToPredicates(map));
};

export const sqlWhereMap = (map) => {
  return sqlWhere(sqlMapToPredicates(map));
};

export const sqlEntries = (map) => {
  return sqlSeparator(Object.keys(map).reduce((agg, key) => {
    agg.push(`'${key}'`);
    agg.push(map[key]);
    return agg;
  }, []));
};
