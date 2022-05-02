<template>
<div class="select-color">
  <el-dialog
    title="提示"
    :model-value="modelValue"
    @close="handlerClose"
    width="22%"
    >
    <div class="content">
      <div class="content-title">主题色更换</div>
      <el-color-picker v-model="mColor" :predefine="predefineColors" >
      </el-color-picker>
    </div>
    <template #footer>
      <el-button size="mini" @click="handlerClose">取消</el-button>
      <el-button size="mini" type="primary" @click="handlerClose">确定</el-button>
    </template>
  </el-dialog>
</div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { useStore } from 'vuex'
import { getItem } from '@/utils/storage'
import variables from '@/styles/variables.scss'
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const store = useStore()

const emits = defineEmits(['update:modelValue'])

const mColor = ref(getItem('mainColor') || '#ff4500')
const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
  ])
  const handlerClose = () => {
    store.commit('theme/setMainColor', mColor.value)
    variables.menuBg = mColor.value
    emits('update:modelValue', false)
  }
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
  &-title {
    margin-bottom: 20px;
  }
}
</style>
