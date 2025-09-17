// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-plugin-prettier';

export default withNuxt({
  files: ['**/*.{js,ts,vue}'], // 檢查所有 JS、TS、Vue 檔案
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': ['error'], // 使用 Prettier 檢查格式
    'no-console': 'warn', // 使用 console 只警告
    'vue/multi-word-component-names': 'off',
  },
});
