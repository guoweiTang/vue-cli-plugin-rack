<!--
 * @Description: 首页
 * @Author: tangguowei
 * @Date: 2021-09-27 17:52:49
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-13 16:35:56
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld :msg="`Welcome to Your ${appTitle} App`"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      appTitle: process.env.VUE_APP_TITLE,
    };
  },
})
export default class Home extends Vue {
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
