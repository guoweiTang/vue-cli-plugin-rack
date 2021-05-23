<!--
 * @Description: 页面侧边导航栏
 * @Author: tangguowei
 * @Date: 2021-05-19 15:31:07
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-05-24 00:47:59
-->
<template>
  <el-aside style="width: unset">
    <div class="logo-bar" :style="{ width: collapse ? '64px' : 'inherit' }">
      <div class="logo-content">
        <img src="../../assets/logo.png" alt="logo" />
        <span v-show="!collapse">VUE RACK</span>
      </div>
    </div>
    <el-menu
      class="aside-menu"
      :collapse="collapse"
      router
      uniqueOpened
      :default-active="activeRoute.name"
      text-color="#7b8190"
      active-text-color="#5b73e8"
    >
      <AsideItem v-for="(route, index) of routes" :key="index" :item="route" />
    </el-menu>
  </el-aside>
</template>

<script>
import { routes } from '@/router';
import AsideItem from './item';
import { mapState } from 'vuex';

export default {
  name: 'APPAside',
  components: {
    AsideItem,
  },
  props: ['collapse'],
  data() {
    return {
      routes,
    };
  },
  computed: {
    ...mapState(['activeRoute']),
  },
};
</script>
<style>
/* 覆盖组件默认样式 */
.aside-menu:not(.el-menu--collapse) {
  width: 240px;
}
.el-aside {
  background-color: #fff;
}
.logo-bar {
  overflow: hidden;
  border-bottom: 1px solid #dcdfe6;
  padding: 15px 0 16px;
}
.logo-content {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  line-height: 44px;
  font-weight: bold;
  color: #1d3042;
}
.logo-content > * {
  margin: 0 12px;
}
.logo-content img {
  width: 44px;
}
.el-menu {
  border-right: none !important;
}
.el-aside {
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-submenu__title:hover,
.el-menu-item:hover {
  color: #383c40 !important;
}
.el-submenu__title:hover,
.no-drop-down:hover,
.el-menu-item.is-active {
  background-color: transparent !important;
}
.el-submenu .el-menu-item {
  background-color: #f5f5f5 !important;
}
.el-submenu .el-menu-item:hover,
.el-submenu .el-menu-item.is-active {
  background-color: #f0f0f0 !important;
}
.el-menu-item.is-active:hover {
  color: #5b73e8 !important;
}
</style>
