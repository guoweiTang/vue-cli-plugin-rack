<!--
 * @Description: 权限设置
 * @Author: tangguowei
 * @Date: 2021-05-19 19:44:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-13 16:26:13
-->
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

<script lang="ts">
import { mapState } from 'vuex';
import { Options, Vue } from 'vue-class-component';
import EditableText from '@/components/editable-text/index.vue';

@Options({
  components: {
    EditableText,
  },
  computed: mapState('admin/user', ['userInfo']),
})
export default class extends Vue {
  $store: any;

  handleConfirmRole(value: string) {
    this.$store.dispatch('admin/user/setUserInfo', {
      role: value,
    });
  }
}
</script>
