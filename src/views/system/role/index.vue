<template>
  <div style="float: right; margin-top: 20px;">
    <el-button @click="onExcelIn" type="primary">导入</el-button>
    <el-button :loading="loading" type="primary" @click="onExcelDown">导出</el-button>
    <el-button v-print="printObj" :loading="printLoading" type="primary">局部打印</el-button>

  </div>
  <el-table :data="dataSource" stripe style="width: 100%" id="role">
    <el-table-column prop="name" label="名称" width="180" />
    <el-table-column prop="dataScope" label="数据权限" width="180" />
    <el-table-column prop="level" label="角色级别" />
    <el-table-column prop="updateTime" label="时间" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="{row}">
        <el-button type="text" size="small" @click="handleDetail(row.id)">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, reactive } from 'vue'
// import ItemTable from '@/components/Table'
import useTable from '@/hooks/useTable'
// import { createColumn } from '@/hooks/createColumn'
import { ElMessage, ElMessageBox } from 'element-plus'
import { USER_ROUTE } from '@/utils/constant'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const printLoading = ref(false)
const printObj = {
  id: 'role', // 打印区域
  popTitle: '角色列表',
  beforeOpenCallback () {
    printLoading.value = true
  },
  openCallback () {
    printLoading.value = false
  }
}
const options = reactive({
  api: '/api/roles'
})
const { dataSource } = useTable(options)

// 导出
const onExcelDown = () => {
  ElMessage({ type: 'warning', message: '数据读取中，请稍后' })
  loading.value = true
  // 此处获取后端接口数据
  // await this.getExportData()
  loading.value = false
  const filename = '角色列表'
  const autoWidth = true
  const bookType = 'xlsx'
  const header = Object.keys(USER_ROUTE)
  const headValue = Object.values(USER_ROUTE)
  const formatJson = (headValue, dataSource) => {
    return dataSource.value.map((v) => headValue.map((j) => v[j]))
  }
  ElMessageBox.confirm('确定导出内容', '提示', {
    cancelButtonClass: 'btn-custom-cancel',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    // 引入本地的 Export2Excel.js
    import('@/utils/export2Excel.js').then(moudle => {
      moudle.export_json_to_excel({
        header,
        // this.exportData 是后端获取的数据
        data: formatJson(headValue, dataSource),
        filename,
        autoWidth,
        bookType
      })
    })
  }).catch(() => {
    ElMessage({ type: 'info', message: '已取消导出' })
  })
}
// 导入
const onExcelIn = () => {
  router.push({ path: '/demo/upload' })
}
const handleDetail = (id) => {
  router.push(`/system/role/details/${id}`)
}
</script>

<style lang="scss" scoped>
</style>
