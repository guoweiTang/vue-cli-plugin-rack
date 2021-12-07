<!--
 * @Description: 权限设置
 * @Author: tangguowei
 * @Date: 2021-05-19 19:44:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-06 18:02:14
-->
<script setup lang="ts">
import { computed } from 'vue';
import { useStore, mapState } from 'vuex';
import EditableText from '@/components/editable-text/index.vue';

const store = useStore();
const handleConfirmRole = (value: string) => {
  store.dispatch('admin/user/setUserInfo', {
    role: value,
  });
};
// 获取路由状态
const userInfo: any = computed(mapState('admin/user', ['userInfo']).userInfo.bind({ $store: store }));
</script>

<template>
  <el-card>
    <el-alert
      :closable="false"
      title="默认仅“普通用户”可访问「我的账户」页面，“管理员”可访问「卡片列表」页面，"
      :style="{ marginBottom: '20px' }"
      type="warning"
    >
    </el-alert>
    <editable-text
      type="radio"
      :options="[
        { label: '管理员', value: '管理员' },
        { label: '普通用户', value: '普通用户' },
      ]"
      label="你的权限"
      prop="role"
      :value="userInfo.role"
      @confirm="handleConfirmRole"
    />
  </el-card>
</template>
