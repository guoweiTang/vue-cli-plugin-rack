/*
 * @Description: 路由配置文件
 * @Author: tangguowei
 * @Date: 2021-09-27 17:52:49
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-28 14:04:43
 */
import { h } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '403',
      isScreen: true,
    },
    component: () => import('../views/error/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      isScreen: true,
    },
    component: () => import('../views/error/404.vue'),
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '500',
      isScreen: true,
    },
    component: () => import('../views/error/500.vue'),
  },
  // 刷新路由
  {
    path: '/refresh',
    name: 'refresh',
    meta: {
      title: '页面刷新',
    },
    component: {
      beforeRouteEnter(to, from, next) {
        next((instance) => instance.$router.replace({ name: from.name || undefined }));
      },
      render: () => h('div', ''),
    },
  },
  // 未匹配到路由的缺省设置必须放在最后
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    meta: { title: '未找到页面' },
    redirect: { name: '404' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
  // 更新当前活跃路由
  store.commit('admin/common/setActiveRoute', to);
});
router.afterEach((to) => {
  // 更改标题
  window.document.title = (to.meta.title as string) || process.env.VUE_APP_TITLE;
});

export default router;
