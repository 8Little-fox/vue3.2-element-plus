<template>
  <div class="text">这里使用 window.print() 来实现下载pdf的功能</div>
  <router-link target="_blank" to="/pdf-download-example">
    <el-button type="primary"> Click to download PDF </el-button>
  </router-link>
</template>

<script>

export default {
  name: 'PDF',
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  background-color: #fff;
  padding: 20px;
}
</style>
