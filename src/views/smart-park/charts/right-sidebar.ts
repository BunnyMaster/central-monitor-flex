import 'echarts/lib/component/dataZoom';

import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = {
  backgroundColor: 'transparent',
  grid: { right: 10, left: 10, bottom: 20 },
  title: {
    text: '近7天车辆数据',
    textStyle: { fontSize: 18, color: '#fff', fontWeight: 'lighter' },
  },
  tooltip: {},
  legend: {
    data: [
      { name: '出园', icon: 'rect', itemStyle: { color: '#4182FF' } },
      { name: '入园', icon: 'rect', itemStyle: { color: '#00FFFF' } },
    ],
    icon: 'rect',
    right: 0,
    top: 0,
    itemGap: 9,
    orient: 'horizontal',
    align: 'left',
    textStyle: { fontSize: 14, color: '#fff' },
  },
  xAxis: {
    type: 'category',
    show: true,
    data: ['02.01', '02.02', '02.03', '02.04', '02.05', '02.06', '02.07'],
    itemStyle: { color: '#ccc' },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#333',
        width: 1,
        type: 'solid', // 'solid' ||'dashed'||'dotted'
      },
    },
    splitArea: { show: false },
  },
  yAxis: { show: false, type: 'value' },
  series: [
    {
      name: '入园',
      type: 'line',
      data: [3, 9, 2, 8, 3, 4, 8],
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#4182FF' },
            { offset: 1, color: 'rgba(0,255,255,0)' },
          ],
        },
      },
      itemStyle: { borderColor: '#00FFFF', borderWidth: 4, color: '#142745' },
      lineStyle: { color: '#00FFFF', width: 3 },
    },
    {
      name: '出园',
      type: 'line',
      data: [2, 8, 3, 7, 1, 9, 6],
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#4182FF' },
            { offset: 1, color: 'rgba(0,255,255,0)' },
          ],
        },
      },
      itemStyle: { borderColor: '#4182FF', borderWidth: 4, color: '#142745' },
      lineStyle: { color: '#4182FF', width: 3 },
    },
  ],
};

export const renderEcharts = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option);
};

/** 更新图表数据 */
export const updateChart = (option: any) => {
  const series = myChart.getOption().series;
  series[0].data = option.data1;
  series[1].data = option.data2;
  myChart.setOption({ series });
};
