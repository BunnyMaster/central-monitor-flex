import request from '@/api/server/requestMock';

/* 销售设备总量 */
export const getDeviceSalesStats = () => {
  return request.get('data-analyse/device-sales-stats');
};

/* 销售公司销售设备数量占比 */
export const getCompanySalesDistribution = () => {
  return request.get('data-analyse/company-sales-distribution');
};

/* 品牌占有率 */
export const getBrandsDistribution = () => {
  return request.get('data-analyse/brands-distribution');
};

/* 数据展示 */
export const getDataShow = () => {
  return request.get('data-analyse/data-show');
};

/* 销售设备数量区域占比 */
export const getRegionSalesRatio = () => {
  return request.get('data-analyse/region-sales-ratio');
};

/* 数据占有率 */
export const getDataRatio = () => {
  return request.get('data-analyse/data-ratio');
};

/* 数据分析展示 */
export const getDataAnalyse = () => {
  return request.get('data-analyse/data-analyse');
};

/* 数据展示统计 */
export const getDataShowStatistics = () => {
  return request.get('data-analyse/data-show-statistics');
};
