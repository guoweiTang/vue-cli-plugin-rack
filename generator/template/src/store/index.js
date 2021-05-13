import { createStore } from 'vuex';
import { updateMyInfo, getMyInfo } from '../views/service';

export default createStore({
  state() {
    return {
      isScreen: false,
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
      return new Promise((resolve) => {
        getMyInfo(payload).then(({ data }) => {
          commit('setUserInfo', data);
          resolve(data);
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
  },
  modules: {},
});
