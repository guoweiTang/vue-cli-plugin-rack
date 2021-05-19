<!--
 * @Description: 扩展面板
 * @Author: tangguowei
 * @Date: 2021-05-19 19:44:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-05-19 20:15:05
-->
<template>
  <teleport to="body">
    <div v-if="isScreen" class="screen-modal">
      <div>
        I'm a teleported dom! (My parent is "body")
        <el-button @click="setIsScreen(false)"> Back </el-button>
      </div>
    </div>
  </teleport>
  <el-tag @click="$emit('update:query', '零食')">零食</el-tag>
  <slot name="first"></slot>
  <slot name="content">
    <el-button type="primary" @click="setIsScreen(true)"
      >打开全屏效果</el-button
    >
  </slot>
  <slot name="last"></slot>
  <i>定义插槽样式，更多内容，敬请期待……</i>
</template>
<script>
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Expect',
  props: {
    query: String,
  },
  emits: ['update:query'],
  computed: {
    ...mapState(['isScreen']),
  },
  setup() {
    return {
      ...mapMutations(['setIsScreen']),
    };
  },
});
</script>

<style lang="scss" scoped>
:slotted(.first-button) {
  margin-left: 16px;
  background: #009688;
  border-color: #009688;
}
:slotted(.first-button:hover) {
  background: #32c0b2;
  border-color: #32c0b2;
}
.screen-modal {
  background: #fffcde;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
i {
  color: #999;
  margin-left: 16px;
}
.el-tag {
  margin-left: 10px;
  cursor: pointer;
}
</style>
