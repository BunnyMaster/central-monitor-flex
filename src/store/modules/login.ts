import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    username: '',
    password: '',
    rememberMe: false,
    isLoading: false,
  }),
  getters: {},
  actions: {},
});
