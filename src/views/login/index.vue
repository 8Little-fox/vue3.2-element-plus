<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginFromRef"
      class="login-form"
    >
      <div class="title-container">
        <h2 class="title">{{ $t('msg.login.title') }}</h2>
        <LangSelect class="lange"></LangSelect>
      </div>
      <el-form-item props="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="$t('msg.login.usernameRule')"
          type="text"
        />
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          :placeholder="$t('msg.login.passwordRule')"
          :type="passwordType ? 'text' : 'password'"
          autocomplete="off"
        />
        <span @click="handlerShowPwd" class="show-pwd">
          <span class="svg-container">
            <svg-icon :icon="passwordType ? 'eye-open' : 'eye'"></svg-icon>
          </span>
        </span>
      </el-form-item>
      <el-form-item prop="code">
        <div style="display: flex; align-items: center">
          <span class="svg-container">
            <svg-icon icon="validCode"></svg-icon>
          </span>
          <el-input v-model="loginForm.code" :placeholder="$t('msg.login.codeRule')">
          </el-input>
        </div>
        <el-image
          class="login-code"
          @click="handleGetCode"
          :src="codeImg"
        ></el-image>
      </el-form-item>
      <el-button
        @click="handlerLogin"
        :loading="loading"
        type="primary"
        style="width: 100%"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
import request from '@/utils/request'
import LangSelect from '@/components/LangSelect'
import { useI18n } from 'vue-i18n'

const loginForm = ref({
  username: 'admin',
  password: '123456',
  rememberMe: false
})
const codeImg = ref(null)

const i18n = useI18n()
const loginRules = ref({
  username: [
    {
      required: true,
      message: i18n.t('msg.login.usernameRule'),
      trigger: 'blur',
      validator: validatePassword()
    }
  ],
  password: [
    {
      required: true,
      message: i18n.t('msg.login.passwordRule'),
      trigger: 'blur'
    }
  ]
})

const passwordType = ref(false)
const handlerShowPwd = () => {
  passwordType.value = !passwordType.value
}
onMounted(() => {
  handleGetCode()
})
const handleGetCode = () => {
  request.get('/auth/code').then((res) => {
    codeImg.value = res.img
    loginForm.value.uuid = res.uuid
  })
}

/**
 * 登录
 */
const loading = ref(false)
const store = useStore()
const loginFromRef = ref(null)
const handlerLogin = () => {
  loginFromRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch(() => {
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eeeeee;
$cursor: #fff;
.login-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: $bg;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background-color: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    ::v-deep(.lange){
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 28px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    color: $dark_gray;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
  .login-code {
    position: absolute;
    top: 0;
    right: 0px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    vertical-align: middle;
  }
}
</style>
