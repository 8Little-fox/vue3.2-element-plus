import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem('language'),
    tagsViewList: getItem('tagsView') || []
  }),
  mutations: {
    triggerSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage (state, lang) {
      setItem('language', lang)
      state.language = lang
    },
    addTagsViewList (state, tag) {
      const isFind = state.tagsViewList.find(item => {
        return item.path === tag.path
      })
      // 处理重复
      if (!isFind) {
        state.tagsViewList.push(tag)
        setItem('tagsView', state.tagsViewList)
      }
    },
    removeTagsView (state, payload) {
      if (payload.type === 'index') {
        state.tagsViewList.splice(payload.index, 1)
      }
      setItem('tagsView', state.tagsViewList)
    }
  }
}
