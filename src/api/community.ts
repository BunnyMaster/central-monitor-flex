import request from '@/api/server/requestMock';

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
export const getCommunityDeicesStatus = () => {
  return request.get('/community/devices-status');
};

/* 数据统计 */
export const getDataStatistics = () => {
  return request.get('community/data-statistics');
};

/* 右侧底部服务项目 */
export const getServerProject = () => {
  return request.get('community/server-project');
};
