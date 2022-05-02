<template>
   <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar' ]">
     {{store.getters.mainColor || getItem('mainColor')}}
    <sidebar :style="{ backgroundColor: store.getters.mainColor || getItem('mainColor')}"/>
    <div class="main-container">
      <div class="fixed-header">
        <NavBar />
        <tags-view/>
        <app-main />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar/index.vue'
import NavBar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import { useStore } from 'vuex'
import { getItem } from '@/utils/storage'
import TagsView from '@/components/TagsView'

const store = useStore()
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
 .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    // &.mobile.openSidebar{
    //   position: fixed;
    //   top: 0;
    // }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  .hideSidebar .fixed-header{
    width: calc(100% - #{$hideSidebarWidth});
  }
</style>
