// @ts-check

import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    { ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**'] },
    {
        files: ['**/*.{js,ts}'],
        extends: [
            js.configs.recommended,
            tsEslint.configs.recommendedTypeChecked
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    }
]);
