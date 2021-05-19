<!--
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-05-19 15:31:07
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-05-19 15:31:30
-->
<template>
  <el-aside>
    <dl class="logo">
      <dt><img src="../../assets/logo.png" alt="logo" /></dt>
      <dd>VUE RACK</dd>
    </dl>
    <el-menu
      router
      uniqueOpened
      :default-active="permission.activeRoute.name"
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
  components: {
    AsideItem,
  },
  data() {
    return {
      routes,
    };
  },
  computed: {
    ...mapState(['permission']),
  },
};
</script>
<style>
.el-aside {
  background-color: #fff;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  color: #1d3042;
  padding: 18px;
}
.logo img {
  width: 40px;
  height: 40px;
}
.el-menu {
  border-right: none !important;
}
.el-aside {
  width: 200px !important;
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
