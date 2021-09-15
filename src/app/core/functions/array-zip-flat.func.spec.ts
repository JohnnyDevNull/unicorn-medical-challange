import { ArrayZipFlat } from './array-zip-flat.func';

describe('ArrayZipFlat', () => {

  test('should build a zip flat array from two', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(ArrayZipFlat(arr1, arr2)).toEqual(expected);
  });

});
