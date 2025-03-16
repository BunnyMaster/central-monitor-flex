import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart, graphicLinearGradient } from '@/utils/chart';

let myChart = null;

const option = {
  backgroundColor: 'transparent',
  grid: { top: '54px', right: '14px', left: '14px', bottom: '24px' },
  title: {
    text: '最近12个月税收概览',
    textStyle: { color: '#fff', fontSize: 22, fontWeight: 'lighter' },
  },
  tooltip: {},
  legend: { show: false },
  xAxis: {
    type: 'category',
    show: true,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    // data: category,
    itemStyle: { color: '#ccc' },
    splitLine: { show: true, lineStyle: { color: '#333', width: 1, type: 'solid' } },
    splitArea: { show: false },
  },
  yAxis: { show: true, type: 'value', splitLine: { show: false } },
  series: [
    {
      name: '金额',
      type: 'bar',
      barWidth: 14,
      itemStyle: {
        borderRadius: 5,
        color: graphicLinearGradient('#66FFFF', '#66FFFF33'),
      },
      data: [2, 8, 3, 7, 1, 9, 18, 3, 7, 1, 9, 6],
    },
  ],
};

/** 渲染图表 */
export const renderEcharts = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option);
};
