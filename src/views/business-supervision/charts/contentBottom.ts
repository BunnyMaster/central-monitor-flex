import 'echarts/lib/component/dataZoom';

import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart, graphicLinearGradient } from '@/utils/chart';

let myChart = null;
const option = ref<EChartsOption>();
option.value = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow', shadowStyle: { shadowColor: '#66FFFF', shadowBlur: 10 } },
  },
  grid: { top: '9%', right: '0%', left: '6%', bottom: '9%', containLabel: false },
  xAxis: [
    {
      type: 'category',
      data: [
        '2021.01',
        '2021.02',
        '2021.03',
        '2021.04',
        '2021.05',
        '2021.06',
        '2021.07',
        '2021.08',
        '2021.09',
        '2021.10',
        '2021.11',
        '2021.12',
      ],
      axisTick: { alignWithLabel: true },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: { type: 'solid', color: '#707070', width: 2 },
      },
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '40%',
      itemStyle: { color: graphicLinearGradient('#00CCD2', '#00A2FF') },
      // emphasis: {
      //   shadowBlur: 10, // 取消阴影模糊
      //   shadowColor: '#000', // 取消阴影颜色
      // },
      label: { show: true, position: 'top', color: '#fff', fontSize: 14 },
      data: [10, 52, 200, 334, 390, 330, 220, 500, 482, 499, 999, 444],
    },
  ],
};

export const renderEcharts = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option.value);
};
