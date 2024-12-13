import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxtjs-naive-ui', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // 添加这行
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'zh', iso: 'zh-TW', file: 'zh.json' },
    ],
    defaultLocale: 'en',
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  // app: {
  //   pageTransition: true,
  //   pageTransition: {
  //     name: 'fade',
  //     mode: 'out-in',
  //   },
  // },
})
