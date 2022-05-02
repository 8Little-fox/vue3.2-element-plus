<template>
<!-- element icon -->
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <!-- 非 element icon -->
  <svg-icon v-else :icon="icon"></svg-icon>
  <span :class="!store.getters.sidebarOpened ? 'open' : 'hide'">{{title}}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'
// import { generateTitle } from '@/utils/i18n'

const store = useStore()

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.open {
  margin-right: -16px;
}
</style>
