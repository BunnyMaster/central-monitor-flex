import { defineFakeRoute } from 'vite-plugin-fake-server/client';

const randomNumber = (range: number = 100) => {
  return parseInt((Math.random() * range).toFixed(0));
};

export default defineFakeRoute([
  // 设备总数
  {
    url: '/api/community/devices-amount',
    method: 'GET',
    response: () => ({
      code: 200,
      data: [
        { name: '设备类型一', outside: randomNumber(), connect: randomNumber() },
        { name: '设备类型二', outside: randomNumber(), connect: randomNumber() },
        { name: '设备类型三', outside: randomNumber(), connect: randomNumber() },
        { name: '设备类型四', outside: randomNumber(), connect: randomNumber() },
      ],
      message: '操作成功',
    }),
  },
  // 预警概览
  {
    url: '/api/community/alarms-overview',
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        total: 500000,
        list: Array(4)
          .fill(0)
          .map((_, index) => ({ name: `name-${index}`, value: randomNumber(9999) })),
      },
      message: '操作成功',
    }),
  },
  // 中间顶部区域
  {
    url: '/api/community/community-statistics',
    method: 'GET',
    response: () => ({
      code: 200,
      data: Array(4)
        .fill(0)
        .map((_, index) => ({
          name: `统计人口-${index + 1}`,
          total: randomNumber(9999),
          subtitle: `常驻人口${index + 1}`,
          subPercent: `${randomNumber()}%`,
          subTotal: randomNumber(99999),
        })),
      message: '操作成功',
    }),
  },
  // 中间区域设备运行状态
  {
    url: '/api/community/devices-status',
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        devcies: [
          {
            title: '正常运行总数',
            total: randomNumber(100),
          },
          {
            title: '故障总数',
            total: randomNumber(100),
          },
          {
            title: '故障总数',
            total: randomNumber(100),
          },
          {
            title: '故障总数',
            total: randomNumber(100),
          },
        ],
        security: randomNumber(),
      },
      message: '操作成功',
    }),
  },
]);
