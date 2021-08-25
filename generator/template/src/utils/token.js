/*
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-08-19 15:47:29
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-08-25 15:07:29
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
  const { accessToken: ACCESS_TOKEN } = getToken();
  if (ACCESS_TOKEN) {
    config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
  } else {
    clearToken();
  }
}

/**
 * 刷新token，更新localstorage数据
 *
 * @returns 返回一个Promise对象
 */
export function refreshToken(failedRequest) {
  const { reToken: REFRESH_TOKEN } = getToken();
  if (!REFRESH_TOKEN) {
    clearToken();
  }
  return axios(`${apiBaseURL}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REFRESH_TOKEN}`,
    },
  }).then(({ data }) => {
    const { access_token } = data;
    access_token && localStorage.setItem('ACCESS_TOKEN_USER', access_token);
    failedRequest.response.config.headers['Authorization'] =
      'Bearer ' + access_token;
    return Promise.resolve();
  });
}
/**
 * 登录设置token
 * @param accessToken
 * @param reToken
 */
export function setToken(accessToken, reToken) {
  localStorage.setItem('ACCESS_TOKEN_USER', accessToken);
  localStorage.setItem('REFRESH_TOKEN_USER', reToken);
}
/**
 * 获取token
 *  @returns {accessToken, reToken}
 */
export function getToken() {
  return {
    accessToken: localStorage.getItem('ACCESS_TOKEN_USER'),
    reToken: localStorage.getItem('REFRESH_TOKEN_USER'),
  };
}
/**
 * 清除token，并重新登陆
 */
export function clearToken() {
  localStorage.removeItem('ACCESS_TOKEN_USER');
  localStorage.removeItem('REFRESH_TOKEN_USER');
  store.commit('clearUserInfo');
}
