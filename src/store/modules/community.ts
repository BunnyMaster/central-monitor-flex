import { defineStore } from 'pinia';

import { getCommunityStatistics } from '@/api/community';

export const useCommunityStore = defineStore('communityStore', {
  state: () => ({
    communityStatisticsList: [],
  }),
  actions: {
    /* 社区统计 */
    async loadCommunityStatisticsList() {
      this.communityStatisticsList = await getCommunityStatistics();
    },
  },
});
