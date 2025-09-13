module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js', // Tailwind 設定檔（可選）
  tailwindStylesheetPrettier: './app/assets/css/tailwind.css', // ⚡ 指定 Tailwind 主入口
  semi: true, // 每行結尾加分號
  singleQuote: true, // 使用單引號
  printWidth: 100, // 每行最大長度 100 字元
  tabWidth: 2, // tab 寬度 2 空格
  trailingComma: 'es5', // ES5 支援的地方加尾逗號
  arrowParens: 'always', // 箭頭函式參數一定加括號
  endOfLine: 'lf',
};
