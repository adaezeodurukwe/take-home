module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-console": 1,
  },
};