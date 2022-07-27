const alfonz = require("eslint-config-alfonz");

module.exports = {
  ...alfonz,
  env: {
    browser: true,

    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "tsconfig.json"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
