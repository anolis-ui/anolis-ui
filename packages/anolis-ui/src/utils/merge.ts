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
  const result: any = {};
  const keys = new Set(sources.filter(Boolean).map(s => Object.keys(s!)).flat());
  const chain: any = [...sources].reverse();

  for (const key of keys) {
    // eslint-disable-next-line @typescript-eslint/no-extra-parens
    const shouldDeepMerge = key.startsWith("_") && chain.every((s: any) => s[key] === undefined || (s[key] && typeof s[key] === "object"));

    const value = shouldDeepMerge
      ? merge2(...sources.map(s => (s as any)?.[key]))
      : chain.find((s: any) => s?.[key])[key];

    value && (result[key] = value);
  }

  return result;
};
