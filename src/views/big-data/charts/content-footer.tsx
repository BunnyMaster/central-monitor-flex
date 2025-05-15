import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart, graphicLinearGradient } from '@/utils/chart';

let myChart = null;

const option = {
  backgroundColor: 'transparent',
  grid: { top: 79, right: 9, left: 34, bottom: '24px' },
  title: {
    text: '最近12个月税收概览',
    subtext: '单位/万元',
    textStyle: { color: '#fff', fontSize: 22, fontWeight: 'lighter' },
    subtextStyle: { color: '#fff', fontSize: 12, fontWeight: 'lighter' },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: function (params: any): string {
      return `<div>${params[0].seriesName}</div> ${params[0].marker} ${params[0].name}  ${params[0].value}万元`;
    },
  },
  legend: { show: false },
  xAxis: {
    type: 'category',
    show: true,
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
    itemStyle: { color: '#ccc' },
    splitLine: { show: false },
  },
  yAxis: {
    show: true,
    type: 'value',
    name: '',
    nameTextStyle: { color: '#fff', padding: [0, 0, 0, 40] },
    splitLine: { show: true, lineStyle: { color: '#333', width: 1, type: 'solid' } },
  },
  series: [
    {
      name: '金额',
      type: 'bar',
      barWidth: 9,
      label: { show: true, position: 'top', color: '#fff', distance: 9 },
      itemStyle: {
        borderRadius: [0, 0, 4, 4],
        color: graphicLinearGradient('#66FFFF', '#66FFFF33'),
      },
      data: [596, 566, 512, 375, 566, 437, 492, 519, 309, 482, 539, 572],
    },
    {
      name: '金额',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 19,
      symbolOffset: [0, 5],
      data: [596, 566, 512, 375, 566, 437, 492, 519, 309, 482, 539, 572],
      itemStyle: { color: '#66FFFF' },
      lineStyle: { color: 'transparent' },
      animationDuration: 499,
      animationDelay: 644,
    },
  ],
};

/** 渲染图表 */
export const renderBigDateContentFooterChart = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option);
};

/** 更新图标数据 */
export const updateBigDateContentFooterChart = (props: { data: Array<number> }) => {
  const series = myChart.getOption()?.series;
  series[0].data = props.data;
  series[1].data = props.data;

  myChart.setOption({ series });
};
