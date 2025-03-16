import { defineStore } from 'pinia';

import { isCSSColor, isPath } from '@/utils/regexp/regexpBackground';

const useAppStore = defineStore('appStore', {
  state() {
    return {
      background: '',
    };
  },
  getters: {},
  actions: {
    setBackground(background: string) {
      if (isCSSColor(background)) {
        this.background = background;
      } else if (isPath(background)) {
        const href = new URL(background, import.meta.url).href;
        this.background = `url(${href})`;
      } else {
        const href = new URL('/images/common/bg/bg-layout.png', import.meta.url).href;
        this.background = `url(${href})`;
      }
    },
  },
});

export { useAppStore };
