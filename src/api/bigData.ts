import request from '@/api/server/requestMock';

/* 规模效益 */
export const getScaleProfit = (data: any) => {
  return request.get('big-data/scale-benfit', { params: data });
};

/* 规模效益 */
export const getYearIncome = () => {
  return request.get('big-data/year-income');
};

/* 园区规划 */
export const getParkPlan = () => {
  return request.get('big-data/chart-plan');
};

/* 税收概览 */
export const getRevenueOverView = () => {
  return request.get('big-data/revenue-overview');
};

/* 园区进出口额 */
export const getParkImportExportData = (params: any) => {
  return request.get('big-data/parks/import-export', { params });
};

/* 企业信息 */
export const getEnterpriseInfo = () => {
  return request.get('big-data/enterprise-info');
};

/* 园区规划 */
export const getParkAreas = () => {
  return request.get('big-data/parks/areas');
};
