import router from '@/router'
import store from './store'
import { ElMessage } from 'element-plus'
import { getItem, removeAllItem } from '@/utils/storage'
/**
 * 路由前置守卫
 * to - 要到哪里去
 * form - 你从哪里来
 * next - 是否要去
 */
/**
 * 配置白名单
 */
const whiteList = ['/login']

router.beforeEach(async (to, form, next) => {
  if (getItem('token')) {
    if (to.path === '/login') {
      next('/')
    } else {
      const hasRoles = store.getters.routesList && store.getters.routesList.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { menuPermission } = await store.dispatch('user/getInfo')
          const accessRoutes = await store.dispatch('permission/generateRoutes', menuPermission)
          console.log('accessRoutes', accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          removeAllItem()
          ElMessage.error(error || 'Has Error')
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
