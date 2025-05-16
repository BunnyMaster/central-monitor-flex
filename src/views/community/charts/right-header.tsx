import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

/* 随机颜色 */
const colors = ['#3D7FFF', '#00FFFF', '#FF1190', '#FEDB65', '#FE9B45'];

const option = ref<EChartsOption>({
  backgroundColor: 'transparent',
  grid: { top: 0, right: 0, bottom: 0, left: 0, containLabel: true },
  tooltip: { trigger: 'item' },
  series: [
    {
      name: '名称',
      type: 'pie',
      radius: [14, 104],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: { borderRadius: 4 },
      data: [],
      label: { distanceToLabelLine: 4, position: 'insideBottom' },
      labelLine: { show: true, length: 1, length2: 0, smooth: true },
    },
  ],
});

/** 渲染图表 */
export const renderRightHeaderChart = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option.value);
};

/** 更新图标数据 */
export const updateRightHeaderChart = (props: any) => {
  const series = myChart?.getOption()?.series;

  series[0].data = props.list?.map((item, index) => ({
    name: item.name,
    value: item.value,
    itemStyle: { color: colors[index], borderRadius: 10 },
  }));

  const title = myChart?.getOption()?.title;

  myChart.setOption({ series, title });
};
