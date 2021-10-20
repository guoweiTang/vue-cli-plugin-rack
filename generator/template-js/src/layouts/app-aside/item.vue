<!--
 * @Description: 侧边栏菜单项
 * @Author: tangguowei
 * @Date: 2021-05-19 10:57:36
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 16:02:59
-->
<template>
  <template v-if="isShowing">
    <el-menu-item
      v-if="!item.children || !item.children.length"
      :index="item.name"
      :route="{ name: item.name }"
    >
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-submenu v-else class="no-drop-down" :index="item.name">
      <template #title>
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem v-for="(child, index) of item.children" :key="index" :item="child" />
    </el-submenu>
  </template>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MenuItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('admin/user', ['userInfo']),
    isShowing() {
      const { hidden, meta } = this.item;
      const role = this.userInfo.role;
      const isArray = Array.isArray(meta.auth);
      return (
        !hidden &&
        (!meta.auth || (role && ((isArray && meta.auth.includes(role)) || meta.auth === true)))
      );
    },
  },
  setup() {},
};
</script>
