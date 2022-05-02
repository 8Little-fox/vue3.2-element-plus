import { encrypt } from '@/utils/rsaEncrypt'
import { setItem, getItem, removeAllItem } from '@/utils/storage.js'
import request from '@/utils/request'
import baseRouter from '@/router/baseRouter'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    routesList: []
  }),
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      setItem('token', token)
    },
    SET_ROUTE: (state, routes) => {
      state.routesList = routes
    }
  },
  actions: {
    /**
     * 登录请求
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login (context, userInfo) {
      userInfo.password = encrypt(userInfo.password)
      return new Promise((resolve, reject) => {
        request.post('/auth/login', { ...userInfo }).then((res) => {
          this.commit('user/SET_TOKEN', res.token)
          router.push('/')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     *  退出登录
     */
    logout () {
      this.commit('user/SET_TOKEN', '')
      removeAllItem()
      router.push('/login')
    },
    getInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        request.get('/api/menus/build').then((res) => {
          const menuPermission = baseRouter()
          console.log('menuPermission', menuPermission)
          commit('SET_ROUTE', res)
          if (res.code === 401) {
            removeAllItem()
          }
          resolve({ res, menuPermission })
        })
      })
    }
  }
}
