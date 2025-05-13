import { defineStore } from 'pinia';

import {
  fetchRoadStatus,
  fetchTollgateMonitoringData,
  fetchTrafficStatistics,
} from '@/api/smartPark';

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
    async loadRoadStatus() {
      const result: any = await fetchRoadStatus();
      this.roadStatus = result.entrances;
      this.roadStatusSuggest = result.suggest;
    },
    /* 卡口车辆监控 */
    async loadTollgateMonitoringData() {
      const result = await fetchTollgateMonitoringData();
      this.tollgateMonitoringData = result;
    },
    /* 车流量概览 */
    async loadFlowRate() {
      const result = await fetchTrafficStatistics();
      this.trafficStatistics = result;
    },
  },
});
