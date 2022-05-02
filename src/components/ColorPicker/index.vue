<template>
  <div class="stem-color">
    <i class="iconfont shuidi">&#xe604;</i>
    <img class="up" src="../../assets/xuanzeqixial.png" alt="up" />
    <color-picker @change="handlerColor" :default-color="defaultColor"></color-picker>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import ColorPicker from 'colorpicker-v3' // 注册组件
defineProps({
  defaultColor: {
    type: String,
    default: '#000000'
  }
})
const emit = defineEmits(['choiceColor'])
const handlerColor = (e) => {
  emit('choiceColor', e)
}
</script>

<style lang="scss" scoped>
@import './colorPicker.css';
.stem-color {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 49px;
  background: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  .shuidi {
    margin-left: 50px;
    color: v-bind(defaultColor);
  }
}
.up {
  width: 15px;
  height: 15px;
}

::v-deep(.zs-color-picker-btn) {
  opacity: 0;
}
::v-deep(.zs-color-picker) {
  position: relative;
  right: 40px;
}
::v-deep(.zs-color-picker-btn) {
  width: 50px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}
::v-deep(.zs-color-picker-panel) {
  position: absolute;
  right: 30px;
}
</style>
