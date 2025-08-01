// @ts-check

import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default tseslint.config(
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
      '@stylistic/js': stylisticJs,
    },
    files: ['lib/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended
    ],
    rules: {
      "@stylistic/ts/semi": "error",
      "@stylistic/ts/quotes": ["error", "single"],
      "@stylistic/ts/object-curly-spacing": ["error", "always"],
      "@stylistic/ts/lines-around-comment": ["error", {
        "beforeBlockComment": true,
        "beforeLineComment": true,
      }],
      "@stylistic/js/no-trailing-spaces": "error"
    },
  }
);
