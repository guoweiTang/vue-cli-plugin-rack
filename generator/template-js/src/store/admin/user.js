/*
 * @Description: 账户信息
 * @Author: tangguowei
 * @Date: 2021-09-16 15:13:33
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-11-29 11:02:45
 */
import { updateMyInfo, getMyInfo } from '@/views/service';
import router from '@/router';

export default {
  namespaced: true,
  state: {
    token: {
      accessToken: '',
      refreshToken: '',
    },
    // 登录用户信息
    userInfo: {
      avatarUrl: '',
      name: '',
      gender: '',
      summary: '',
      description: '',
      role: '',
    },
  },
  actions: {
    async getUserInfo({ commit }, payload = {}) {
      return new Promise((resolve, reject) => {
        getMyInfo({ params: payload })
          .then(({ data }) => {
            commit('setUserInfo', data);
            resolve(data);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    async setUserInfo({ commit }, payload = {}) {
      updateMyInfo({ data: payload }).then(() => {
        commit('setUserInfo', payload);

        if (payload.role) {
          router.push({ name: 'refresh' });
        }
      });
    },
  },
  mutations: {
    setToken(state, payload = {}) {
      state.token = {
        ...state.token,
        ...payload,
      };
    },
    clearToken(state) {
      state.token = {};
    },
    setUserInfo(state, payload = {}) {
      state.userInfo = {
        ...state.userInfo,
        ...payload,
      };
    },
    clearUserInfo(state) {
      state.userInfo = {};
    },
  },
};
