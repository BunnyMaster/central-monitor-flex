import 'echarts/lib/component/dataZoom';

import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = ref<EChartsOption>();
option.value = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
  },
  grid: { top: 0, left: 0, right: -100, bottom: 0, containLabel: false },
  xAxis: { show: false, type: 'value' },
  yAxis: { show: false, type: 'category', data: ['进出口金额'] },
  series: [
    {
      name: '进口额',
      type: 'bar',
      barMaxWidth: 24,
      barGap: '-100%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#1B3052' },
          { offset: 1, color: '#32A5DE' },
        ]),
      },
      data: [381],
    },
    {
      name: '出口额',
      type: 'bar',
      barMaxWidth: 23,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#1B3052' },
          { offset: 1, color: '#3684F2' },
        ]),
      },
      data: [-158],
    },
  ],
};

export const renderBigDataLeftTopEcharts = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option.value);
};

/** 更新图标数据 */
export const updateBigDataLeftTopEcharts = (props: {
  import: Array<number>;
  export: Array<number>;
}) => {
  const series = myChart.getOption()?.series;
  series[0].data[0] = props.import;
  series[1].data[0] = -props.export;

  myChart.setOption({ series });
};
