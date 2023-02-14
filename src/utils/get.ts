export default function get<T, Path extends string | string[], Default = any>(
  o: T,
  path: Path,
  defaultValue?: Default,
) {
  const paths = Array.isArray(path) ? path : path.split('.')

  let i = 0
  let len = paths.length
  let obj = o
  for (; obj !== null && i < len; i++) {
    obj = (o as any)[paths[i]] as T
  }

  const value = i && i === len ? obj : defaultValue
  return value
}
