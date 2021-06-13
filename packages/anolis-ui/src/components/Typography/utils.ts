const separateObjValuesMemo = new WeakMap();

// Separate properties with objects (responsive values) as value
export const separateObjValues = (x?: Record<string, any>) => {
  if (x === undefined) return undefined;

  if (separateObjValuesMemo.has(x)) {
    return separateObjValuesMemo.get(x);
  }

  const e = Object.entries(x);

  const a = [];
  const b = [];

  for (let i = 0; i < e.length; i++) {
    if (e[i][1] && typeof e[i][1] === "object") {
      a.push(e[i]);
    } else {
      b.push(e[i]);
    }
  }

  const result = [a, b] as const;
  separateObjValuesMemo.set(x, result);
  return result;
};

const groupByBreakpointMemo = new WeakMap();

// Transform from `width: { sm: 2 }` to `sm: { with: 2 }
export const groupByBreakpoint = (x?: [string, Record<string, any>][]) => {
  if (x === undefined) return undefined;

  if (groupByBreakpointMemo.has(x)) {
    return groupByBreakpointMemo.get(x);
  }

  const result: any = {};

  for (let i = 0; i < x.length; i++) {
    const propKey = x[i][0];
    const keys = Object.keys(x[i][1]);

    for (let ii = 0; ii < keys.length; ii++) {
      const breakpointKey = keys[ii];
      result[breakpointKey] = result[breakpointKey] ?? {};
      result[breakpointKey][propKey] = x[i][1][breakpointKey];
    }
  }

  groupByBreakpointMemo.set(x, result);
  return result;
};

// wrap strings (media queries) in an array with css selector
export const wrapObjsWithSelector = (selector: string, arr: (string | {} | null | undefined)[]) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null || arr[i] === undefined) continue;

    if (typeof arr[i] !== "string") {
      result.push(`${selector} {`, arr[i], "}");
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
