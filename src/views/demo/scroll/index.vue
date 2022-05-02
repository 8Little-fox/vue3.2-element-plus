<template>
  <el-button type="primary" @click="handlerDialog">1212121click to open the Dialog</el-button>
  <el-input v-model="name"></el-input>
  <el-button @click="submit">确定</el-button>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const name = ref('')
const handleNameREs = (val) => {
  console.log('val', val)
  const reg = /[\s+`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g
  console.log('reg.test(name.value)', !reg.test(name.value))
  if (!reg.test(name.value)) {
    return ElMessage({
      title: '名称中不可以包含特殊字符'
    })
  }
  // name.value = val.replace(/[\s+`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '')
  console.log('name.value', name.value)
}
const submit = () => {
  handleNameREs(name.value)
}
const handlerDialog = () => {
  dialogVisible.value = true
  nextTick(() => {
    const drag = document.querySelector('.el-dialog') // 获取操作元素
    console.log('drag', drag)
    drag.onmousedown = function (e) {
      console.log('e****', e)
      // 鼠标按下触发
      var disx = e.pageX - drag.offsetLeft // 获取鼠标相对元素距离
      var disy = e.pageY - drag.offsetTop
      console.log(e.pageX)
      console.log(drag.offsetLeft)
      document.onmousemove = function (e) {
        // 鼠标移动触发事件，元素移到对应为位置
        drag.style.left = e.pageX - disx + 'px'
        drag.style.top = e.pageY - disy + 'px'
      }
      document.onmouseup = function () {
        // 鼠标抬起，清除绑定的事件，元素放置在对应的位置
        document.onmousemove = null
        document.onmousedown = null
      }
    }
  })
}
const handleClose = () => {
  console.log('取消')
}
</script>

<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
