<template>
  <el-card class="userinfo" body-style="{minHeight: '100%'}">
    <editable-text
      label="用户名"
      prop="username"
      :value="userInfo.name"
      @confirm="handleConfirmName"
    />
    <editable-text
      type="radio"
      :options="['男', '女']"
      label="性别"
      prop="gender"
      :value="userInfo.gender"
      @confirm="handleConfirmGender"
    />
    <editable-text
      label="一句话介绍"
      prop="summary"
      :value="userInfo.summary"
      @confirm="handleConfirmSummary"
    />
    <editable-text
      type="textarea"
      label="个人简介"
      prop="description"
      :value="userInfo.description"
      @confirm="handleConfirmDescription"
    />
  </el-card>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import EditableText from '@/components/editable-text';
import { updateMyInfo } from '../service';

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
  computed: mapState(['userInfo']),
  methods: {
    ...mapMutations(['setUserInfo']),
    async handleConfirm(data) {
      let res;
      try {
        res = await updateMyInfo(data);
      } catch (e) {
        console.error(e);
      }
      if (res) {
        this.$store.commit('setUserInfo', data);
      }
    },
    handleConfirmName(value) {
      this.handleConfirm({
        name: value,
      });
    },
    handleConfirmSummary(value) {
      this.handleConfirm({
        summary: value,
      });
    },
    handleConfirmGender(value) {
      this.handleConfirm({
        gender: value,
      });
    },
    handleConfirmDescription(value) {
      this.handleConfirm({
        description: value,
      });
    },
  },
};
</script>

<style>
.userinfo {
  width: 60%;
  margin: 0 auto;
}
.userinfo .el-card {
  min-height: calc(100vh - 75px - 60px - 40px);
  padding: 30px 100px;
  box-sizing: border-box;
}
</style>
