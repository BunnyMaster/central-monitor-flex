import { defineStore } from 'pinia';

import { getRoadStatus, getTollgateMonitoringData, getTrafficStatistics } from '@/api/smartPark';

export const useSmartPark = defineStore('smartparkStore', {
  state: () => ({
    // 道路状态
    roadStatus: [],
    // 道路建议
    roadStatusSuggest: '',
    // 卡口车辆监控
    tollgateMonitoringData: [],
    // 车浏览概览
    trafficStatistics: { overview: [], outer: [], enter: [], timeline: [] },
  }),
  actions: {
    /* 道路情况 */
    async fetchRoadStatus() {
      const result: any = await getRoadStatus();
      this.roadStatus = result.entrances;
      this.roadStatusSuggest = result.suggest;
    },
    /* 卡口车辆监控 */
    async fetchTollgateMonitoringData() {
      const result = await getTollgateMonitoringData();
      this.tollgateMonitoringData = result;
    },
    /* 车流量概览 */
    async fetchFlowRate() {
      const result = await getTrafficStatistics();
      this.trafficStatistics = result;
    },
  },
});
