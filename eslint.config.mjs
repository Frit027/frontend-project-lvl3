import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default defineConfig({
    files: ['**/*.js', '*.mjs'],
    ignores: ['public/**'],
    plugins: {
        js: eslint,
        '@stylistic': stylistic,
    },
    extends: ['js/recommended'],
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
        },
    },
    rules: {
        '@stylistic/indent': ['error', 4],
        '@stylistic/quotes': ['error', 'single'],
    },
});
