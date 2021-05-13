import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home';
import Login from '../views/auth/login';
import Register from '../views/auth/register';
import ResetPassword from '../views/auth/reset-password';
import BasicTable from '../views/table/basic-table';
import CardTable from '../views/table/card-table';
import UserInfo from '../views/account';
import AppAside from '@/components/app-aside';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { ElLoading } from 'element-plus';
import { getToken } from '@/utils/token';
import Layout from '@/App.vue';

const commonComponents = {
  AppHeader,
  AppAside,
  AppFooter,
};
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'vue-rack',
    },
    components: {
      ...commonComponents,
      default: Home,
    },
  },
  {
    path: '/auth',
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
          auth: true,
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
          auth: true,
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
    component: Layout,
    redirect: {
      name: 'UserInfo',
    },
    children: [
      {
        path: 'userinfo',
        name: 'UserInfo',
        meta: {
          title: '我的账户',
          auth: ['user'],
        },
        components: {
          ...commonComponents,
          default: UserInfo,
        },
      },
    ],
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '403',
    },
    component: () => import('../views/error/403'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('../views/error/404'),
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: '500',
    },
    component: () => import('../views/error/500'),
  },
  // 未匹配到路由的缺省设置必须放在最后
  { path: '/:catchAll(.*)', name: 'NotFound', redirect: { name: '404' } },
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
  // 如果登录状态 禁止进入登录页
  if (to.name === 'Login' && token) {
    next({
      name: 'Home',
    });
  } else if (to.matched.some((_) => _.meta.auth)) {
    if (token) {
      next();
    } else {
      // 没有登录的时候跳转到登录界面，携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    // 不需要身份校验 直接通过
    next();
  }
});

router.afterEach((to) => {
  loadingInstance.close();
  // 更改标题
  window.document.title = to.meta.title;
});

export default router;
