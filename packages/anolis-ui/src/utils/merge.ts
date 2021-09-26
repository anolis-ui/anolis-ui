/**
 * Same as Object.assign but deep merges props with _
 * @deprecated
 */
export const merge = <T>(target: T, ...sources: (T | undefined)[]): T => {
  const next = appendTo({} as T, target);
  sources.forEach(s => appendTo(next, s));
  return appendTo({} as Required<T>, next as Required<T>);
};

const appendTo = <T>(t: T, s: T | undefined) => {
  if (s === undefined) {
    return t;
  }

  _keys(s).reverse().forEach(k => {
    t[k] && k[0] === "_" && typeof t[k] === "object"
      ? merge(t[k], s[k])
      : t[k] = s[k];
  });
  return t;
};

const _keys = <T>(o: T): (keyof T & string)[] =>
  Object.keys(o) as any;

/**
 * Returns a new object with properties of input objects (properties starting with "_" are merged deeply, right-to-left priority).
 */
export const merge2 = <T>(...sources: (T | undefined)[]): T => {
  return _merge2<T>(...[...sources].reverse());
};

export const _merge2 = <T>(...sources: (T | undefined)[]): T => {
  const result: any = {};
  const chain: T[] = [];
  const keys = new Set<string>();

  for (const s of sources) {
    if (s === undefined) continue;
    chain.push(s);
    for (const k of Object.keys(s)) {
      keys.add(k);
    }
  }

  for (const key of keys) {
    // eslint-disable-next-line @typescript-eslint/no-extra-parens
    const shouldDeepMerge = key.startsWith("_") && chain.every((s: any) => s[key] === undefined || (s[key] && typeof s[key] === "object"));

    const value = shouldDeepMerge
      ? _merge2(...chain.map(s => (s as any)[key]))
      : (chain as any[]).find(s => !isNil(s[key]))?.[key];

    !isNil(value) && (result[key] = value);
  }

  return result;
};

const isNil = (x: any): x is undefined | null => x === null || x === undefined;
