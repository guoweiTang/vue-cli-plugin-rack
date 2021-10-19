<!--
 * @Description: 个人详细信息
 * @Author: tangguowei
 * @Date: 2021-05-19 19:44:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 16:21:48
-->
<template>
  <el-card>
    <el-alert
      :closable="false"
      title="该页面只有普通用户能看到"
      style="margin-bottom: 20px"
      type="warning"
    >
    </el-alert>
    <el-upload
      class="avatar-uploader"
      action="#"
      :show-file-list="false"
      :on-change="handleAvatarChange"
      :auto-upload="false"
    >
      <el-image
        class="avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
      >
        <template #error>
          <div class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </template>
      </el-image>
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <editable-text
      label="用户名"
      :value="userInfo.name"
      :rules="rulesOfCommon"
      @confirm="handleConfirmName"
    />
    <editable-text
      type="radio"
      :options="[
        { label: '管理员', value: '管理员' },
        { label: '普通用户', value: '普通用户' },
      ]"
      label="你的权限"
      :value="userInfo.role"
      @confirm="handleConfirmRole"
    />
    <editable-text
      type="radio"
      :options="[
        { label: '男', value: '男' },
        { label: '女', value: '女' },
      ]"
      label="性别"
      :value="userInfo.gender"
      @confirm="handleConfirmGender"
    />
    <editable-text
      label="一句话介绍"
      :value="userInfo.summary"
      :rules="rulesOfCommon"
      @confirm="handleConfirmSummary"
    />
    <editable-text
      type="textarea"
      label="个人简介"
      :value="userInfo.description"
      :rules="rulesOfCommon"
      @confirm="handleConfirmDescription"
    />
  </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EditableText from '@/components/editable-text';
import { uploadFile } from '@/views/service';

export default {
  components: {
    EditableText,
  },
  data() {
    return {
      rulesOfCommon: [
        { required: true, message: '内容不能为空', trigger: 'blur' },
      ],
    };
  },
  computed: {
    ...mapState('admin/user', ['userInfo']),
  },
  methods: {
    ...mapActions('admin/user', ['setUserInfo']),
    // 图片上传
    async handleAvatarChange({ size, raw: file }) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是JPG或PNG格式!');
      } else if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      } else {
        const {
          data: { avatarUrl },
        } = await uploadFile({
          router: this.$router,
          data: {
            file,
          },
        });
        this.$store.commit('admin/user/setUserInfo', {
          avatarUrl,
        });
        this.$message.success('上传成功');
      }
    },
    handleConfirmName(value) {
      this.$store.dispatch('admin/user/setUserInfo', {
        name: value,
      });
    },
    handleConfirmRole(value) {
      this.$store.dispatch('admin/user/setUserInfo', {
        role: value,
      });
    },
    handleConfirmSummary(value) {
      this.$store.dispatch('admin/user/setUserInfo', {
        summary: value,
      });
    },
    handleConfirmGender(value) {
      this.$store.dispatch('admin/user/setUserInfo', {
        gender: value,
      });
    },
    handleConfirmDescription(value) {
      this.$store.dispatch('admin/user/setUserInfo', {
        description: value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader {
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
    .image-slot {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #f5f7fa;
      font-size: 30px;
    }
  }
}
</style>
<style lang="scss">
.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
  }
}
</style>
