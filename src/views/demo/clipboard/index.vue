<template>
  <el-input
    id="bar"
    v-model="inputData"
    placeholder="Please input"
    style="width: 400px; max-width: 100%"
  />
  <el-button
    class="btn"
    data-clipboard-target="#bar"
    @click="handleClipboard"
    type="primary"
  >
    copy
  </el-button>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ClipboardJS from 'clipboard'
import { ElMessage } from 'element-plus'

export default {
  name: 'Clipboard',
  setup () {
    const dataMap = reactive({
      inputData: 'https://github.com/Armour/vue-typescript-admin-template'
    })
    const handleClipboard = () => {
      var clipboard = new ClipboardJS('.btn')

      clipboard.on('success', function (e) {
        console.info('Action:', e.action)
        console.info('Text:', e.text)
        console.info('Trigger:', e.trigger)
        ElMessage({
          message: '复制成功',
          type: 'success'
        })
        e.clearSelection()
      })

      clipboard.on('error', function (e) {
        console.error('Action:', e.action)
        console.error('Trigger:', e.trigger)
      })
    }
    return {
      ...toRefs(dataMap),
      handleClipboard
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
