import { useI18n } from 'vue-i18n'
import { useCookie } from '#app'

export const useLanguage = () => {
  const { locale } = useI18n()
  const languageCookie = useCookie('language')

  // 初始化时从 cookie 读取语言
  if (languageCookie.value) {
    locale.value = languageCookie.value
  }

  const setLanguage = (lang: string) => {
    locale.value = lang
    languageCookie.value = lang
  }

  return {
    locale,
    setLanguage
  }
} 