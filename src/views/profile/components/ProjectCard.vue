<template>
  <el-card class="box-card">
    <template #header>
      <span>介绍</span>
    </template>
    <div class="box-container">
      <PanThumb
        image="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F5e%2F4e%2Ff0%2F5e4ef0e451852e0114d75eac14f60924.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642748304&t=a72f60d349aba9d1f5c870e8afd5409c"
      >
        <h1 class="box-container-txt">Hello World!</h1>
        <div class="box-container-title">Admin</div>
      </PanThumb>
      <h1 class="box-container-txt">Hello World!</h1>
      <div class="box-container-title">Admin</div>
    </div>
  </el-card>
</template>

<script setup>
import PanThumb from '@/components/PanThumb'
</script>

<style lang="scss" scoped>
.box-container {
  text-align: center;
  &-txt {
    font-weight: bold;
    margin-top: 20px;
  }
  &-title {
    margin-top: 10px;
    color: #a8a2a2;
  }
}
</style>
