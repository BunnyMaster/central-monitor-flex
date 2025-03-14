import 'echarts/lib/component/dataZoom';

import type { EChartsOption, EChartsType } from 'echarts';
import { defineComponent, onMounted, type Ref, ref, watch } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

const itemStyles = [
  {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#00CCD2' },
      { offset: 1, color: '#00A2FF' },
    ]),
  },
  {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#CBB668' },
      { offset: 1, color: '#FABC00' },
    ]),
  },
];

const option: Ref<EChartsOption | undefined> = ref<EChartsOption>();
option.value = {
  grid: { top: '9%', right: '0%', left: '0%', bottom: '0%', containLabel: false },
  series: [
    {
      type: 'gauge',
      title: { fontSize: '0.7em', color: '#fff', offsetCenter: ['0%', '14%'] },
      startAngle: 90,
      endAngle: -270,
      pointer: { show: false },
      progress: { show: true, overlap: false, roundCap: false, clip: false },
      axisLine: { lineStyle: { width: 14 } },
      splitLine: { show: false, distance: 0, length: 10 },
      axisTick: { show: false },
      axisLabel: { show: false, distance: 50 },
      detail: {
        width: 40,
        height: 40,
        fontSize: '0.8em',
        fontWeight: 0,
        color: '#fff',
        formatter: '+{value}%',
      },
      data: [
        {
          name: '环比变化',
          detail: { valueAnimation: true, offsetCenter: ['0%', '-20%'] },
        },
      ],
    },
  ],
};

/** 绘制图表 */
const renderEcharts: any = (myChart: Ref<echarts.ECharts>, element: Ref<HTMLDivElement>) => {
  myChart.value = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  myChart.value!.setOption(option.value!);

  debounceChart(myChart.value);
};

/* 封装组件 */
export const ChartProgress = defineComponent({
  props: {
    percent: {
      type: Number,
    },
  },
  setup(props) {
    const chart = ref<HTMLDivElement>();
    const myChart = ref<EChartsType>();

    onMounted(() => {
      renderEcharts(myChart, chart);

      updateChart(myChart, props);

      watch(
        () => props.percent,
        () => {
          updateChart(myChart, props);
        }
      );
    });

    return () => <div ref={chart} className="progress"></div>;
  },
});

/** 更新图标数据 */
const updateChart = (myChart: Ref<EChartsType | undefined>, props: any) => {
  const series = myChart.value.getOption().series;
  series[0].data[0].value = props.percent;
  series[0].data[0].itemStyle = props.percent >= 20 ? itemStyles[0] : itemStyles[1];

  myChart.value?.setOption({ series });
};
