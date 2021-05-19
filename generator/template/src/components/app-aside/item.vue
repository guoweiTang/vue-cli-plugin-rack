<!--
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-05-19 10:59:42
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-05-19 14:05:04
-->
<!--
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-05-19 10:57:36
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-05-19 10:59:42
-->
<template>
  <template v-if="!item.hidden">
    <el-menu-item
      v-if="!item.children || !item.children.length"
      :index="item.name"
      :route="{ name: item.name }"
    >
      <template #title>
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-submenu v-else class="no-drop-down" :index="item.name">
      <template #title>
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <AsideItem
        v-for="(child, index) of item.children"
        :key="index"
        :item="child"
      />
    </el-submenu>
  </template>
</template>

<script>
export default {
  name: 'AsideItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>
