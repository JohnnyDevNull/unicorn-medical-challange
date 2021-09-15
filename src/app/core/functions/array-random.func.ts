// @see https://stackoverflow.com/a/19270021/3634274
export function ArrayRandom(source: Array<any>, count: number): Array<any> {
  const result: Array<any> = new Array(count);
  let len = source.length;
  const taken: Array<any> = new Array(len);

  if (count > len) {
    throw new RangeError('ArrayRandom: more elements taken than available');
  }

  while (count--) {
    const x = Math.floor(Math.random() * len);
    result[count] = source[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  return result;
}
