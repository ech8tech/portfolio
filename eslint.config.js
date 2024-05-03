import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintTs from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...eslintTs.configs.recommended,
  pluginReactConfig,
  prettierConfig, // Добавьте конфигурацию Prettier
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
      prettier: prettierPlugin, // Добавьте плагин Prettier
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      quotes: ['error', 'single'],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
      'prettier/prettier': 'error',
    },
  },
]
