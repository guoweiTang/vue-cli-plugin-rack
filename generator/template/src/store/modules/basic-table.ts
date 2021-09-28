/*
 * @Description: 基础列表
 * @Author: tangguowei
 * @Date: 2021-09-16 16:50:00
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-26 18:08:59
 */
import { BasicData, CurrentStoreItem } from './data.d';

export default {
  namespaced: true,
  state: {
    // 当前商店
    currentStore: {},
  },
  getters: {
    currentStoreName(state: BasicData):string | undefined {
      return state.currentStore.name;
    },
  },
  mutations: {
    setCurrentStore(state: BasicData, payload: CurrentStoreItem):void {
      state.currentStore = payload;
    },
  },
};
