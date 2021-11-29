<!--
 * @Description: 入口模板
 * @Author: tangguowei
 * @Date: 2021-05-19 14:54:00
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-11-29 17:34:48
-->
<template>
  <el-container>
    <el-main v-if="isScreen">
      <router-view />
    </el-main>
    <template v-else>
      <AppAside :collapse="collapse" />
      <el-container>
        <el-main>
          <AppHeader :collapse="collapse" @handleToggleCollapse="handleToggleCollapse" />
          <div class="app-container">
            <router-view />
          </div>
          <AppFooter />
        </el-main>
      </el-container>
    </template>
  </el-container>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { mapState } from 'vuex';
import AppAside from '@/layouts/app-aside';
import AppHeader from '@/layouts/app-header';
import AppFooter from '@/layouts/app-footer';

export default defineComponent({
  components: {
    AppAside,
    AppHeader,
    AppFooter,
  },
  computed: {
    ...mapState('admin/common', ['isScreen']),
  },
  setup() {
    const collapse = ref(false);
    const handleToggleCollapse = () => {
      collapse.value = !collapse.value;
    };
    const handleResize = () => {
      const widthOfWindow = document.documentElement.clientWidth;
      if (widthOfWindow < 1281) {
        collapse.value = true;
      } else {
        collapse.value = false;
      }
    };
    window.addEventListener('resize', handleResize);
    // 初始化浏览视口以正确显示
    onMounted(() => {
      handleResize();
    });
    return {
      collapse,
      handleToggleCollapse,
    };
  },
});
</script>

<style scoped>
.app-container {
  box-sizing: border-box;
  padding: var(--el-main-padding);
  min-height: calc(100vh - 75px - 60px);
  min-width: 1000px;
}
</style>
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
  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans,
    sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
  background-color: #f5f6f8;
}
.el-main:only-child {
  padding: 0;
  max-height: 100vh;
}
.el-form--inline .el-form-item {
  margin-bottom: 0;
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
