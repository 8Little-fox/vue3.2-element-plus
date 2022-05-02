import { createI18n } from 'vue-i18n'
import zhLocale from './zh'
import enLocale from './en'
import store from '@/store'
import { getItem } from '@/utils/storage'
const messages = {
  en: {
   msg: {
     ...enLocale
   }
  },
  zh: {
   msg: {
     ...zhLocale
   }
  }
 }

function getLanguage () {
  return getItem('language') || store?.getters?.language
}
const i18n = createI18n({
  // 使用 composition Api
  legacy: false,
  // 全局使用 t函数
  globalInjection: true,
  locale: getLanguage() || 'en',
  messages
})
export default i18n
