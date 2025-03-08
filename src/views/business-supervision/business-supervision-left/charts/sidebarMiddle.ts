import 'echarts/lib/component/dataZoom';

import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';

const option = ref<EChartsOption>();
option.value = {
  tooltip: { trigger: 'item' },
  grid: { top: 0, left: 0, right: 0, bottom: 0, containLabel: false },
  series: [
    {
      name: '企业',
      type: 'pie',
      radius: ['74%', '100%'],
      avoidLabelOverlap: false,
      label: { show: false, position: false },
      labelLine: { show: false },
      data: [
        {
          value: 1048,
          name: '国营企业',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#0DBBB3' },
              { offset: 1, color: '#66FFFF' },
            ]),
          },
        },
        {
          value: 735,
          name: '私营企业',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#DEA60F' },
              { offset: 1, color: '#FFE457' },
            ]),
          },
        },
      ],
    },
    {
      name: '企业1',
      type: 'pie',
      radius: ['54%', '74%'],
      avoidLabelOverlap: false,
      label: { show: false, position: false },
      labelLine: { show: false },
      data: [
        {
          value: 1048,
          name: '国营企业',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#0DBBB37f' },
              { offset: 1, color: '#66FFFF7f ' },
            ]),
          },
        },
        {
          value: 735,
          name: '私营企业',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#DEA60F7F' },
              { offset: 1, color: '#FFE4577f' },
            ]),
          },
        },
      ],
    },
  ],
};

export const renderEcharts = (element: Ref<HTMLDivElement>) => {
  const myChart = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });
  myChart.setOption(option.value);
};
