import type { EChartsOption } from 'echarts';
import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option: EChartsOption = {
  grid: {
    left: '4%',
    right: '4%',
    bottom: '19%',
    top: '20%',
    containLabel: true,
  },
  title: {
    text: '单位：(万元)',
    textStyle: { color: '#83A2C0FF', fontSize: 12 },
    top: '4%',
    left: '2%',
  },
  tooltip: { trigger: 'axis' },
  legend: {
    show: false,
    data: ['增加值'],
    icon: 'rich',
    itemWidth: 18,
    itemHeight: 2,
    textStyle: { color: '#AFBDD1', fontSize: '12px' },
    top: 8,
    right: 10,
    itemGap: 34,
  },

  xAxis: {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    type: 'category',
    boundaryGap: false,
    axisLine: {
      symbol: 'none',
      lineStyle: {
        color: '#50637A',
      },
    },
    axisTick: { show: false },
    axisLabel: {
      interval: 0,
      color: '#6071A9',
      fontSize: 12,
      padding: [10, 0, 0, 0],
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#6071A9',
      fontSize: 12,
      padding: [0, 10, 0, 0],
    },
    splitLine: {
      lineStyle: {
        color: '#50637A',
        type: 'dashed',
      },
    },
  },
  series: [
    {
      name: '增加值',
      data: [],
      type: 'line',
      // smooth: true,
      color: '#00F7FF',
      lineStyle: {
        width: 2,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(0, 247, 255, .6)',
            },
            {
              offset: 0.8,
              color: 'rgba(0, 247, 255, .2)',
            },
          ],
          false
        ),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10,
      },
      symbol: 'circle',
      symbolSize: 6,
    },
  ],
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
export const updateChart = (option: Array<Array<number>>) => {
  const series = myChart.getOption().series;
  // series[0].data = option[0];
  // series[1].data = option[1];
  myChart.setOption({ series });
};
