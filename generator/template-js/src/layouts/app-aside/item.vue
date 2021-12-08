<!--
 * @Description: 侧边栏菜单项
 * @Author: tangguowei
 * @Date: 2021-05-19 10:57:36
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-08 15:30:07
-->
<script setup>
import { computed } from 'vue';
import { useStore, mapState } from 'vuex';

/**
 * 父组件传入的数据及事件
 */
const props = defineProps(['item']);

const store = useStore();
// 同步store数据
const userInfo = computed(mapState('admin/user', ['userInfo']).userInfo.bind({ $store: store }));

const isShowing = computed(() => {
  const meta = props.item.meta;
  const { auth, hidden } = meta;
  const isArray = Array.isArray(auth);
  return (
    !hidden &&
    (!auth ||
      (userInfo.value.role && ((isArray && auth.includes(userInfo.value.role)) || auth === true)))
  );
});
</script>

<template>
  <template v-if="isShowing">
    <el-menu-item
      v-if="!item.children || !item.children.length"
      :index="item.name"
      :route="{ name: item.name }"
    >
      <i v-if="item.meta?.icon" :class="item.meta.icon"></i>
      <template #title>
        <span>{{ item.meta?.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else class="no-drop-down" :index="item.name">
      <template #title>
        <i v-if="item.meta?.icon" :class="item.meta.icon"></i>
        <span>{{ item.meta?.title }}</span>
      </template>
      <Item v-for="(child, index) of item.children" :key="index" :item="child" />
    </el-sub-menu>
  </template>
</template>
