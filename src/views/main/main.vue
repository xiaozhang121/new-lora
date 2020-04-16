<template>
  <el-container>
    <!-- 引入头部 -->
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container class="main">
      <!-- 左侧导航栏 -->
      <el-aside width="200px" style="background: linear-gradient(rgb(13, 22, 29),rgb(36, 59, 76));">
        <el-menu :default-active="defaultActive" router class="menu">
          <el-submenu index="2" >
            <template slot="title" style="font-size: 18px;">Lora监测</template>
              <el-menu-item index="/temper">温湿度传感器</el-menu-item>
              <el-menu-item index="/boil">温油油位传感器</el-menu-item>
              <el-menu-item index="/switch">开关计数器</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 路由调换页面 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import './main.less'
import HeaderBar from './components/header.vue'
export default {
  name: 'Main',
  components: {
    HeaderBar
  },
  computed: {
    defaultActive () {
      return this.$route.path
    }
  }
}
</script>
<style lang="less">
    .menu {
      background-color: transparent!important;
      border-right: 0!important;
    }
    .el-menu {
      background-color: !important;
      background: linear-gradient(rgb(21, 33, 44),rgb(10, 17, 22))!important;
      text-align:center;
      .el-submenu__title {
        color: rgb(169, 181, 186);
        font-size: 18px;
      }
      .el-submenu__title:hover {
        background-color: rgb(27, 59, 71);
        border-left: 5px solid rgb(0, 254, 254);
      }
      .el-menu-item {
        color: rgb(169, 181, 186);
      }
      .el-menu-item:focus,.el-menu-item:hover {
        background-color: transparent!important;
      }
      .el-menu-item.is-active {
        color: rgb(2, 229, 230);
      }
    }
    .el-main {
      background-color: rgb(2, 15, 22);
    }
</style>
