import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = {
  title: {
    text: '34467',
    left: 'center',
    top: 'center',
    textStyle: { color: '#fff', fontSize: 19 },
  },
  grid: { containLabel: false },
  polar: { radius: [40, '90%'] },
  angleAxis: { show: false, startAngle: 90 },
  radiusAxis: { show: false, type: 'category' },
  tooltip: {},
  series: {
    type: 'bar',
    data: [],
    barWidth: 20,
    barGap: 9,
    coordinateSystem: 'polar',
    label: { show: true, position: 'middle' },
  },
  visualMap: {
    show: false,
    showLabel: false,
    type: 'piecewise',
    pieces: [
      { min: 0, max: 20, label: '低', color: '#FF6363' },
      { min: 20, max: 30, label: '低中', color: '#FFCC00' },
      { min: 30, max: 50, label: '中', color: '#00FFFF' },
      { min: 50, max: 70, label: '中高', color: '#00CCFF' },
      { min: 70, max: 100, label: '高', color: '#0096FF' },
    ],
    seriesIndex: 0,
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
export const updateFooterChart = (data: any) => {
  const series = myChart.getOption().series;
  series[0].data = data.map((item: any) => ({
    name: item.name,
    value: item.value,
  }));

  const total = data?.reduce((old, item) => old + item.value, 0);
  const title = myChart?.getOption()?.title;
  title[0].text = total;
  myChart.setOption({ title, series });
};
