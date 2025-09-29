import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'

export const base = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist/'],
  },
  skipFormatting,
)

export const vue = tseslint.config(...base, ...pluginVue.configs['flat/recommended'], {
  files: ['**/*.vue', '**/*.{js,ts,jsx,tsx}'],
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
      project: true,
      tsconfigRootDir: process.cwd(),
      extraFileExtensions: ['.vue'],
    },
    globals: {
      ...globals.browser,
    },
  },
})
