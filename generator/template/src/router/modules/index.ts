/*
 * @Description: 业务路由
 * @Author: tangguowei
 * @Date: 2021-10-13 16:51:37
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-13 17:10:03
 */
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import UserInfo from '@/views/account/index.vue';
import Authorzation from '@/views/account/authorzation.vue';
import Layout from '@/layouts/basic-layout.vue';

const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      auth: true,
      title: '首页',
      icon: 'el-icon-s-home',
    },
    component: Home,
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      title: '个人账户',
      icon: 'el-icon-user-solid',
      auth: true,
    },
    component: Layout,
    redirect: {
      name: 'userInfo',
    },
    children: [
      {
        path: 'authorzation',
        name: 'authorzation',
        meta: {
          title: '用户权限',
          icon: 'el-icon-lock',
        },
        component: Authorzation,
      },
      {
        path: 'userinfo',
        name: 'userInfo',
        meta: {
          hidden: true,
          auth: ['普通用户'],
          title: '我的账户',
        },
        component: UserInfo,
      },
    ],
  },
];
export default mainRoutes;
