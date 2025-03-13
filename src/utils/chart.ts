import { useDebounceFn, useEventListener } from '@vueuse/core';
import type { EChartsType } from 'echarts';

/** 通用重置图表样式 */
export const debounceChart = (myChart: EChartsType | undefined) => {
  const debounceFn = useDebounceFn(() => {
    myChart!.resize();
  }, 500);

  useEventListener(window, 'resize', debounceFn);
};

/** 数字格式化 */
export const formatter = (number: any) => {
  const numbers = number.toString().split('').reverse();
  const segs = [];

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''));

  return segs.join(',').split('').reverse().join('');
};
