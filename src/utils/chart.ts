import { useEventListener } from '@vueuse/core';
import type { EChartsType } from 'echarts';

/** 通用重置图表样式 */
export const debounceChart = (myChart: EChartsType) => {
  useEventListener(
    window,
    'resize',
    () => {
      myChart.resize();
    },
    500
  );
};
