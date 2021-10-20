import axios from 'axios';
import { ElMessage as Message } from 'element-plus';
import axiosRetry from 'axios-retry';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { initToken, refreshToken } from './token';
import { apiBaseURL } from '@/config';

const aiosInstance = axios.create({
  baseURL: apiBaseURL,
  timeout: 10 * 1000,
  withCredentials: false,
});

function getTipsText(method = '') {
  let tipsText = '';
  switch (method) {
    case 'put':
    case 'patch':
      tipsText = '更新';
      break;
    case 'delete':
      tipsText = '删除';
      break;
    default:
  }
  return tipsText;
}

let loadingMessage;
/**
 * 请求拦截
 *
 * config扩展了以下属性：
 *  skipAuthRefresh: boolean, // 是否跳过登录验证
 *  [postType]: 'file', // post类型，默认为空，“file”为文件以流形式上传
 */
aiosInstance.interceptors.request.use(
  (config) => {
    // 非get,post请求错误处理
    let tipsText = getTipsText(config.method);
    if (tipsText) {
      loadingMessage = Message({
        message: `正在${tipsText}`,
        iconClass: 'el-icon-loading',
      });
    }

    config.headers['content-type'] = 'application/json';
    // 防止缓存，GET请求默认带_t参数
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...{ _t: new Date().getTime() },
      };
    } else if (config.method === 'post' && config.postType === 'file') {
      config.headers['content-type'] = 'multipart/form-data';
      let data = new FormData();
      for (let [key, value] of Object.entries(config.data)) {
        data.append(key, value);
      }
      config.data = data;
    }
    if (!config.skipAuthRefresh) {
      initToken(config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
aiosInstance.interceptors.response.use(
  (response) => {
    // 非get请求错误处理
    let tipsText = getTipsText(response.config.method);
    if (tipsText) {
      loadingMessage.close();
      if (response.status === 200) {
        Message.success(`${tipsText}成功`);
      } else {
        Message.error(`${tipsText}失败请重试！`);
      }
    }

    return response;
  },
  (error) => {
    const { response, request, message, config } = error;
    // 非get,post请求错误处理
    let tipsText = getTipsText(config.method);
    if (tipsText) {
      loadingMessage.close();
      if (!response || response.status === 400 || response.status === 403) {
        Message.error(`${tipsText}失败请重试！`);
      }
    }

    if (response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, headers, data } = response;
      // token过期重新登录
      switch (status) {
        case 400:
        case 403:
          Message.error(data.message);
          break;
        case 422:
          console.error('参数校验失败');
          break;
        default:
      }
      if (status >= 500) {
        console.error('服务器错误');
      }
      console.log(headers);
    } else if (request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error('请求错误');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', message);
    }
    return Promise.reject(error);
  }
);

// 无痛刷新token（默认状态码401为授权失败）
createAuthRefreshInterceptor(aiosInstance, refreshToken);

// 接口失败重试(默认状态码为5XX重试)
axiosRetry(aiosInstance, {
  retries: 2,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
  retryCondition: (axiosError) => {
    const { response } = axiosError;
    if (response && response.status >= 500) {
      return true;
    }
  },
});
export default aiosInstance;
