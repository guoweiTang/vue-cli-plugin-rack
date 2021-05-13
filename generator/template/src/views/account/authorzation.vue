<template>
  <el-card class="userinfo" body-style="{minHeight: '100%'}">
    <el-alert
      :closable="false"
      title="默认仅普通用户可访问我的账户页面"
      :style="{ marginBottom: '20px' }"
      type="warning"
    >
    </el-alert>
    <editable-text
      type="radio"
      :options="['管理员', '普通用户']"
      label="你的权限"
      prop="role"
      :value="userInfo.role"
      @confirm="handleConfirmRole"
    />
  </el-card>
</template>

<script>
import { mapState } from 'vuex';
import EditableText from '@/components/editable-text';

export default {
  components: {
    EditableText,
  },
  computed: mapState(['userInfo']),
  methods: {
    handleConfirmRole(value) {
      this.$store.dispatch('setUserInfo', {
        role: value,
      });
    },
  },
};
</script>

<style>
.userinfo {
  width: 60%;
  margin: 0 auto;
}
.userinfo .el-card {
  min-height: calc(100vh - 75px - 60px - 40px);
  padding: 30px 100px;
  box-sizing: border-box;
}
</style>
