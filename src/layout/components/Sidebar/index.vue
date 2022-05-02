<template>
<div class="sidebar-container">
  <div class="sidebar-logo">
    <img src="@/assets/logo.png"/>
    <div v-if="$store.getters.sidebarOpened">Element-Plus</div>
  </div>
  <el-scrollbar wrap-class="scrollbar-wrapper">
     <el-menu
      :collapse="!$store.getters.sidebarOpened"
      :default-active="activeMenu"
      :unique-opened="true"
      :background-color="store.getters.mainColor || getItem('mainColor')"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      router
    >
      <sidebar-item v-for="item of routes" :key="item.path" :route="item" />
    </el-menu>
  </el-scrollbar>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import variables from '@/styles/variables.scss'
import { generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import { getItem } from '@/utils/storage'

const store = useStore()
const routes = computed(() => {
  return generateMenus(store.getters.permission_routes)
})
/**
 * 默认激活项
 */
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
