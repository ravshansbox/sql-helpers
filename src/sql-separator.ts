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
