import request from '@/api/server/request';

/* 设备总数 */
export const getCommunityDevicesAmount = () => {
  return request.get('community/devices-amount');
};

export const getAlarmsOverview = () => {
  return request.get('community/alarms-overview');
};

/* 社区统计 */
export const getCommunityStatistics = () => {
  return request.get('community/community-statistics');
};

/* 设备运行状态 */
export const getCommityDeicesStatus = () => {
  return request.get('/community/devices-status');
};
