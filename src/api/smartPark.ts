import request from '@/api/server/requestMock';

/* 实时道路 */
export const getRoadStatus = () => {
  return request.get('/smart-park/road-status');
};

/* 车辆监控 */
export const getTollgateMonitoringData = () => {
  return request.get('smart-park/monitor');
};

/* 车流量概览 */
export const getTrafficStatistics = () => {
  return request.get('/smart-park/flow-rate');
};
