import { useDebounceFn, useEventListener } from '@vueuse/core';
import type { EChartsType } from 'echarts';

import echarts from '@/plugins/echarts';

/** 通用重置图表样式 */
export const debounceChart = (myChart: echarts.ECharts | undefined) => {
  const debounceFn = useDebounceFn(() => {
    myChart!.resize();
  }, 500);

  useEventListener(window, 'resize', debounceFn);
};

/** 数字格式化 */
export const formatter = (number: any) => {
  const numbers = number?.toString().split('').reverse();
  const segs = [];

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''));

  return segs.join(',').split('').reverse().join('');
};

/** 颜色渲染 */
export const graphicLinearGradient = (
  color1: string,
  color2: string,
  coordinate: Array<number> = [0, 0, 0, 1]
) => {
  return new echarts.graphic.LinearGradient(
    coordinate[0],
    coordinate[1],
    coordinate[2],
    coordinate[3],
    [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 },
    ]
  );
};

export const resetSelect = (myChart: EChartsType) => {
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
  });
};

export const selectSector = (myChart: EChartsType, dataIndex: number) => {
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex,
  });
};
