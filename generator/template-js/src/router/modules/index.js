/*
 * @Description: 业务路由
 * @Author: tangguowei
 * @Date: 2021-10-13 16:51:37
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-08 15:32:26
 */
import Home from '@/views/home/index.vue';
import UserInfo from '@/views/account/index.vue';
import Authorzation from '@/views/account/authorzation.vue';
import BasicTable from '@/views/table/basic-table.vue';
import Layout from '@/layouts/basic-layout.vue';

const mainRoutes = [
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
    path: '/table',
    name: 'table',
    meta: {
      title: '列表',
      icon: 'el-icon-s-grid',
      auth: true,
    },
    component: Layout,
    redirect: {
      name: 'basicTable',
    },
    children: [
      {
        path: 'basic-table',
        name: 'basicTable',
        meta: {
          title: '基础列表',
        },
        component: BasicTable,
      },
    ],
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
