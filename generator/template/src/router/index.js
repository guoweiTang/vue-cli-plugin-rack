import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home';
import Login from '../views/auth/login';
import Register from '../views/auth/register';
import ResetPassword from '../views/auth/reset-password';
import BasicTable from '../views/table/basic-table';
import CardTable from '../views/table/card-table';
import UserInfo from '../views/account';
import Authorzation from '../views/account/authorzation';
import { ElLoading } from 'element-plus';
import Layout from '@/layouts/basic-layout';
import store from '@/store';
import { h } from 'vue';

/**
 *
 * hidden: true                   是否不出现在侧边栏导航
 * path: 'router-path'            路由路径
 * name:'router-name'             路由名称（必须设置）
 * meta : {
    isScreen: boolean            是否全屏显示（登录，注册，404等界面通常设置）
    auth: []/boolean             账户认证级别，可以传布尔值或者数组
    title: 'title'               标签页名称，侧边栏导航名称（必须设置）
    icon: 'el-icon-x'            侧边栏导航图标
  }
 */
export const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-home',
      auth: true,
    },
    component: Home,
  },
  {
    hidden: true,
    path: '/auth',
    name: 'auth',
    meta: {
      title: '账户认证',
      isScreen: true,
    },
    component: Layout,
    redirect: {
      name: 'login',
    },
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: '登录',
        },
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        meta: {
          title: '注册',
        },
        component: Register,
      },
      {
        path: 'reset-password',
        name: 'resetPassword',
        meta: {
          title: '重置密码',
        },
        component: ResetPassword,
      },
    ],
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
      {
        path: 'card-table',
        name: 'cardTable',
        meta: {
          title: '卡片列表',
          auth: ['管理员'],
        },
        component: CardTable,
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
        hidden: true,
        path: 'userinfo',
        name: 'userInfo',
        meta: {
          title: '我的账户',
          auth: ['普通用户'],
        },
        component: UserInfo,
      },
    ],
  },
  {
    hidden: true,
    path: '/403',
    name: '403',
    meta: {
      title: '403',
      isScreen: true,
    },
    component: () => import('../views/error/403'),
  },
  {
    hidden: true,
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      isScreen: true,
    },
    component: () => import('../views/error/404'),
  },
  {
    hidden: true,
    path: '/500',
    name: '500',
    meta: {
      title: '500',
      isScreen: true,
    },
    component: () => import('../views/error/500'),
  },
  // 刷新路由
  {
    hidden: true,
    path: '/refresh',
    name: 'refresh',
    meta: {
      title: '页面刷新',
    },
    component: {
      beforeRouteEnter(to, from, next) {
        next((instance) => instance.$router.replace({ name: from.name }));
      },
      render: () => h('div', ''),
    },
  },
  // 未匹配到路由的缺省设置必须放在最后
  {
    hidden: true,
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

let loadingInstance;
router.beforeEach(async (to, from, next) => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: '精彩内容即将呈现……',
  });
  // 判断是否全屏显示该路由（通常都是登录，注册，404等页面）
  const isScreen = to.matched.some((item) => item.meta.isScreen);
  if (isScreen !== store.state.isScreen) {
    store.commit('setIsScreen', isScreen);
  }
  if (store.state.token.access_token) {
    // 当前用户角色
    let currentRole = store.state.userInfo.role;
    // 未获取用户信息，获取用户信息
    if (!currentRole) {
      try {
        const data = await store.dispatch('getUserInfo');
        currentRole = data.role;
      } catch (e) {
        if (e.response.status === 500) {
          next({
            name: '500',
          });
        }
      }
    }

    if (to.name === 'login') {
      // 如果登录状态 禁止进入登录页
      next({
        name: 'home',
      });
    } else if (
      to.matched.some((_) => _.meta.auth && Array.isArray(_.meta.auth))
    ) {
      // 需要身份校验
      let canVisit;
      for (let {
        meta: { auth },
      } of to.matched.reverse()) {
        if (Array.isArray(auth)) {
          canVisit = auth.includes(currentRole);
          break;
        }
      }
      if (canVisit) {
        // 校验成功
        next();
      } else {
        // 校验失败
        next({
          name: '403',
        });
      }
    } else {
      // 不需要身份校验 直接通过
      next();
    }
  } else {
    if (to.matched.some((_) => _.meta.auth)) {
      // 携带上需校验登录的页面URL跳转至登录界面
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // 不需要身份校验 直接通过
      next();
    }
  }
  // 更新当前活跃路由
  store.commit('setActiveRoute', to);
});

router.afterEach((to) => {
  loadingInstance.close();
  // 更改标题
  window.document.title = to.meta.title;
});

export default router;
