export const sqlEqual = (lhs, rhs) => {
  if (rhs.type === 'value') {
    if (typeof rhs.value === 'undefined') {
      return [];
    }
    if (rhs.value === null) {
      return [lhs, 'is null'];
    }
  }
  return [lhs, '=', rhs];
};
