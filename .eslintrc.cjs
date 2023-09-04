/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "vue/multi-word-component-names": ["off"],
    "vue/valid-template-root": ["off"],
    "vue/singleline-html-element-content-newline": ["off"],
    "comma-dangle": [2, "always-multiline"],
    "semi": [2, "always"],
    "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
    "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
    }],
  },
  ignorePatterns: ["**/*.spec.js"],
}
