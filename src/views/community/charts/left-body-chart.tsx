import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

/* 随机颜色 */

const colors = ['#3D7FFF', '#00FFFF', '#FF1190', '#FEDB65'];

const option = ref<EChartsOption>({
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
    itemStyle: {},
    label: { show: true, position: 'middle' },
  },
});

/** 渲染图表 */
export const renderBodyChart = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option.value);
};

/** 更新图标数据 */
export const updateBodyChart = (props: any) => {
  const series = myChart?.getOption()?.series;
  series[0].data = props.list?.map((item, index) => ({
    name: item.name,
    value: item.value,
    itemStyle: { color: colors[index], borderRadius: 10 },
  }));

  const total = props.list.reduce((old, item) => old + item.value, 0);

  const title = myChart?.getOption()?.title;
  title[0].text = total;

  myChart.setOption({ series, title });
};
