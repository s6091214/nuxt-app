// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
  ],
  routeRules: {
    '/': { prerender: true },
    '/api/**': { cors: true },
  },
  runtimeConfig: {
    apiSecret: '123',
    googleClientSecret: '這邊放上你的 Google Client Secret',
    googleRedirectUri: 'http://localhost:3000',
    public: {
      apiBase: '/api',
      googleClientId: '這邊放上你的 Google Client ID',
    },
  },
  vite: {
    server: {
      proxy: {
        '/api/carts': {
          target: 'https://www.healpharma.tw',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/carts/, '/carts'),
          secure: false,
        },
      },
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json',
      },
    ],
    defaultLocale: 'zh',
  },
});
