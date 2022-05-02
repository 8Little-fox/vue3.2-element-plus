<template>
  <div class="app-main">
    <Transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </Transition>
    <!-- <router-view v-slot="{Component, route}">
     <Transition name="fade-transform" mode="out-in">
       <keep-alive>
         <component :is="Component" :key="route.path"></component>
       </keep-alive>
     </Transition>
    </router-view> -->
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'
import { useStore } from 'vuex'
// import { generateTitle } from '@/utils/i18n'

const route = useRoute()
const store = useStore()

const getTitle = route => {
  let title = ''
  if (!route.meta) {
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length]
  } else {
    title = route.meta.title
    // title = generateTitle(route.meta.title)
  }
  return title
}
watch(route, (to, from) => {
  console.log('****', to, from)
  if (!isTags(to.path)) return
  const {
    fullPath,
    meta,
    name,
    params,
    path,
    query
  } = to
  store.commit('app/addTagsViewList', {
    fullPath,
    meta,
    name,
    params,
    path,
    query,
    title: getTitle(to)
  })
}, { immediate: true })

</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  overflow: hidden;
  height: calc(100vh - 130px);
  background-color: #fff;
  margin: 15px;
}
</style>
