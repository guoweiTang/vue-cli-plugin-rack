/*
 * @Description: 登录认证
 * @Author: tangguowei
 * @Date: 2021-08-19 15:47:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-27 18:42:28
 */
import axios from 'axios';
import { Router } from 'vue-router';
import { apiBaseURL } from '@/config';
import store from '@/store';
import { AxiosRequestConfigCustom } from './data.d';
import { FreeObject } from '@/views/data.d';

/**
 * 清除token，并重新登陆
 */
export function clearToken(router: Router | undefined) {
  store.commit('admin/user/clearToken');
  store.commit('admin/user/clearUserInfo');
  if (router) {
    router.push({ name: 'refresh' });
  }
}

/**
 * 发送请求前判断token是否存在，是否需要重新登录
 *
 * @param {Object} config axios配置信息
 * @returns {Object} axios配置信息
 */
export function initToken(config: AxiosRequestConfigCustom):string | undefined {
  const ACCESS_TOKEN = store.state.admin.user.token.accessToken;
  if (ACCESS_TOKEN) {
    return `Bearer ${ACCESS_TOKEN}`;
  }
  clearToken(config.router);
  return undefined;
}

/**
 * 刷新token，更新localstorage数据
 *
 * @returns 返回一个Promise对象
 */
export function refreshToken(failedRequest: any) {
  const REFRESH_TOKEN = store.state.admin.user.token.refreshToken;
  if (!REFRESH_TOKEN) {
    clearToken(failedRequest.config.router);
    return Promise.reject(failedRequest);
  }
  return axios(`${apiBaseURL}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REFRESH_TOKEN}`,
    },
  }).then(({ data }: FreeObject) => {
    const { accessToken } = data;
    store.commit('admin/user/setToken', { accessToken });
    // eslint-disable-next-line
    failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`;
    return Promise.resolve();
  });
}
