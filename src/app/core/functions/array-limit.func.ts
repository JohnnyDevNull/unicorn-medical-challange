export function ArrayLimit(source: Array<any>, limit: number): Array<any> {
  return source?.length > 0 ? source.slice(0, limit) : source;
}
