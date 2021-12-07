<!--
 * @Description: 重置密码
 * @Author: tangguowei
 * @Date: 2021-05-19 19:44:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-07 10:44:26
-->
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { emailPattern } from '@/config';
import { resetPassword } from '@/views/service';

const router = useRouter();
const loading = ref(false);
const formData = reactive({
  email: '',
  oldPassword: '',
  newPassword: '',
});
const validEmail = (rule: any, value: string, callback: (arg0?: Error) => void) => {
  if (!emailPattern.test(value)) {
    callback(new Error('请输入正确的邮箱'));
  } else {
    callback();
  }
};
const validNewPassword = (rule: any, value: string, callback: (arg0?: Error) => void) => {
  if (value === formData.oldPassword) {
    callback(new Error('新密码不能与旧密码相同'));
  } else {
    callback();
  }
};
const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { validator: validEmail, trigger: 'blur' },
  ],
  oldPassword: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 3, message: '原密码至少为3个字符', trigger: 'blur' },
  ],
  newPassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 3, message: '新密码至少为3个字符', trigger: 'blur' },
    { validator: validNewPassword, trigger: 'blur' },
  ],
};
const ruleForm = ref();
const submitForm = async () => {
  ruleForm.value.validate((valid: any) => {
    if (valid) {
      loading.value = true;
      resetPassword({ router, data: formData })
        .then(() => {
          loading.value = false;
          ElMessage.success({
            duration: 1000,
            message: '密码重置成功，请重新登录',
            onClose: () => {
              router.push({
                name: 'login',
              });
            },
          });
        })
        .catch((e: any) => {
          loading.value = false;
          console.error(e);
        });
    } else {
      console.log('error submit!!');
    }
  });
};
</script>
<template>
  <div class="auth">
    <div class="modal-box">
      <div class="modal-header">
        <dl class="auth-logo">
          <dt>
            <img
              src="../../assets/logo.png"
              alt="logo"
              width="34"
              height="34"
            />
          </dt>
          <dd>VUE RACK</dd>
        </dl>
        <h2>重置密码</h2>
      </div>
      <el-form
        label-position="top"
        :model="formData"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        @keyup.enter="submitForm"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model.trim="formData.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input
            show-password
            type="password"
            v-model="formData.oldPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            show-password
            type="password"
            v-model="formData.newPassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            @click="submitForm"
            >保存</el-button
          >
        </el-form-item>
        <div class="no-acoout">
          已有账户？<router-link :to="{ name: 'login' }"
            ><el-link type="primary" :underline="false"
              >去登录</el-link
            ></router-link
          >
        </div>
      </el-form>
    </div>
  </div>
</template>
