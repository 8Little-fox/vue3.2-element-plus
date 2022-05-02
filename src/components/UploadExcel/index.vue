<template>
  <div class="upload">
    <div class="left">
      <el-button :loading="loading" type="primary" @click="handlerUpload">文件上传</el-button>
    </div>
    <div class="right">
      <input
        ref="excelUploadInput"
        class="right-input"
        type="file"
        accept=".xlsx, .xls"
        @change="handlerChange"
      />
      <div class="drop">
        <div
          class="drop-box"
          @drop.stop.prevent="handlerDrop"
          @dragover.stop.prevent="handlerDropOver"
          @dragenter.stop.prevent="handlerDropEnter"
        >
          <svg-icon class="icon" icon="upload"></svg-icon>
          <div>将文件拖至此处</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as XLSX from 'xlsx'
import { ref, defineProps } from 'vue'
import Common from '../../utils/common'
import { ElMessage } from 'element-plus'

const props = defineProps({
  beforeUpload: Function,
  onSuccess: Function
})

const loading = ref(false)
const excelUploadInput = ref(null)

const handlerUpload = () => {
  excelUploadInput.value.click()
}
const handlerChange = (e) => {
  const files = e.target.files
  const rawFile = files[0]
  if (!rawFile) return
  upload(rawFile)
}
// 触发上传事件
const upload = (rawFile) => {
  excelUploadInput.value.value = null
  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }
  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}

const readerData = rawFile => {
  loading.value = true
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // 读取操作完成时触发
    reader.onload = e => {
      const data = e.target.result
      const workbook = XLSX.read(data, { type: 'array' })
      const firstSheetName = workbook.SheetNames[0]
      const workSheet = workbook.Sheets[firstSheetName]
      const header = Common.getHeaderRow(workSheet)
      const results = XLSX.utils.sheet_to_json(workSheet)
      generateData({ header, results })
      loading.value = false
      resolve()
    }
    reader.readAsArrayBuffer(rawFile)
  })
}

// 根据导入内容生成数据
const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData)
}
// 拖拽上传
const handlerDrop = (e) => {
  if (loading.value) return
  const files = e.dataTransfer.files
  if (files.length !== 1) {
    ElMessage.error('必须要上传一个文件')
    return
  }
  const rawFile = files[0]
  if (!Common.isExcel(rawFile)) {
    ElMessage.error('文件必须是.xlsx, .xls, .csv格式')
    return
  }
  upload(rawFile)
}
const handlerDropOver = (e) => {
  e.dataTransfer.dropEffect = 'copy'
}
const handlerDropEnter = () => {

}

</script>

<style lang="scss" scoped>
.upload {
  border: 1px solid rgb(197, 192, 192);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 200px;
  margin: auto;
  text-align: center;
  .left {
    width: 350px;
    height: 200px;
    border-right: 1px solid rgb(197, 192, 192);
    line-height: 200px;
  }
  .right {
    position: relative;
    width: 350px;
    height: 200px;
  }
  .right-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 200px;
    text-align: center;
    opacity: 0;
  }
  .drop {
    .drop-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
      color: rgb(197, 192, 192);
    }
    .icon {
      color: rgb(197, 192, 192);
      font-size: 50px;
    }
  }
}
</style>
