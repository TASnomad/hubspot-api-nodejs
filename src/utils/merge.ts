function isObject(o: unknown): o is Record<string, unknown> {
  return !!o && typeof o === 'object' && !Array.isArray(o)
}

export default function merge<T>(target: T, ...sources: Record<string, unknown>[]): T {
  if (sources.length < 1) return target

  const src = sources.shift()
  if (isObject(target) && isObject(src)) {
    for (const key in src) {
      if (isObject(src[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        merge(target[key] as Record<string, unknown>, src[key] as Record<string, unknown>)
      } else {
        Object.assign(target, { [key]: src[key] })
      }
    }
  }

  return merge(target, ...sources)
}
