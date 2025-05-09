import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import vitest from "eslint-plugin-vitest";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ["tailwind.config.js", "eslint.config.js", "playwright.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: { vitest },
    languageOptions: {
      globals: {
        ...globals.vitest,
        ...globals.node,
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
]);
