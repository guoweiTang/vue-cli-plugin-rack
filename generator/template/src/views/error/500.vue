<template>
  <div class="error-page">
    <el-row type="flex" justify="center" align="center" class="lsl">
      <el-col :span="6"><img :src="icon500" alt="500 icon" /></el-col>
      <el-col :span="4" :offset="2">
        <h2>500</h2>
        <div class="sub-title">抱歉，服务器报错</div>
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
import icon500 from '@/assets/icon-500-color.svg';

export default defineComponent({
  name: '500',
  setup() {
    return {
      icon500,
    };
  },
});
</script>
