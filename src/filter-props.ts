export const filterProps = (map, predicate) => {
  return Object.keys(map).reduce((agg, key) => {
    if (predicate(map[key], key)) {
      agg[key] = map[key];
    }
    return agg;
  }, {});
};
