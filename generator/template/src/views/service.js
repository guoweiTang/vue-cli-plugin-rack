import request from '../utils/request';

/**
 * auth相关接口
 */
export function getToken(data) {
  return request()('/auth/login', {
    skipAuthRefresh: true,
    method: 'POST',
    data: {
      ...data,
    },
  });
}
export function register(data) {
  return request()('/auth/register', {
    skipAuthRefresh: true,
    method: 'POST',
    data,
  });
}
export function resetPassword(data) {
  return request()('/auth/reset-password', {
    skipAuthRefresh: true,
    method: 'POST',
    data: {
      ...data,
    },
  });
}

/**
 * service相关接口
 */
export function getAllServices(params = {}) {
  return request()('/svc', {
    params,
  });
}
export function addService(params = {}) {
  return request()('/svc', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function updateService(pathParams, params = {}) {
  const { serviceId } = pathParams;
  return request()(`/svc/${serviceId}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export function deleteService(pathParams, params = {}) {
  const { serviceId } = pathParams;
  return request()(`/svc/${serviceId}`, {
    method: 'DELETE',
    data: {
      ...params,
    },
  });
}

export function getMyInfo(params = {}) {
  return request()(`/userinfo`, {
    data: {
      ...params,
    },
  });
}

export function updateMyInfo(params = {}) {
  return request()(`/userinfo`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}
export function getGoods(pathParams, params = {}) {
  const { storeId } = pathParams;
  return request()(`/goods/${storeId}`, {
    params,
  });
}
export function getStores(params = {}) {
  return request()('/stores', {
    params,
  });
}
