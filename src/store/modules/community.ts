import { defineStore } from 'pinia';

import {
  getAlarmsOverview,
  getCommunityDeicesStatus,
  getCommunityDevicesAmount,
  getCommunityStatistics,
  getDataStatistics,
  getServerProject,
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
    deviceStatus: { devices: [], security: 0 },
    // 数据统计
    dataStatistics: [],
    // 右侧底部服务项目
    serverProject: [],
  }),
  actions: {
    /* 设备总数 */
    async fetchCommunityDevicesAmount() {
      this.devicesList = await getCommunityDevicesAmount();
    },
    /* 预警概览 */
    async fetchAlarmsOverview() {
      this.alarmOverviewList = await getAlarmsOverview();
    },
    /* 社区统计 */
    async fetchCommunityStatisticsList() {
      this.statisticsList = await getCommunityStatistics();
    },
    /* 设备状态 */
    async fetchCommunityDeicesStatus() {
      this.deviceStatus = await getCommunityDeicesStatus();
    },
    /* 数据统计 */
    async fetchDataStatistics() {
      this.dataStatistics = await getDataStatistics();
    },
    /* 右侧底部服务项目 */
    async fetchServerProject() {
      this.serverProject = await getServerProject();
    },
  },
});
