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

const commonComponents = {
  AppHeader,
  AppAside,
  AppFooter,
};
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      ...commonComponents,
      default: Home,
    },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/auth/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/table/basic-table',
    name: 'BasicTable',
    components: {
      ...commonComponents,
      default: BasicTable,
    },
  },
  {
    path: '/table/card-table',
    name: 'CardTable',
    components: {
      ...commonComponents,
      default: CardTable,
    },
  },
  {
    path: '/account/userinfo',
    name: 'UserInfo',
    components: {
      ...commonComponents,
      default: UserInfo,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
