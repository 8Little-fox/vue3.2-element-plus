<template>
<UploadExcel :onSuccess="onSuccess"/>
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel'
import { USER_RELATIONS } from '@/utils/constant'
import Common from '@/utils/common'

const onSuccess = ({ header, results }) => {
  const updateData = generateData(results)
  console.log('数据导入updateData', updateData)
}

const generateData = results => {
  const arr = []
  results.forEach(item => {
    const userInfo = {}
    Object.keys(item).forEach(key => {
      if (USER_RELATIONS[key] === 'createTime') {
        userInfo[USER_RELATIONS[key]] = Common.formatDate(item[key])
        return
      }
      userInfo[USER_RELATIONS[key]] = item[key]
    })
    arr.push(userInfo)
  })
  return arr
}
</script>

<style lang="scss" scoped>

</style>
