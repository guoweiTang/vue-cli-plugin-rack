/*
 * @Description: 统一状态管理
 * @Author: tangguowei
 * @Date: 2021-05-19 18:24:20
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 15:36:46
 */
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const modules = {};

let files = require.context('./modules', false, /\.js$/);
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});
files = require.context('./admin', false, /\.js$/);
modules['admin'] = {
  namespaced: true,
  modules: {},
};
files.keys().forEach((key) => {
  modules.admin.modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

const store = createStore({
  modules,
  plugins: [
    createPersistedState({
      reducer(val) {
        return {
          // 只有该模块数据持久化（浏览器localstorage）
          admin: val.admin,
        };
      },
    }),
  ],
});

export default store;
