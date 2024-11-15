import withNuxt from './.nuxt/eslint.config.mjs'

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default withNuxt(eslintPluginPrettierRecommended, {
  plugins: {
    'unused-imports': unusedImports
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser
    }
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/no-v-html': 0,
    'no-multi-spaces': 'error',
    'no-console': 1,
    'unused-imports/no-unused-imports-ts': 0
  }
})
