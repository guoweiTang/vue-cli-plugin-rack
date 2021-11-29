<template>
  <el-form
    label-position="left"
    :model="setupInstance.formModel"
    ref="editForm"
    label-width="140px"
  >
    <div class="edit-able">
      <el-form-item :label="label">
        <!-- 编辑区域 -->
        <el-form-item prop="targetProp" v-if="setupInstance.visible" :rules="rules">
          <el-input
            v-if="type === 'text' || type === 'textarea'"
            :type="type"
            autosize
            v-model="setupInstance.formModel.targetProp"
            autocomplete="off"
          />
          <el-radio-group
            v-else-if="type === 'radio'"
            v-model="setupInstance.formModel.targetProp"
          >
            <el-radio
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <!-- 展示区域 -->
        <div class="preview" v-else>
          <span>{{ value }}</span>
          <i class="el-icon-edit" @click="setupInstance.handleEdit">修改</i>
        </div>
      </el-form-item>
      <el-form-item v-if="setupInstance.visible">
        <el-button type="primary" @click="handleConfirm">保存</el-button>
        <el-button @click="setupInstance.handleCancel">取消</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
import { Options, Vue, setup } from 'vue-class-component';

@Options({
  name: 'EditableText',
  props: {
    // 表单类型
    type: {
      validator(value: string) {
        return ['text', 'textarea', 'radio'].includes(value);
      },
      default: 'text',
    },
    // 当type为radio，options为必选项
    options: {
      validator(value: {label: string; value: string}[] | undefined) {
        return !value || value.every((item) => item.label && item.value);
      },
    },
    label: String,
    // 表单值
    value: {
      type: String,
      default: '',
    },
    // 确定修改回调
    confirm: Function,
    // 表单校验规则
    rules: Object,
  },
})
export default class extends Vue {
  setupInstance = setup(() => {
    const formModel = reactive({ targetProp: '' });
    const visible = ref(false);
    const handleEdit = () => {
      formModel.targetProp = (this.$props as any).value;
      visible.value = true;
    };
    const handleCancel = () => {
      visible.value = false;
    };
    return {
      visible,
      formModel,
      handleCancel,
      handleEdit,
    };
  })

  // 表单提交
  handleConfirm() {
    (this.$refs.editForm as any).validate((valid: any) => {
      if (valid) {
        this.$emit('confirm', this.setupInstance.formModel.targetProp);
        this.setupInstance.handleCancel();
      } else {
        console.log('error submit!!');
      }
    });
  }
}
</script>
<style scoped>
.preview:hover .el-icon-edit {
  visibility: visible;
}
.el-icon-edit {
  margin-left: 10px;
  visibility: hidden;
  cursor: pointer;
  color: rgb(91, 115, 232);
}
</style>
