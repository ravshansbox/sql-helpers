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
