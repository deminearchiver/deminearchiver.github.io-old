import js from "@eslint/js";
import solidTypescript from "eslint-plugin-solid/dist/configs/typescript.js";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import prettier from "eslint-config-prettier";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  js.configs.recommended,
  solidTypescript,
  {
    
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: typescriptParser,
      parserOptions: {
        project: "tsconfig.json"
      }
    },
    rules: {
      "quotes": ["warn", "double"],
      "no-unused-vars": ["warn", { vars: "all", args: "all",  }]
    }
  },
  prettier
]