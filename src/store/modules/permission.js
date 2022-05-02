import { privateRoute } from '@/router'
const state = {
  routes: []
}
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}
const actions = {
  generateRoutes ({ commit }, routes) {
    return new Promise(resolve => {
      const accessedRoutes = [...privateRoute]
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
