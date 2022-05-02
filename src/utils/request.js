import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import router from '@/router'
import { removeItem } from '@/utils/storage'
const service = axios.create({})
/**
 * 请求拦截器
 */
 service.interceptors.request.use(request => {
  if (store.getters.token) {
    request.headers.Authorization = store.getters.token
  }
  return request
}, error => {
  return Promise.reject(error)
})
/**
 * 响应拦截器
 */
service.interceptors.response.use(response => {
  return response.data
}, error => {
  let code = 0
  try {
    code = error.response.data.status
  } catch (error) {
    if (error.toString().indexOf('Error: timeout') !== -1) {
      ElMessage.error('网络请求超时')
      return Promise.reject(error)
    }
  }
  /**
   *  token 过期
   */
  if (code === 401) {
    removeItem('token')
    router.push('/login')
  } else {
    ElMessage.error(error.response.data.message)
  }
  return Promise.reject(error)
})
const get = (url, params = {}) => {
  return service({
    url,
    method: 'get',
    params: {
      timestamp: new Date().getTime(),
      ...params
    }
  })
}

const post = (url, data, config = {}) => {
  return service({
    url,
    method: 'post',
    data,
    ...config
  })
}

export {
  get,
  post
}

export default service
