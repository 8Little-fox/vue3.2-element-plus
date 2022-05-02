<template>
  <div class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="(tag, index) of $store.getters.tagsViewList"
        :key="tag.fullPath"
        class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''"
        :style="{backgroundColor: isActive(tag) ? $store.getters.mainColor: '',
        borderColor: isActive(tag) ? $store.getters.mainColor : ''}"
        :to="{ path: tag.fullPath }"
      >
        {{ tag.meta.title }}
        <span @click.prevent.stop="onCloseCLick(index)">
          <svg-icon
            v-show="!isActive(tag)"
            class="el-icon-close"
            icon="close"
          ></svg-icon>
        </span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ScrollPane from './ScrollPane.vue'

const route = useRoute()
const store = useStore()
const isActive = (tag) => {
  return tag.path === route.path
}
const onCloseCLick = (index) => {
  store.commit('app/removeTagsView', {
    type: 'index',
    index
  })
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.tags-view-container {
  height: 40px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 32px;
      line-height: 32px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 14px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        // background-color: #409EFF;
        // border-color: #409EFF;
        color: #fff;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
