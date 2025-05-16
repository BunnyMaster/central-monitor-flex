import 'echarts/lib/component/dataZoom';

import type { EChartsOption } from 'echarts';
import { defineComponent, onMounted, type Ref, ref, watch } from 'vue';

import echarts from '@/plugins/echarts';

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
      label: { show: true, formatter: ({ value }) => `${value}%`, fontWeight: 1000, fontSize: 14 },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        borderRadius: [4],
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
      label: { show: true, formatter: ({ value }) => `${value}%`, fontWeight: 1000, fontSize: 14 },
      itemStyle: {
        borderRadius: [4],
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

  myChart.value?.setOption(option.value);
};

/** 更新图标数据 */
const updateChart = (myChart: Ref<echarts.ECharts | undefined>, props: any) => {
  const series = myChart.value.getOption().series;
  const sum = props.dataLeft + props.dataRight;
  const right = +(props.dataRight / sum).toFixed(2);
  const left = +(props.dataLeft / sum).toFixed(2);

  series[0].data[0] = Math.round(left * 100);
  series[1].data[0] = Math.round(right * 100);

  myChart.value?.setOption({ series });
};

const RightFooterChart = defineComponent({
  name: 'RightFooterChart',
  props: { dataLeft: { type: Number }, dataRight: { type: Number }, title: { type: String } },
  setup(props) {
    const myChartRef = ref<echarts.ECharts>();
    const chartRef = ref<HTMLDivElement>();

    onMounted(() => {
      renderLeftHeaderEcharts(myChartRef, chartRef);
      updateChart(myChartRef, props);

      watch(
        () => [props.dataLeft, () => props.dataRight],
        () => {
          updateChart(myChartRef, props);
        }
      );
    });

    return () => (
      <div>
        {props.title}
        <div ref={chartRef} className="progress"></div>
      </div>
    );
  },
});

export default RightFooterChart;
