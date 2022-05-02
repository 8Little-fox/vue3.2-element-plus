<template>
 <el-dropdown
  v-bind="$attrs"
  trigger="click"
  class="theme"
 >
  <el-tooltip :content="$t('msg.navBar.theme')">
    <svg-icon icon="theme"></svg-icon>
  </el-tooltip>
 <template #dropdown>
   <el-dropdown-menu command="color" @click="modelValue = true">
     <el-dropdown-item>
       {{$t('msg.navBar.theme')}}
     </el-dropdown-item>
   </el-dropdown-menu>
 </template>
  <SelectColor v-model="modelValue"/>
 </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor.vue'

const modelValue = ref(false)
</script>

<style lang="scss" scoped>
</style>
