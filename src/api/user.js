import request from '@/utils/request'

/**
 * 获取项目功能
 */
export const reature = () => {
  return request({
    url: '/user/feature'
  })
}
