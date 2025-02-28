import request from '@/api/server/requestMock';
import type { BaseResult } from '@/types/request';

export const user = () => {
  return request<any, BaseResult<any>>({ url: '/users', method: 'get' });
};
