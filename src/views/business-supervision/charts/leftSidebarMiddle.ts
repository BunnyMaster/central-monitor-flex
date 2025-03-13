import 'echarts/lib/component/dataZoom';

import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

const option = ref();
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
      emphasis: {
        disabled: true, // 禁用 emphasis 状态
        scale: false, // 禁用放大效果
        scaleSize: 0, // 将放大尺寸设置为 0
      },
      data: [
        {
          value: 1048,
          name: '国营',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#0DBBB3' },
              { offset: 1, color: '#66FFFF' },
            ]),
          },
        },
        {
          value: 735,
          name: '私营',
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
      name: '企业',
      type: 'pie',
      radius: ['54%', '74%'],
      avoidLabelOverlap: false,
      label: { show: false, position: false },
      labelLine: { show: false },
      emphasis: {
        disabled: true, // 禁用 emphasis 状态
        scale: false, // 禁用放大效果
        scaleSize: 0, // 将放大尺寸设置为 0
      },
      data: [
        {
          value: 1048,
          name: '国营',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              { offset: 0, color: '#0DBBB37f' },
              { offset: 1, color: '#66FFFF7f ' },
            ]),
          },
        },
        {
          value: 735,
          name: '私营',
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
  const myChart: any = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option.value);
};
