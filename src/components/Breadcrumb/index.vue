<template>
  <el-breadcrumb class="breadcrumb" separator="/">
  <transition-group name="breadcrumb">
   <el-breadcrumb-item v-for="(item, index) of breadcrumbData" :key="item.path">
      <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{item.meta.title}}</span>
      <span v-else class="redirect" @click="onLinkClicked(item)">{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import variables from '@/styles/variables.scss'
// import { generateTitle } from '@/utils/i18n'

const route = useRoute()

const breadcrumbData = ref([])
/**
 * route.matche包含当前路由的所有嵌套路径片段的路由记录
 */
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}
watch(route, () => {
   getBreadcrumbData()
  }, { immediate: true }
)
/**
 * 点击路由跳转
 */
const router = useRouter()
const onLinkClicked = (item) => {
  router.push(item.path)
}

/**
 * 鼠标移入显示主题色
 */
const linkHoverColor = variables.menuBg
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .redirect {
    cursor: pointer;
    font-weight: 600;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor)
  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
