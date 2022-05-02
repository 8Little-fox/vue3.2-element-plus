<template>
  <div class="block">
    <el-timeline v-for="(item, index) of list" :key="index">
      <el-timeline-item :timestamp="item.title" placement="top">
        <el-card>
          <h1 class="card-name">{{ item.name }}</h1>
          <p>{{ item.des }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
  {
    title: '2018/4/12',
    name: 'Update Github template',
    des: 'Tom committed 2018/4/12 20:46'
  },
  {
    title: '2018/4/12',
    name: 'Update Github template',
    des: 'Tom committed 2018/4/12 20:46'
  },
  {
    title: '2018/4/12',
    name: 'Update Github template',
    des: 'Tom committed 2018/4/12 20:46'
  },
  {
    title: '2018/4/12',
    name: 'Update Github template',
    des: 'Tom committed 2018/4/12 20:46'
  }
])
</script>

<style lang="scss" scoped>
.card-name {
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
