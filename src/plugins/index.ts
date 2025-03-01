import type { App } from 'vue';

import { setupDirective } from '@/directive';
import { autoFit } from '@/plugins/autofit';
import { useEcharts } from '@/plugins/echarts';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';

export default {
  install(app: App<Element>) {
    // 设置路由
    setupRouter(app);
    // 设置状态管理
    setupStore(app);
    // 设置指令
    setupDirective(app);
    // 根据需求引入echarts
    useEcharts(app);
    autoFit();
  },
};
