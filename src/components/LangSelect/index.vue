<template>
  <el-dropdown class="international" trigger="click" @command="handlerSetLanguage">
    <el-tooltip content="国际化" effect="dark">
      <svg-icon icon="international"></svg-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">中文</el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
  // effect: {
  //   type: String,
  //   default: 'dark',
  //   validator: function (value) {
  //     return ['dark', 'light'].indexOf(value) !== -1
  //   }
  // }
})

const store = useStore()
const language = computed(() => store?.getters?.language)

const i18n = useI18n()
const handlerSetLanguage = (lang) => {
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped>
</style>
