import { createStore } from 'vuex';

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
  actions: {},
  modules: {},
});
