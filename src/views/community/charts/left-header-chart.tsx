import 'echarts/lib/component/dataZoom';

import type { EChartsOption, EChartsType } from 'echarts';
import { defineComponent, onMounted, type Ref, ref, watch } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

const option = ref<EChartsOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'line' },
  },
  grid: {
    top: 0,
    left: '0',
    right: '0',
    bottom: '0',
    containLabel: false,
  },
  xAxis: { show: false, type: 'value' },
  yAxis: { show: false, type: 'category' },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: { show: false },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        borderRadius: [10],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#17EAFE' },
          { offset: 1, color: '#009CD7' },
        ]),
      },
      barWidth: 20,
      data: [320],
    },
    {
      type: 'bar',
      stack: 'total',
      label: { show: false },
      itemStyle: {
        borderRadius: [10],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#00FFBC' },
          { offset: 1, color: '#09ADA7' },
        ]),
      },
      barWidth: 20,
      emphasis: {
        focus: 'series',
      },
      data: [120],
    },
  ],
});

/** 绘制图表 */
export const renderLeftHeaderEcharts: any = (
  myChart: Ref<echarts.ECharts>,
  element: Ref<HTMLDivElement>
) => {
  myChart.value = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  myChart.value!.setOption(option.value!);

  debounceChart(myChart.value);
};

/** 更新图标数据 */
const updateChart = (myChart: Ref<EChartsType | undefined>, props: any) => {
  const series = myChart.value.getOption().series;
  series[0].data[0] = props.dataLeft;
  series[1].data[0] = props.dataRight;

  myChart.value?.setOption({ series });
};

const LeftHeaderChart = defineComponent({
  name: 'LeftHeaderChart',
  props: { dataLeft: { type: Number }, dataRight: { type: Number } },
  setup(props) {
    const myChartRef = ref<EChartsType>();
    const chartRef = ref<HTMLDivElement>();

    onMounted(() => {
      renderLeftHeaderEcharts(myChartRef, chartRef);

      watch(
        () => [props.dataLeft, () => props.dataRight],
        () => {
          updateChart(myChartRef, props);
        },
        { immediate: true }
      );
    });

    return () => <div ref={chartRef} className="progress"></div>;
  },
});

export default LeftHeaderChart;
