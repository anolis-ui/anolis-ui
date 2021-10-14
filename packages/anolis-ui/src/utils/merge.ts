/**
 * Returns a new object with properties of input objects (properties starting with "_" are merged deeply, right-to-left priority).
 */
export const merge = <T>(...sources: (T | undefined)[]): T => {
  return _merge<T>(...sources);
};

export const _merge = <T>(...sources: (T | undefined)[]): T => {
  const result: any = {};
  const chain: T[] = [];
  const keys = new Set<string>();

  for (const s of sources) {
    if (s === undefined) continue;
    chain.unshift(s);
    for (const k of Object.keys(s)) {
      keys.delete(k); // always add the key at the end
      keys.add(k);
    }
  }

  for (const key of keys) {
    // eslint-disable-next-line @typescript-eslint/no-extra-parens
    const shouldDeepMerge = key.startsWith("_") && chain.every((s: any) => s[key] === undefined || (s[key] && typeof s[key] === "object"));

    const value = shouldDeepMerge
      ? _merge(...reverse(chain.map(s => (s as any)[key])))
      : (chain as any[]).find(s => !isNil(s[key]))?.[key];

    !isNil(value) && (result[key] = value);
  }

  return result;
};

const isNil = (x: any): x is undefined | null => x === null || x === undefined;
const reverse = <T extends any[]>(x: T) => [...x].reverse();
