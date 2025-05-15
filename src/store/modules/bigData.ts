import { defineStore } from 'pinia';

import {
  getEnterpriseInfo,
  getParkAreas,
  getParkImportExportData,
  getParkPlan,
  getRevenueOverView,
  getScaleProfit,
  getYearIncome,
} from '@/api/bigData';

export const useBigDataStore = defineStore('bidDataStore', {
  state: () => ({
    // 规模效益
    scaleProfit: {
      total: undefined,
      income: undefined,
      incomeChain: undefined,
      expend: undefined,
      expendChain: undefined,
    },
    // 本年经营收入
    incomeList: { list: [], endTime: undefined },
    // 园区规划
    parkPlan: [],
    // 税收概览
    revenueOverview: [],
    // 园区进出口额
    parkImportExportData: { amount: undefined, import: undefined, export: undefined },
    // 企业信息
    enterpriseInfo: {
      // 报税金额
      taxAmount: undefined,
      // 税收总金额
      taxTotalAmount: undefined,
      // 企业数量
      enterpriseCount: undefined,
      // 国营企业（强调国家控股）
      stateOwnedEnterprise: undefined,
      // 私营企业
      privateEnterprise: undefined,
      // 投资总金额
      investmentTotal: undefined,
    },
    // 园区规划
    parkAreas: [],
  }),
  actions: {
    /* 规模效益 */
    async fetchScaleProfit(data: any) {
      this.scaleProfit = await getScaleProfit(data);
    },

    /* 本年经营收入 */
    async fetchYearIncome() {
      this.incomeList = await getYearIncome();
    },

    /* 园区规划 */
    async fetchParkPlan() {
      this.parkPlan = await getParkPlan();
    },

    /* 税收概览 */
    async fetchRevenueOverview() {
      this.revenueOverview = await getRevenueOverView();
    },

    /* 园区进出口额 */
    async fetchParkImportExportData(data) {
      this.parkImportExportData = await getParkImportExportData(data);
    },

    /* 企业信息 */
    async fetchEnterpriseInfo() {
      this.enterpriseInfo = await getEnterpriseInfo();
    },

    /* 园区规划 */
    async fetchParkAreas() {
      this.parkAreas = await getParkAreas();
    },
  },
});
