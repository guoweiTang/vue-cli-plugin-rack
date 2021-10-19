/*
 * @Description: 登录认证
 * @Author: tangguowei
 * @Date: 2021-08-19 15:47:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 16:19:30
 */
import axios from 'axios';
import { apiBaseURL } from '@/config';
import store from '@/store';

/**
 * 发送请求前判断token是否存在，是否需要重新登录
 *
 * @param {Object} config axios配置信息
 * @returns {Object} axios配置信息
 */
export async function initToken(config) {
  const ACCESS_TOKEN = store.state.admin.user.token.access_token;
  if (ACCESS_TOKEN) {
    config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
  } else {
    clearToken(config.router);
  }
}

/**
 * 刷新token，更新localstorage数据
 *
 * @returns 返回一个Promise对象
 */
export function refreshToken(failedRequest) {
  const REFRESH_TOKEN = store.state.admin.user.token.refresh_token;
  if (!REFRESH_TOKEN) {
    return clearToken(failedRequest.config.router);
  }
  return axios(`${apiBaseURL}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REFRESH_TOKEN}`,
    },
  }).then(({ data }) => {
    const { access_token } = data;
    store.commit('admin/user/setToken', { access_token });
    failedRequest.response.config.headers['Authorization'] =
      'Bearer ' + access_token;
    return Promise.resolve();
  });
}

/**
 * 清除token，并重新登陆
 */
export function clearToken(router) {
  store.commit('admin/user/clearToken');
  store.commit('admin/user/clearUserInfo');
  router && router.push({ name: 'refresh' });
}
