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
