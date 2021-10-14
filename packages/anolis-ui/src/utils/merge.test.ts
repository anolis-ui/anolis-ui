import { merge } from "./merge";

test("should merge in correct order", () => {
  const mergedProps = merge({
    padding: 1,
    paddingLeft: 4,
    paddingTop: 3
  }, {
    paddingTop: 2,
    paddingLeft: 4
  });

  const expectedProps = {
    padding: 1,
    paddingTop: 2,
    paddingLeft: 4
  };

  expect(mergedProps).toMatchObject(expectedProps);

  expect(Object.keys(mergedProps)).toMatchObject(Object.keys(expectedProps));
});

test("should deepmerge _props", () => {
  const mergedProps = merge({
    margin: 1,
    _input: {
      color: "blue",
      borderRadius: "full",
      padding: 2,
      _deep: {
        w: "100%"
      }
    }
  }, {
    _input: {
      color: "black",
      padding: 3,
      fontSize: "sm",
      _deep: {
        bg: "red"
      }
    }
  });

  const expectedProps = {
    margin: 1,
    _input: {
      color: "black",
      borderRadius: "full",
      padding: 3,
      fontSize: "sm",
      _deep: {
        w: "100%",
        bg: "red"
      }
    }
  };

  expect(mergedProps).toMatchObject(expectedProps);

  expect(Object.keys(mergedProps)).toMatchObject(Object.keys(expectedProps));
});
