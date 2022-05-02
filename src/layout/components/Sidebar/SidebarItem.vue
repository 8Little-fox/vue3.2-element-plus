<template>
  <el-sub-menu v-if="route.children?.length" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
     <sidebar-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        class="nest-menu"
      />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './Item.vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>
