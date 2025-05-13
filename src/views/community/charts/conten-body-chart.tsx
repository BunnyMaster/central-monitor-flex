import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = ref<EChartsOption>({
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '75%'],
      radius: '90%',
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: { width: 12, color: [[1, '#05C1D3']] },
      },
      pointer: {
        show: false,
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto',
        },
      },
      axisTick: {
        length: 44,
        distance: -44,
        lineStyle: { color: 'auto', width: 1 },
      },
      splitLine: {
        length: 24,
        distance: -24,
        lineStyle: { color: 'auto', width: 8, miterLimit: 12 },
      },
      progress: {
        show: true,
        width: 14,
        itemStyle: { color: '#707070' },
      },
      axisLabel: { show: false },
      detail: {
        fontSize: 24,
        offsetCenter: [0, '9%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '\n安全指数';
        },
        color: '#05C1D3',
      },
      data: [0.5],
    },
  ],
});

/** 渲染图表 */
export const renderBodyChart = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option.value);
};

/** 更新图标数据 */
export const updateBodyChart = (props: any) => {
  const series = myChart?.getOption()?.series;
  series[0].data = [props.data / 100];

  myChart.setOption({ series });
};
