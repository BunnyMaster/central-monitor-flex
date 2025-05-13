import { defineStore } from 'pinia';

import {
  getAlarmsOverview,
  getCommityDeicesStatus,
  getCommunityDevicesAmount,
  getCommunityStatistics,
} from '@/api/community';

export const useCommunityStore = defineStore('communityStore', {
  state: () => ({
    // 设备总数
    devicesList: { list: [], total: 0 },
    // 预警概览
    alarmOverviewList: [],
    // 统计列表
    statisticsList: [],
    // 设备状态
    deviceStatus: { devcies: [], security: 0 },
  }),
  actions: {
    /* 设备总数 */
    async fetchCommunityDevicesAmount() {
      const result = await getCommunityDevicesAmount();

      this.devicesList = result;
    },
    /* 预警概览 */
    async fetchAlarmsOverview() {
      const result = await getAlarmsOverview();
      this.alarmOverviewList = result;
    },
    /* 社区统计 */
    async fetchCommunityStatisticsList() {
      this.statisticsList = await getCommunityStatistics();
    },
    /* 设备状态 */
    async fetchCommityDeicesStatus() {
      const result = await getCommityDeicesStatus();
      this.deviceStatus = result;
    },
  },
});
