import path from 'path'
/**
 * 根据routes 数据返回对应的menu 规则数据
 */
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    const routePath = path.resolve(basePath, item.path)
    if (item.children?.length) {
      result.push({
        ...item,
        path: routePath,
        children: item.children.length === 1 ? [] : item.children
      })
    }
  })
  return result
}
