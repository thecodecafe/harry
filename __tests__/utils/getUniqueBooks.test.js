const getUniqueBooks = require('../../src/utils/getUniqueBooks');

describe('<GetUniqueBooks.Util>', () => {
  it('should return an array', () => {
    expect(Array.isArray(getUniqueBooks([2, 2, 2, 2, 2]))).toBeTruthy();
  });

  it('[] should return an empty array', () => {
    expect(getUniqueBooks([]).length).toBe(0);
  });

  it('[2, 2, 2, 2, 2] should return an array of ten items', () => {
    expect(getUniqueBooks([2, 2, 2, 2, 2]).length).toBe(10);
  });

  it('[2, 2, 2, 2, 2] should return an array of ten 1s', () => {
    expect(
      getUniqueBooks([2, 2, 2, 2, 2])
        .reduce((total = 1, item) => total * item)
    ).toBe(1);
  });

  it('[2, 2, 2, 1, 5] should return 3 as highest in unique list', () => {
    expect(
      getUniqueBooks([2, 2, 2, 1, 5])
        .reduce((total = 1, item) => total * item)
    ).toBe(3);
  });

  it('[3, 3] should return 6 items', () => {
    expect(getUniqueBooks([3, 3]).length).toBe(6);
  });

  it('[2, 2, 2] should return 6 items', () => {
    expect(getUniqueBooks([2, 2, 2]).length).toBe(6);
  });

  it('[2, 2, 2] should return 6 items', () => {
    console.log(getUniqueBooks([4, 4, 4, 2, 2]).length);
  });
});