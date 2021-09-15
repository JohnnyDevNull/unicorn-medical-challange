// @see https://stackoverflow.com/a/55077658/3634274
export function ArrayZipFlat(a: Array<any>, b: Array<any>): Array<any> {
  return Array.from(
    { length: Math.max(a.length, b.length) },
    (_, i) => [a[i], b[i]]
  ).flat().filter(x => x !== undefined);
}
