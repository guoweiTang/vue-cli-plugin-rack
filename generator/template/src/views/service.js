/*
 * @Description: 接口文件
 * @Author: tangguowei
 * @Date: 2021-06-10 08:42:53
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-08-26 14:27:17
 */
import axiosInstance from '../utils/request';

/**
 * auth相关接口
 */
const baseDir = '/api';
export function getToken(config = {}) {
  return axiosInstance(`${baseDir}/auth/login`, {
    method: 'POST',
    skipAuthRefresh: true,
    ...config,
  });
}
export function register(config = {}) {
  return axiosInstance(`${baseDir}/auth/register`, {
    method: 'POST',
    skipAuthRefresh: true,
    ...config,
  });
}
export function resetPassword(config = {}) {
  return axiosInstance(`${baseDir}/auth/reset-password`, {
    method: 'POST',
    skipAuthRefresh: true,
    ...config,
  });
}

/**
 * service相关接口
 */
export function getAllServices(config = {}) {
  return axiosInstance(`${baseDir}/services`, config);
}

export function updateService(pathParams, config = {}) {
  const { serviceId } = pathParams;
  return axiosInstance(`${baseDir}/services/${serviceId}`, {
    method: 'PUT',
    ...config,
  });
}

export function deleteService(pathParams, config = {}) {
  const { serviceId } = pathParams;
  return axiosInstance(`${baseDir}/services/${serviceId}`, {
    method: 'DELETE',
    ...config,
  });
}

export function getMyInfo(config = {}) {
  return axiosInstance(`${baseDir}/account/userinfo`, config);
}

export function updateMyInfo(config = {}) {
  return axiosInstance(`${baseDir}/account/userinfo`, {
    method: 'PUT',
    ...config,
  });
}
export function getGoods(pathParams, config = {}) {
  const { storeId } = pathParams;
  return axiosInstance(`${baseDir}/stores/${storeId}/goods`, config);
}
export function getStores(config = {}) {
  return axiosInstance(`${baseDir}/stores`, config);
}
