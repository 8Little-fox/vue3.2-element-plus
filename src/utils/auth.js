// ../utils/auth.js 文件位置

// 获取当前客户权限
export function getCurrentAuthority () {
  return ['admin']
}

// 校验权限
export function check (authority = []) {
  const current = getCurrentAuthority()
  return current.some(item => authority.includes(item))
}

// 登录校验
export function isLogin () {
  const current = getCurrentAuthority()
  return current && current[0] !== 'guest'
}
