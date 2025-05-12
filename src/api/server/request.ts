import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import qs from 'qs';

import { TOKEN_KEY } from '@/enums/CacheEnum';

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem(TOKEN_KEY);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 检查配置的响应类型是否为二进制类型（'blob' 或 'arraybuffer'）, 如果是，直接返回响应对象
    if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer') {
      return response;
    }
    const { code, data, message } = response.data;
    if (code === 200) {
      return data;
    }

    if (response.status === 200) {
      return response.data;
    }

    // ElMessage.error(msg || '系统出错');
    return Promise.reject(message || 'Error');
  },
  (error: any) => {
    // 异常处理
    if (error.response.data) {
      // const { code, message } = error.response.data;
      // if (code === ResultEnum.TOKEN_INVALID) {
      // ElNotification({
      //   title: '提示',
      //   message: '您的会话已过期，请重新登录',
      //   type: 'info',
      // });
      // } else {
      // ElMessage.error(msg || '系统出错');
      // }
    }
    return Promise.reject(error.message);
  }
);

// 导出 axios 实例
export default service;
