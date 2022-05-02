<template>
  <div>
    <el-form ref="form" :model="form" :inline="true">
      <el-form-item label="切换账号">
        <el-radio-group v-model="form.account">
          <el-radio label="admin">admin</el-radio>
          <el-radio label="editor">editor</el-radio>
          <el-radio label="test">test</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleChangePermission">
          切换权限
        </el-button>
      </el-form-item>
      <el-form-item label="当前账号拥有的权限">
        <!-- {{ JSON.stringify(permissions) }} -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Authority',
  setup () {
    const form = reactive({
      account: ''
    })
    const handleChangePermission = () => {

    }
    return {
      form,
      handleChangePermission
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
