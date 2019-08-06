export const sqlWrap = (...expressions) => {
  return ['(', ...expressions, ')'];
};
