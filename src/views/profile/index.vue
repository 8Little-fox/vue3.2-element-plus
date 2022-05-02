<template>
  <el-row class="my-container">
    <el-col :span="8">
      <projectCard class="project-card" />
    </el-col>
    <el-col :span="16">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="功能" name="featrue">
            <Featrue />
          </el-tab-pane>
          <el-tab-pane label="章节" name="chapter">
            <Chapter />
          </el-tab-pane>
          <el-tab-pane label="作者" name="author">
            <Author />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import Author from './components/Author.vue'
import Chapter from './components/Chapter.vue'
import Featrue from './components/Featrue.vue'

const activeName = ref('featrue')
const handleClick = () => {}
</script>

<style lang="scss" scoped>
.my-container {
  margin: 20px;
}
.project-card {
  margin-right: 20px;
}
</style>
