import 'echarts/lib/component/dataZoom';

import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = {
  tooltip: { trigger: 'item' },
  legend: { top: 'bottom', textStyle: { color: '#fff' } },
  series: [
    {
      name: '品牌占比',
      type: 'pie',
      radius: [25, 100],
      center: ['50%', '45%'],
      roseType: 'area',
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      label: { formatter: '{b}: {c}%', color: '#fff' },
      data: [
        { value: 10.89, name: '品牌A' },
        { value: 30.89, name: '品牌B' },
        { value: 38.38, name: '品牌C' },
        { value: 27.47, name: '品牌D' },
        { value: 29.79, name: '品牌E' },
        { value: 50, name: '品牌F' },
        { value: 50, name: '品牌G' },
        { value: 39.72, name: '品牌H' },
      ],
    },
  ],
};

/** 渲染图表 */
export const renderEcharts = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option);
};

/** 更新图表数据 */
export const updateChart = (data: any) => {
  const series = myChart.getOption().series;
  series[0].data = data;
  myChart.setOption({ series });
};
