import { defineStore } from 'pinia';

import {
  getBrandsDistribution,
  getCompanySalesDistribution,
  getDeviceSalesStats,
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
  }),
  actions: {
    /* 销售设备总量 */
    async fetchDeviceSaesStats() {
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
  },
});

export function useDataAnalyseHook() {
  return useDataAnalyseStore(store);
}
