import { flatten } from './flatten';

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
