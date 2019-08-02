import { flatten } from '../src/index';

describe('flatten', () => {
  it('should return a new array', () => {
    const input = [];
    expect(flatten(input)).not.toBe(input);
  });

  it('should flatten an array', () => {
    expect(flatten([1, 2, [3, 4, [5, 6], 7, 8], 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
