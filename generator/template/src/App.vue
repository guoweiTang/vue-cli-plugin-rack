<template>
  <el-container v-show="!isScreen">
    <router-view name="AppAside" />
    <el-container direction="vertical">
      <router-view name="AppHeader" />
      <el-main>
        <router-view />
      </el-main>
      <router-view name="AppFooter" />
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  computed: {
    ...mapState(['isScreen']),
  },
  setup() {},
});
</script>

<style>
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
</style>
