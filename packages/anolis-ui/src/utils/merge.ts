// Same as Object.assign but deep merges props with _
export const merge = <T>(target: T, ...sources: (T | undefined)[]): T => {
  const next = appendTo({} as T, target);
  sources.forEach(s => appendTo(next, s));
  return appendTo({} as Required<T>, next as Required<T>);
};

const appendTo = <T>(t: T, s: T | undefined): T => {
  if (s === undefined) {
    return t;
  }

  keys(s).reverse().forEach(k => {
    t[k] && k[0] === "_" && typeof t[k] === "object"
      ? appendTo(t[k], s[k])
      : t[k] = s[k];
  });
  return t;
};

const keys = <T>(o: T): (keyof T & string)[] =>
  Object.keys(o) as any;
