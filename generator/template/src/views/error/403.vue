<template>
  <div class="error-page">
    <el-row type="flex" justify="center" align="center" class="lsl">
      <el-col :span="6"><img :src="icon403" alt="403 icon" /></el-col>
      <el-col :span="4" :offset="2">
        <h2>403</h2>
        <div class="sub-title">抱歉，你没有权限访问该页面</div>
        <div>
          <el-button type="primary" @click="$router.replace({ name: 'Home' })"
            >返回首页</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import icon403 from '@/assets/icon-403-color.svg';

export default defineComponent({
  name: '403',
  setup() {
    return {
      icon403,
    };
  },
});
</script>
