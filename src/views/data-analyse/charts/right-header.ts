import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;
const myData = [
  {
    value: 137,
    name: '数学',
  },
  {
    value: 103,
    name: '语文',
  },
  {
    value: 124,
    name: '英语',
  },
  {
    value: 180,
    name: '理综',
  },
];

const option = {
  color: ['#1aa3ff', '#04f9fa', '#16bd87', '#c961ff', '#7cfc12'],
  tooltip: {
    trigger: 'item',
    formatter: '{b}：{c} ({d}%)',
  },
  legend: {
    bottom: '20%',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#fff',
      fontSize: '14',
    },
  },
  series: [
    // 内圈
    {
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['33.5%', '35.5%'],
      silent: true, //取消高亮
      label: { show: false, position: 'center' },
      data: myData,
    },
    // 外圈
    {
      type: 'pie',
      center: ['50%', '40%'],
      radius: ['40%', '50%'],
      label: { show: false, position: 'center' },
      emphasis: {
        label: {
          show: true,
          fontSize: 33,
          lineHeight: 45,
          formatter: (params) => {
            return '{name|' + params.name + '}\n{value|' + params.value + '}';
          },
          rich: {
            name: {
              color: '#fff',
            },
            value: {
              color: '#04F9FA',
            },
          },
        },
      },
      data: myData,
    },
  ],
};
/** 渲染图表 */
export const renderEcharts = (element: Ref<HTMLDivElement>) => {
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
