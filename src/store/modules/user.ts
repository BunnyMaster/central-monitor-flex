import { defineStore } from 'pinia';

import { user } from '@/api/test';

/** 用户信息 */
export const useUserStore = defineStore('userStore', {
  state() {
    return {
      userinfo: {},
    };
  },
  getters: {},
  actions: {
    async getUserInfo() {
      const response = await user();
      if (response.code == 200) {
        this.userinfo = response.data;
      }
    },
  },
});
