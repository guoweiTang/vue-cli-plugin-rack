<!--
 * @Description: 首页
 * @Author: tangguowei
 * @Date: 2021-09-27 17:52:49
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-08 15:49:38
-->
<script setup>
import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const appTitle = ref(process.env.VUE_APP_TITLE);
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld :msg="`Welcome to Your ${appTitle} App`" />
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}
</style>
