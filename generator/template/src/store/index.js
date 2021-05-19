import { createStore } from 'vuex';
import { updateMyInfo, getMyInfo } from '../views/service';

export default createStore({
  state() {
    return {
      // 是否全屏显示，隐藏标准文档（利用teleport显示期待的内容）
      isScreen: false,
      // 认证通过的信息
      permission: {
        // 路由
        router: [],
        // 当前激活路由
        activeRoute: {},
      },
      // 登录用户信息
      userInfo: {
        name: '',
        gender: '',
        summary: '',
        description: '',
        role: '',
      },
    };
  },
  actions: {
    async getUserInfo({ commit }, payload = {}) {
      return new Promise((resolve, reject) => {
        getMyInfo(payload)
          .then(({ data }) => {
            commit('setUserInfo', data);
            resolve(data);
          })
          .catch((e) => {
            console.log('cuowu');
            reject(e);
          });
      });
    },
    async setUserInfo({ commit }, payload = {}) {
      updateMyInfo(payload).then(() => {
        commit('setUserInfo', payload);

        // TODO: 用户权限更改后需要刷新页面判断当前页面是否有权限访问
        if (payload.role) {
          new Promise((resolve) => resolve()).then(() => {
            console.log('页面刷新');
            window.location.reload();
          });
        }
      });
    },
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = {
        ...state.userInfo,
        ...payload,
      };
    },
    setIsScreen(state, payload) {
      state.isScreen = payload;
    },
    setActiveRoute(state, payload) {
      state.permission.activeRoute = payload;
    },
    setPermissionRouter(state, payload) {
      state.permission.router = payload;
    },
  },
  modules: {},
});
