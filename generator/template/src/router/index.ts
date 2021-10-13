/*
 * @Description: 路由配置文件
 * @Author: tangguowei
 * @Date: 2021-09-27 17:52:49
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-13 17:08:54
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { ElLoading, ILoadingInstance } from 'element-plus';
import store from '@/store';
import commonRoutes from './modules/common';
import authRoutes from './modules/auth';
import mainRoutes from './modules/index';

export const routes: Array<RouteRecordRaw> = [
  ...mainRoutes,
  ...authRoutes,
  ...commonRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

let loadingInstance: ILoadingInstance;
router.beforeEach(async (to, from, next) => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    text: '精彩内容即将呈现……',
  });
  // 判断是否全屏显示该路由（通常都是登录，注册，404等页面）
  const isScreen = to.matched.some((item) => item.meta.isScreen);
  store.commit('admin/common/setIsScreen', isScreen);

  const { token, userInfo } = store.state.admin.user;
  if (token.accessToken) {
    // 当前用户角色
    let currentRole = userInfo.role;
    // 若路由需登录，获取用户信息
    if (!currentRole && to.matched.some((_) => _.meta.auth)) {
      try {
        const data = await store.dispatch('admin/user/getUserInfo');
        currentRole = data.role;
      } catch (e) {
        if ((e as any).response.status === 500) {
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
      for (const {
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
      // 不需要登录角色校验 直接通过
      next();
    }
  } else if (to.matched.some((_) => _.meta.auth)) {
    // 携带上需校验登录的页面URL跳转至登录界面
    next({
      name: 'login',
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    // 不需要是否登录校验 直接通过
    next();
  }
  // 更新当前活跃路由
  store.commit('admin/common/setActiveRoute', to);
});
router.afterEach((to) => {
  loadingInstance.close();
  // 更改标题
  window.document.title = (to.meta.title as string) || process.env.VUE_APP_TITLE;
});

export default router;
