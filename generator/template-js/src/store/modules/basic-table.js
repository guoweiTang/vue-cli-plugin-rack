/*
 * @Description: 基础列表
 * @Author: tangguowei
 * @Date: 2021-09-16 16:50:00
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-08 15:35:59
 */

export default {
  namespaced: true,
  state: {
    // 总计
    totalCount: 0,
  },
  mutations: {
    setTotalCount(state, payload) {
      state.totalCount = payload;
    },
  },
};
