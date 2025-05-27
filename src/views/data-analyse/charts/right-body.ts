import type { EChartsOption } from 'echarts';
import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

const getLinearGradient = (color1: string, color2: string): any => {
  return new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      { offset: 0, color: color1 },
      { offset: 0.8, color: color2 },
    ],
    false
  );
};
let myChart = null;

const option: EChartsOption = {
  tooltip: { trigger: 'axis' },
  title: {
    text: '单位：(万元)',
    textStyle: { color: '#83A2C0FF', fontSize: 12 },
    top: '4%',
    left: '2%',
  },
  grid: {
    left: '9%',
    right: '2%',
    bottom: '9%',
    top: '19%',
    containLabel: false,
  },
  xAxis: {
    data: [],
    type: 'category',
    // boundaryGap: false,
    axisLine: { symbol: 'none', lineStyle: { color: '#50637A' } },
    axisTick: { show: false },
    axisLabel: { interval: 0, color: '#fff', fontSize: 12 },
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#fff', fontSize: 12 },
    splitLine: { lineStyle: { color: '#50637A', type: 'dashed' } },
  },
  series: [
    {
      name: '数据分析',
      data: [],
      type: 'pictorialBar',
      color: '#00F7FF',
      barWidth: 40,
      symbol: 'triangle',
      label: { show: true, position: 'top', color: '#fff' },
    },
  ],
  visualMap: {
    show: false,
    showLabel: false,
    type: 'piecewise',
    pieces: [
      { min: 0, max: 100, label: '低', color: getLinearGradient('#FF6363', 'rgba(255,99,99,0.2)') },
      {
        min: 100,
        max: 300,
        label: '低中',
        color: getLinearGradient('#FFCC00', 'rgba(255,204,0,0.2)'),
      },
      {
        min: 300,
        max: 500,
        label: '中',
        color: getLinearGradient('#00FFFF', 'rgba(0,255,255,0.2)'),
      },
      {
        min: 500,
        max: 700,
        label: '中高',
        color: getLinearGradient('#00CCFF', 'rgba(0,204,255,0.2)'),
      },
      {
        min: 700,
        max: 1000,
        label: '高',
        color: getLinearGradient('#0096FF', 'rgba(0,150,255,0.2)'),
      },
    ],
    seriesIndex: 0,
  },
};

/** 渲染图表 */
export const renderBodyChart = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });
  debounceChart(myChart);
  myChart.setOption(option);
};

/** 更新图表数据 */
export const updateBodyChart = (data: any) => {
  const xAxis = myChart.getOption().xAxis;
  xAxis[0].data = data.map((item: any) => item.name);

  const series = myChart.getOption().series;
  series[0].data = data;
  myChart.setOption({ xAxis, series });
};
