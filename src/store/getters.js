/**
 *  快捷访问
 */
const getters = {
  token: state => state.user.token,
  routesList: state => state.user.routesList, // 接口返回路由
  permission_routes: state => state.permission.routes, // 本地路由
  sidebarOpened: state => state.app.sidebarOpened, // Sidebar 打开/关闭
  language: state => state.app.language, // 国际化语言切换
  mainColor: state => state.theme.mainColor, // 主题色
  tagsViewList: state => state.app.tagsViewList
}
export default getters
