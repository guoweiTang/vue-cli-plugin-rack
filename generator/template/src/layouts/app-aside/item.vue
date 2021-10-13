<!--
 * @Description: 侧边栏菜单项
 * @Author: tangguowei
 * @Date: 2021-05-19 10:57:36
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-13 15:16:48
-->
<template>
  <template v-if="isShowing">
    <el-menu-item
      v-if="!item.children || !item.children.length"
      :index="item.name"
      :route="{ name: item.name }"
    >
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else class="no-drop-down" :index="item.name">
      <template #title>
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem
        v-for="(child, index) of item.children"
        :key="index"
        :item="child"
      />
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Options, Vue } from 'vue-class-component';
import { RouteRecordRaw, RouteMeta } from 'vue-router';
import { UserInfo } from '@/store/admin/data.d';

@Options({
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: mapState('admin/user', ['userInfo']),
})
export default class extends Vue {
  private item!: RouteRecordRaw

  userInfo!: UserInfo

  get isShowing() {
    const meta = this.item.meta as RouteMeta;
    const { auth, hidden } = meta;
    const { role } = this.userInfo;
    const isArray = Array.isArray(auth);
    return (
      !hidden
      && (!auth
        || (role
          && ((isArray && (auth as Array<string>).includes(role)) || auth === true)))
    );
  }
}
</script>
