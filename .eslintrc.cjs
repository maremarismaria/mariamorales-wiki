module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:prettier/recommended",
    "@vue/eslint-config-prettier",
    "@nuxtjs/eslint-config-typescript",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    babelOptions: {},
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "vue/multi-word-component-names": ["off"],
    "vue/valid-template-root": ["off"],
  },
  ignorePatterns: ["**/*.spec.js"],
};
