import { useIntervalFn } from '@vueuse/core';
import type { EChartsOption } from 'echarts';
import { type Ref, ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart, resetSelect, selectSector } from '@/utils/chart';

const totalIndex = ref<number>(0);
const currentIndex = ref<number>(0);
let myChart = null;

const option: EChartsOption = {
  tooltip: { position: 'right', trigger: 'item' },
  legend: {
    orient: 'horizontal', // 垂直排列
    right: 0,
    left: 240,
    top: 'center', // 垂直居中
    align: 'left', // 文本左对齐
    icon: 'circle', // 圆形图标
    itemGap: 50, // 图例项间隔
    itemWidth: 14, // 图例标记宽度
    itemHeight: 14, // 图例标记高度
    textStyle: { color: '#fff', fontSize: 14 },
    formatter(name) {
      const series = myChart.getOption().series;
      // 获取对应系列的数据
      const seriesData = series[0].data;
      const dataIndex = series[0].data.findIndex((item) => item.name === name);
      const value = seriesData[dataIndex]?.value;

      return `${name}: ${value}%`;
    },
  },
  grid: {
    left: '0%', // 图表左侧不留白
    right: '0%', // 为图例留出25%空间
    top: '0%',
    bottom: '0%',
    containLabel: false,
  },
  series: [
    {
      name: '数据占有率',
      type: 'pie',
      radius: ['54%', '70%'],
      center: ['24%', '50%'],
      avoidLabelOverlap: false,
      padAngle: 4,
      itemStyle: { borderRadius: 4 },
      label: { show: false, position: 'center' },
      emphasis: {
        label: {
          show: true,
          color: '#fff',
          fontSize: 29,
          fontWeight: 'lighter',
          formatter: ({ value }) => {
            return `${value}%\n总占比`;
          },
        },
      },
      labelLine: { show: false },
      data: [],
    },
  ],
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
export const renderTopChart = (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });

  debounceChart(myChart);

  myChart.setOption(option);

  // 轮播数据
  const { pause, resume } = useIntervalFn(() => {
    currentIndex.value = currentIndex.value >= totalIndex.value ? 0 : currentIndex.value;

    resetSelect(myChart);
    selectSector(myChart, currentIndex.value);

    currentIndex.value++;
  }, 1000);

  // 鼠标移入移出暂停动画
  element.value.addEventListener('mouseenter', () => {
    resetSelect(myChart);
    pause();
  });
  element.value.addEventListener('mouseleave', () => {
    resume();
  });
};

/** 更新图表数据 */
export const updateTopChart = (data: any) => {
  totalIndex.value = data.length;

  const series = myChart.getOption().series;
  series[0].data = data;
  myChart.setOption({ series });
};
