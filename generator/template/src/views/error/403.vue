<!--
 * @Description: 权限限制
 * @Author: tangguowei
 * @Date: 2021-05-19 15:54:56
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-28 12:04:23
-->
<template>
  <teleport to="#app">
    <div class="error-page">
      <el-row type="flex" justify="center" align="center" class="lsl">
        <el-col :span="6"><img src="../../assets/icon-403-color.svg" alt="403 icon" /></el-col>
        <el-col :span="4" :offset="2">
          <h2>403</h2>
          <div class="sub-title">抱歉，你没有权限访问该页面</div>
          <div>
            <el-button type="primary" @click="$router.replace({ name: 'home' })"
              >返回首页</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </teleport>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Error403 extends Vue {}
</script>
