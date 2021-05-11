import { createStore } from 'vuex';
import { updateMyInfo } from '../views/service';

export default createStore({
  state() {
    return {
      isScreen: false,
      userInfo: {
        name: '',
        gender: '',
        summary: '',
        description: '',
      },
    };
  },
  actions: {
    setUserInfo({ commit }, payload = {}) {
      updateMyInfo(payload).then(() => {
        commit('setUserInfo', payload);
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
