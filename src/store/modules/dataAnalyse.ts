import { defineStore } from 'pinia';

import {
  getBrandsDistribution,
  getCompanySalesDistribution,
  getDataShow,
  getDeviceSalesStats,
  getRegionSalesRatio,
} from '@/api/dataAnalyse';

import { store } from '..';

export const useDataAnalyseStore = defineStore('dataAnalyseStore', {
  state: () => ({
    // 销售设备总量
    deviceSalesStats: {
      totalDeviceSales: 0,
      yearlyGrowthRate: 0,
    },
    // 销售公司销售设备数量占比
    companySalesDistribution: [],
    // 品牌占有率
    brandsDistribution: [],
    // 数据展示
    dataShow: [],
    // 销售设备数量区域占比
    regionSalesRatio: [],
  }),
  actions: {
    /* 销售设备总量 */
    async fetchDeviceSalesStats() {
      this.deviceSalesStats = await getDeviceSalesStats();
    },

    /* 销售公司销售设备数量占比 */
    async fetchCompanySalesDistribution() {
      this.companySalesDistribution = await getCompanySalesDistribution();
    },

    /* 品牌占有率 */
    async fetchBrandsDistribution() {
      this.brandsDistribution = await getBrandsDistribution();
    },

    /* 数据展示 */
    async fetchDataShow() {
      this.dataShow = await getDataShow();
    },

    /* 销售设备数量区域占比 */
    async fetchRegionSalesRatio() {
      this.regionSalesRatio = await getRegionSalesRatio();
    },
  },
});

export function useDataAnalyseHook() {
  return useDataAnalyseStore(store);
}
