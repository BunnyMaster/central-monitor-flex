import type { Ref } from 'vue';

import echarts from '@/plugins/echarts';
import { debounceChart } from '@/utils/chart';

let myChart = null;

const option = {
  grid: { left: '4%', right: '4%', bottom: '19%', top: '20%', containLabel: true },
  roam: true,
  geo: {
    map: 'jiangsu',
    roam: true,
    // 长宽比
    aspectScale: 1,
    zoom: 1.4,
    // label: { show: true, color: '#fff', fontSize: 12 },
    itemStyle: {
      areaColor: '#113F7D',
      borderColor: '#2678B6',
      borderWidth: 1,
    },
    emphasis: {
      // 鼠标放上是否显示地区名称
      label: { show: false, color: '#FFD700', fontSize: 14 },
      itemStyle: { areaColor: '#1E90FF' },
    },
  },
  series: [
    // {
    //   type: 'map',
    //   map: 'jiangsu',
    //   label: {
    //     show: true,
    //     color: '#fff',
    //     fontSize: 12,
    //     formatter: '{b}',
    //     rich: {
    //       bg: {
    //         backgroundColor: 'rgba(0,0,0,0.5)',
    //         borderRadius: 4,
    //         padding: [2, 4],
    //       },
    //     },
    //   },
    //   itemStyle: {
    //     areaColor: '#113F7D',
    //     borderColor: '#2678B6',
    //     borderWidth: 1,
    //   },
    //   emphasis: {
    //     label: {
    //       show: true,
    //       formatter: ['{bg|{b}}'].join('\n'),
    //     },
    //     itemStyle: {
    //       areaColor: '#1E90FF',
    //     },
    //   },
    //   data: [
    //     { name: '南京市', value: 100 },
    //     { name: '苏州市', value: 95 },
    //     { name: '无锡市', value: 90 },
    //     { name: '常州市', value: 85 },
    //     { name: '镇江市', value: 80 },
    //     { name: '扬州市', value: 75 },
    //     { name: '泰州市', value: 70 },
    //     { name: '南通市', value: 65 },
    //     { name: '盐城市', value: 60 },
    //     { name: '淮安市', value: 55 },
    //     { name: '连云港市', value: 50 },
    //     { name: '徐州市', value: 45 },
    //     { name: '宿迁市', value: 40 },
    //   ],
    // },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      symbolSize: 8,
      rippleEffect: {
        brushType: 'stroke',
        scale: 5,
        period: 3,
      },
      itemStyle: {
        color: '#FFD700',
        shadowBlur: 10,
        shadowColor: '#FFD700',
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
        color: '#FFD700',
        fontSize: 12,
        fontWeight: 'bold',
      },
      data: [
        // 江苏省各市中心坐标 [经度, 纬度, 数据值]
        { name: '南京市', value: [118.7674, 32.0415, 100] },
        { name: '苏州市', value: [120.6196, 31.2994, 95] },
        { name: '无锡市', value: [120.3017, 31.5747, 90] },
        { name: '常州市', value: [119.947, 31.7799, 85] },
        { name: '镇江市', value: [119.4528, 32.2044, 80] },
        { name: '扬州市', value: [119.421, 32.3932, 75] },
        { name: '泰州市', value: [119.915, 32.4849, 70] },
        { name: '南通市', value: [120.8646, 32.0162, 65] },
        { name: '盐城市', value: [120.1399, 33.3776, 60] },
        { name: '淮安市', value: [119.0213, 33.5975, 55] },
        { name: '连云港市', value: [119.1788, 34.6, 50] },
        { name: '徐州市', value: [117.1848, 34.2618, 45] },
        { name: '宿迁市', value: [118.2752, 33.963, 40] },
      ],
      zlevel: 1,
    },
  ],
  visualMap: {
    min: 0,
    max: 100,
    text: ['高', '低'],
    realtime: false,
    calculable: true,
    inRange: { color: ['#50a3ba', '#eac736', '#d94e5d'] },
    textStyle: { color: '#fff' },
  },
};

/** 渲染图表 */
export const renderBodyChart = async (element: Ref<HTMLDivElement>) => {
  myChart = echarts.init(element.value, null, {
    renderer: 'canvas',
    devicePixelRatio: window.devicePixelRatio,
  });
  const json = await (
    await fetch('https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json')
  ).json();

  debounceChart(myChart);
  echarts.registerMap('jiangsu', json);
  myChart.setOption(option);
};

/** 更新图表数据 */
export const updateBodyChart = (data: any) => {
  const series = myChart.getOption().series;
  series[0].data = data;
  myChart.setOption({ series });
};
