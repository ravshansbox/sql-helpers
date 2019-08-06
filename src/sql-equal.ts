export const sqlEqual = (lhs, rhs) => {
  if (typeof rhs === 'undefined') {
    return [];
  }
  if (rhs === null) {
    return [lhs, 'is null'];
  }
  return [lhs, '=', rhs];
};
