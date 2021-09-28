/*
 * @Description: 接口文件
 * @Author: tangguowei
 * @Date: 2021-06-10 08:42:53
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-23 16:44:41
 */
import axiosInstance from '@/utils/request';

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

export function updateService(pathParams: { serviceId: string; }, config = {}) {
  const { serviceId } = pathParams;
  return axiosInstance(`${baseDir}/services/${serviceId}`, {
    method: 'PUT',
    ...config,
  });
}

export function deleteService(pathParams: { serviceId: string; }, config = {}) {
  const { serviceId } = pathParams;
  return axiosInstance(`${baseDir}/services/${serviceId}`, {
    method: 'DELETE',
    ...config,
  });
}

/**
 * 账户
 */
export function uploadFile(config = {}) {
  return axiosInstance(`${baseDir}/account/uploadAvatar`, {
    method: 'POST',
    postType: 'file',
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
export function getGoods(pathParams: { storeId: string; }, config = {}) {
  const { storeId } = pathParams;
  return axiosInstance(`${baseDir}/stores/${storeId}/goods`, config);
}
export function getGoodDetail(pathParams: { storeId: string; goodId: string; }, config = {}) {
  const { storeId, goodId } = pathParams;
  return axiosInstance(`${baseDir}/stores/${storeId}/goods/${goodId}`, config);
}
export function getStores(config = {}) {
  return axiosInstance(`${baseDir}/stores`, config);
}
