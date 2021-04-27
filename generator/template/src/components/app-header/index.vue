<template>
  <el-header height="75px">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-avatar
          :class="userInfo.gender === '女' ? 'user-woman' : 'user-man'"
          :size="30"
          icon="el-icon-user-solid"
        ></el-avatar>
        <span>{{ userInfo.name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user" @click="handleMyself"
            >我的账户</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-switch-button" @click="clearToken"
            >登出</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { clearToken } from '@/utils/token';
import { getMyInfo } from '@/views/service';
export default {
  computed: mapState(['userInfo']),
  methods: {
    ...mapMutations['setUserInfo'],
    handleMyself() {
      this.$router.push({
        name: 'UserInfo',
      });
    },
    clearToken,
    errorHandler() {
      return true;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例
      if (!vm.userInfo.name) {
        getMyInfo().then(({ data }) => {
          vm.$store.commit('setUserInfo', data);
        });
      }
    });
  },
};
</script>

<style>
.el-header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-header .el-avatar {
  margin-right: 12px;
}
.el-header .el-dropdown-link {
  cursor: default;
  display: flex;
  align-items: center;
}
</style>
<style scoped>
.user-man {
  background-color: cornflowerblue;
}
.user-woman {
  background-color: rgb(255, 112, 179);
}
</style>
