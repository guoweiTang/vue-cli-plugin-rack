import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home';
import Login from '../views/auth/login';
import Register from '../views/auth/register';
import ResetPassword from '../views/auth/reset-password';
import BasicTable from '../views/table/basic-table';
import CardTable from '../views/table/card-table';
import UserInfo from '../views/account';
import Authorzation from '../views/account/authorzation';
import AppAside from '@/components/app-aside';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { ElLoading } from 'element-plus';
import { getToken } from '@/utils/token';
import Layout from '@/App.vue';
import store from '@/store';

const commonComponents = {
  AppHeader,
  AppAside,
  AppFooter,
};
export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-home',
    },
    components: {
      ...commonComponents,
      default: Home,
    },
  },
  {
    hidden: true,
    path: '/auth',
    name: 'Auth',
    meta: {
      title: '账户认证',
    },
    component: Layout,
    redirect: {
      name: 'Login',
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: {
          title: '登录',
        },
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        meta: {
          title: '注册',
        },
        component: Register,
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        meta: {
          title: '重置密码',
        },
        component: ResetPassword,
      },
    ],
  },
  {
    path: '/table',
    name: 'Table',
    meta: {
      title: '列表',
      icon: 'el-icon-s-grid',
      auth: true,
    },
    component: Layout,
    redirect: {
      name: 'BasicTable',
    },
    children: [
      {
        path: 'basic-table',
        name: 'BasicTable',
        meta: {
          title: '基础列表',
        },
        components: {
          ...commonComponents,
          default: BasicTable,
        },
      },
      {
        path: 'card-table',
        name: 'CardTable',
        meta: {
          title: '卡片列表',
        },
        components: {
          ...commonComponents,
          default: CardTable,
        },
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    meta: {
      title: '个人账户',
      icon: 'el-icon-user-solid',
      auth: true,
    },
    component: Layout,
    redirect: {
      name: 'UserInfo',
    },
    children: [
      {
        path: 'authorzation',
        name: 'Authorzation',
        meta: {
          title: '用户权限',
          icon: 'el-icon-lock',
        },
        components: {
          ...commonComponents,
          default: Authorzation,
        },
      },
      {
        hidden: true,
        path: 'userinfo',
        name: 'UserInfo',
        meta: {
          title: '我的账户',
          auth: ['普通用户'],
        },
        components: {
          ...commonComponents,
          default: UserInfo,
        },
      },
    ],
  },
  {
    hidden: true,
    path: '/403',
    name: '403',
    meta: {
      title: '403',
    },
    component: () => import('../views/error/403'),
  },
  {
    hidden: true,
    path: '/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('../views/error/404'),
  },
  {
    hidden: true,
    path: '/500',
    name: '500',
    meta: {
      title: '500',
    },
    component: () => import('../views/error/500'),
  },
  // 未匹配到路由的缺省设置必须放在最后
  {
    hidden: true,
    path: '/:catchAll(.*)',
    name: 'NotFound',
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
  const { accessToken: token } = getToken();
  if (token) {
    if (to.name === 'Login') {
      // 如果登录状态 禁止进入登录页
      next({
        name: 'Home',
      });
    } else if (
      to.matched.some(
        (_) =>
          _.meta.auth &&
          Object.prototype.toString.call(_.meta.auth) === '[object Array]'
      )
    ) {
      // 需要身份校验
      let canVisit;
      let currentRole = store.state.userInfo.role;
      if (!currentRole) {
        const data = await store.dispatch('getUserInfo');
        currentRole = data.role;
      }
      for (let {
        meta: { auth },
      } of to.matched.reverse()) {
        if (Object.prototype.toString.call(auth) === '[object Array]') {
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
        name: 'Login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // 不需要身份校验 直接通过
      next();
    }
  }
});

router.afterEach((to) => {
  loadingInstance.close();
  // 更改标题
  window.document.title = to.meta.title;
});

export default router;
