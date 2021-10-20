/*
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-09-24 15:09:43
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-24 15:26:26
 */
import { Module } from 'vuex';
import { UserData } from './admin/data.d';

export interface AdminStore {
  user: Module<UserData, unknown>;
}
export interface RootState {
  admin: {
    user: UserData;
    common: CommonData;
  }
}
