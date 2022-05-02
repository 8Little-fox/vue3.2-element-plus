import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss'
import installIcons from '@/icons'
import installDirective from '@/directives'
// 导入路由鉴权
import './permission.js'

createApp(App).use(store).use(router).use(ElementPlus, {
  locale: store.getters.language === 'en' ? en : zhCn
}).use(installIcons).use(i18n).use(installDirective).mount('#app')
