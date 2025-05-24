import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;
const data = [
  { name: '张三', value: 88 },
  { name: '李四', value: 250 },
  { name: '王五', value: 5438 },
  { name: '赵六', value: 8848 },
  { name: '陈七', value: 9527 },
  { name: '朱八', value: 10086 },
];

const option = {
  title: {
    text: '34467',
    subtext: '历史预警数',
    left: 'center',
    top: 'center',
    textStyle: { color: '#fff', fontSize: 34 },
    subtextStyle: { color: '#fff', fontSize: 16 },
  },
  grid: { containLabel: false },
  polar: { radius: [60, '100%'] },
  angleAxis: { show: false, startAngle: 90 },
  radiusAxis: { show: false, type: 'category' },
  tooltip: {},
  series: {
    type: 'bar',
    data: [],
    barWidth: 20,
    barGap: 0,
    coordinateSystem: 'polar',
    label: { show: true, position: 'middle' },
  },
};

/** 渲染图表 */
export const renderFooterChart = (element: Ref<HTMLDivElement>) => {
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
