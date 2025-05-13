<script lang="ts" setup>
import 'echarts/lib/component/dataZoom';

import { useDebounceFn, useEventListener } from '@vueuse/core';
import type { EChartsOption } from 'echarts';
import { onMounted, type Ref, ref, watch } from 'vue';

import echarts from '@/plugins/echarts';

const props = defineProps({
  chartData: {
    type: Number,
    default: 0,
  },
});

const chart = ref<HTMLDivElement>();
const option = ref<EChartsOption>();
option.value = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow', shadowStyle: { shadowColor: '#66FFFF', shadowBlur: 10 } },
    formatter: (data) => {
      let tip = '';
      data.forEach((item) => {
        if (item.seriesType === 'bar') {
          tip += '<div class="echarts-tip-div">';
          tip += '<div class="left">' + item.marker + item.seriesName + '：</div>';
          tip += '<div class="right">' + item.value + '%</div>';
          tip += '</div>';
        }
      });
      return tip;
    },
  },
  grid: { top: '9%', right: '0%', left: '0%', bottom: '0%', containLabel: false },
  xAxis: [{ type: 'category', show: false }],
  yAxis: [{ type: 'value', show: false, max: 100 }],
  series: [
    {
      name: '环比',
      type: 'bar',
      barWidth: 30,
      showBackground: true,
      backgroundStyle: {
        color: 'transparent',
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#FEDB65' },
          { offset: 1, color: '#66FFFF' },
        ]),
      },
      data: [props.chartData],
      z: 0,
    },
    {
      type: 'pictorialBar',
      barWidth: 30,
      itemStyle: { color: '#0D3770' },
      symbolRepeat: true,
      symbolMargin: 3,
      symbol: 'rect',
      symbolSize: [30, 4],

      data: [props.chartData],
      z: 1,
    },
  ],
  animationDuration: 0,
  animationDurationUpdate: 1000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
};

const renderEcharts = (element: Ref<HTMLDivElement>) => {
  const myChart = echarts.init(element.value, null, {
    renderer: 'svg',
    devicePixelRatio: window.devicePixelRatio,
  });

  const debouncedFn = useDebounceFn(() => {
    myChart.resize();
  }, 1000);
  useEventListener(window, 'resize', debouncedFn);

  myChart.setOption(option.value);

  watch(
    () => props.chartData,
    () => {
      myChart.setOption({
        series: [
          { name: '环比', type: 'bar', data: [props.chartData] },
          { type: 'pictorialBar', data: [props.chartData] },
        ],
      });
    }
  );
};

onMounted(() => {
  renderEcharts(chart);
});
</script>

<template>
  <div ref="chart" class="business-supervision__sidebar-chart" />
</template>

<style lang="scss" scoped>
.business-supervision__sidebar-chart {
  width: 20px;
  height: 63px;
}
</style>
