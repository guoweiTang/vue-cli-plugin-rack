<template>
  <el-form
    label-position="left"
    :model="formModel"
    :rules="formRules"
    ref="editForm"
    label-width="140px"
  >
    <div class="edit-able">
      <el-form-item :label="label">
        <!-- 编辑区域 -->
        <el-form-item :prop="prop" v-if="visible">
          <el-input
            v-if="fieldType === 'text' || fieldType === 'textarea'"
            :type="fieldType"
            autosize
            v-model="formModel.editValue"
            autocomplete="off"
          />
          <el-radio-group
            v-else-if="fieldType === 'radio'"
            v-model="formModel.editValue"
          >
            <el-radio v-for="item in options" :key="item" :label="item">{{
              item
            }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 展示区域 -->
        <div class="preview" v-else>
          <span>{{ value }}</span>
          <i class="el-icon-edit" @click="handleEdit">修改</i>
        </div>
      </el-form-item>
      <el-form-item v-if="visible">
        <el-button type="primary" @click="handleConfirm">保存</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>
<script>
export default {
  name: 'EditableText',
  props: ['type', 'options', 'label', 'prop', 'value', 'confirm', 'rules'],
  data() {
    return {
      visible: false,
      formModel: {
        editValue: '',
      },
    };
  },
  computed: {
    formRules() {
      return {
        [this.prop]: this.rules,
      };
    },
    fieldType() {
      return this.type || 'text';
    },
  },

  methods: {
    handleEdit() {
      this.formModel.editValue = this.value;
      this.visible = true;
    },
    handleConfirm() {
      this.$refs['editForm'].validate((valid) => {
        if (valid) {
          this.$emit('confirm', this.formModel.editValue);
          this.handleCancel();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
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
