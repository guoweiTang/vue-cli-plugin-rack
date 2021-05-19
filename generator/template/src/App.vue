<!--
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-05-19 14:54:00
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-05-19 16:08:36
-->
<template>
  <el-container v-show="!isScreen">
    <AppAside />
    <el-container direction="vertical">
      <AppHeader />
      <el-main>
        <router-view />
      </el-main>
      <AppFooter />
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import AppAside from '@/layout/app-aside';
import AppHeader from '@/layout/app-header';
import AppFooter from '@/layout/app-footer';

export default defineComponent({
  components: {
    AppAside,
    AppHeader,
    AppFooter,
  },
  computed: {
    ...mapState(['isScreen']),
  },
  setup() {},
});
</script>

<style lang="scss">
body {
  margin: 0;
}
dd,
dl,
p {
  margin: 0;
}
img {
  display: inline-block;
  vertical-align: top;
}
a {
  text-decoration: none;
}
i {
  font-style: normal;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
  background-color: #f5f6f8;
}
.el-main {
  height: calc(100vh - 75px - 60px);
}
.el-main:only-child {
  padding: 0;
  height: auto;
  min-height: 100vh;
}
.error-page {
  min-width: 400px;
  height: 100vh;
  min-height: 500px;
  img {
    width: 100%;
  }
  h2 {
    color: #515a6e;
    font-size: 72px;
    line-height: 72px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  .sub-title {
    margin-bottom: 16px;
    color: #808695;
    font-size: 20px;
    line-height: 28px;
  }
  .el-row {
    height: 100%;
  }
  .el-col {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
