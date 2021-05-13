<template>
  <el-aside>
    <dl class="logo">
      <dt><img src="../../assets/logo.png" alt="logo" /></dt>
      <dd>VUE RACK</dd>
    </dl>
    <el-menu
      router
      uniqueOpened
      :default-active="pathName"
      text-color="#7b8190"
      active-text-color="#5b73e8"
    >
      <el-menu-item index="Home" :route="{ name: 'Home' }">
        <template #title>
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="Authorzation" :route="{ name: 'Authorzation' }">
        <template #title>
          <i class="el-icon-lock"></i>
          <span>权限设置</span>
        </template>
      </el-menu-item>
      <el-submenu class="no-drop-down" index="table">
        <template #title>
          <i class="el-icon-ice-drink"></i>
          <span>列表</span>
        </template>
        <el-menu-item index="BasicTable" :route="{ name: 'BasicTable' }"
          >基础列表</el-menu-item
        >
        <el-menu-item index="CardTable" :route="{ name: 'CardTable' }"
          >卡片列表</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      pathName: '',
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.pathName = to.name;
      // 通过 `vm` 访问组件实例
    });
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
