/*
 * @Description: 基础列表
 * @Author: tangguowei
 * @Date: 2021-09-16 16:50:00
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 18:07:49
 */
export default {
  namespaced: true,
  state: {
    // 当前商店
    currentStore: {},
  },
  getters: {
    currentStoreName(state) {
      return state.currentStore ? state.currentStore.name : null;
    },
  },
  mutations: {
    setCurrentStore(state, payload) {
      state.currentStore = payload;
    },
  },
};
