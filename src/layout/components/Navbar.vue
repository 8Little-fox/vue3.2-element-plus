<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <Screenfull class="right-creenfull-item" />
      <ThemeSelect class="right-menu-item hover-effect" />
      <!-- <LangSelect class="right-menu-item hover-effect" /> -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/logo.png" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item>
              <span style="display: block">修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import store from '@/store'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
// import LangSelect from '@/components/LangSelect'
import ThemeSelect from '@/components/ThemeSelect'
import Screenfull from '@/components/Screenfull'

const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .user-name {
      position: relative;
      display: inline-block;
      line-height: 1;
      margin-right: 12px;
      font-size: 14px;
      bottom: 11px;
      color: #97a8be;
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 15px 8px;
      height: 100%;
      font-size: 20px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .right-creenfull-item {
      display: inline-block;
      padding: 0px 8px;
      height: 100%;
      font-size: 20px;
      color: #5a5e66;
      vertical-align: text-bottom;
      cursor: pointer;
    }
    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
