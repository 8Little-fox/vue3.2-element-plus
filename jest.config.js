export default {
  globals: {
    'vue-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('vaadin-')
      }
    }
  }
}
