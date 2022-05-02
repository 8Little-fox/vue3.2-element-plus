import { getItem, setItem } from '@/utils/storage.js'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem('mainColor') || '#304156'
  }),
  mutations: {
    setMainColor: (state, newColor) => {
      state.mainColor = newColor
      setItem('mainColor', newColor)
    }
  }
}
