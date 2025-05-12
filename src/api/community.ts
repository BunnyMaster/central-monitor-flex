import request from '@/api/server/request';

/* 社区统计 */
export const getCommunityStatistics = () => {
  return request.get('community-statistics');
};
