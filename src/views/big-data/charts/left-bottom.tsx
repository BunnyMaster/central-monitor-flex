import 'echarts/lib/component/dataZoom';

import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = {
  backgroundColor: 'transparent',
  grid: { top: '19%', right: 9, left: 9, bottom: '20%' },
  tooltip: {},
  legend: {
    data: [
      { name: '出园', icon: 'rect', itemStyle: { color: '#32C5FF' } },
      { name: '入园', icon: 'rect', itemStyle: { color: '#16CEB9' } },
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
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    itemStyle: { color: '#ccc' },
    splitLine: { show: true, lineStyle: { color: '#333', width: 1, type: 'solid' } },
    splitArea: { show: false },
  },
  yAxis: { show: false, type: 'value' },
  series: [
    {
      name: '入园',
      type: 'line',
      // data: [3, 9, 2, 8, 3, 4, 8, 2, 8, 3, 4, 8],
      smooth: true,
      symbol: 'circle',
      symbolSize: 14,
      itemStyle: { borderColor: '#16CEB9', borderWidth: 6, color: '#142745' },
      lineStyle: { color: '#16CEB9', width: 6 },
    },
    {
      name: '出园',
      type: 'line',
      // data: [2, 8, 3, 7, 1, 9, 18, 3, 7, 1, 9, 6],
      smooth: true,
      symbol: 'circle',
      symbolSize: 14,
      itemStyle: { borderColor: '#32C5FF', borderWidth: 6, color: '#142745' },
      lineStyle: { color: '#32C5FF', width: 6 },
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
export const updateChart = (option: Array<Array<number>>) => {
  const series = myChart.getOption().series;
  series[0].data = option[0];
  series[1].data = option[1];
  myChart.setOption({ series });
};
