import { defineFakeRoute } from 'vite-plugin-fake-server';

const randomNumber = (range: number = 100) => {
  return parseInt((Math.random() * range).toFixed(0));
};
const BASE_URL = '/mock/data-analyse';

export default defineFakeRoute([
  // 销售设备总量
  {
    url: `${BASE_URL}/device-sales-stats`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        // 销售设备总量
        totalDeviceSales: randomNumber(9999),
        // 环比去年增长，如 "+15.2%"
        yearlyGrowthRate: randomNumber(),
      },
      message: '操作成功',
    }),
  },
  // 销售公司销售设备数量占比
  {
    url: `${BASE_URL}/company-sales-distribution`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: [
        { name: '科技有限公司', amount: randomNumber(999999), percent: randomNumber() },
        { name: '科技有限公司', amount: randomNumber(999999), percent: randomNumber() },
        { name: '科技有限公司', amount: randomNumber(999999), percent: randomNumber() },
        { name: '科技有限公司', amount: randomNumber(999999), percent: randomNumber() },
        { name: '科技有限公司', amount: randomNumber(999999), percent: randomNumber() },
      ],
      message: '操作成功',
    }),
  },
  // 品牌占有率
  {
    url: `${BASE_URL}/brands-distribution`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: [
        { value: randomNumber(), name: '品牌A' },
        { value: randomNumber(), name: '品牌B' },
        { value: randomNumber(), name: '品牌C' },
        { value: randomNumber(), name: '品牌D' },
        { value: randomNumber(), name: '品牌E' },
        { value: randomNumber(), name: '品牌F' },
        { value: randomNumber(), name: '品牌G' },
        { value: randomNumber(), name: '品牌H' },
      ],
      message: '操作成功',
    }),
  },
  // 数据展示
  {
    url: `${BASE_URL}/data-show`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: Array(3)
        .fill(0)
        .map((_, index) => ({
          name: `数据展示-${index + 1}`,
          value: randomNumber(99999),
        })),
      message: '操作成功',
    }),
  },
  // 销售设备数量区域占比
  {
    url: `${BASE_URL}/region-sales-ratio`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: Array(12)
        .fill(0)
        .map((_, index) => {
          const city = [
            '北京',
            '上海',
            '广州',
            '深圳',
            '成都',
            '杭州',
            '武汉',
            '重庆',
            '西安',
            '苏州',
            '南京',
            '长沙',
          ];
          return {
            name: city[index],
            value: randomNumber(9999),
          };
        }),
      message: '操作成功',
    }),
  },
  {
    url: `${BASE_URL}/data-ratio`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: Array(6)
        .fill(0)
        .map((_, index) => ({
          name: `数据-${index + 1}`,
          value: randomNumber(),
        })),
      message: '操作成功',
    }),
  },
]);
