import { defineFakeRoute } from 'vite-plugin-fake-server';

const randomNumber = (range: number = 100) => {
  return parseInt((Math.random() * range).toFixed(0));
};

const mockRoadStatus = () => {
  const list = ['拥堵', '畅通'];
  const index = randomNumber(1);

  return list[index];
};

export default defineFakeRoute([
  // 道路状况
  {
    url: '/api/smart-park/road-status',
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        entrances: [
          {
            id: 1,
            name: '入卡口（西北门）',
            status: mockRoadStatus(),
          },
          {
            id: 2,
            name: '入卡口（东北门）',
            status: mockRoadStatus(),
          },
          {
            id: 3,
            name: '入卡口（东南门）',
            status: mockRoadStatus(),
          },
          {
            id: 4,
            name: '入卡口（东南门）',
            status: mockRoadStatus(),
          },
        ],
        suggest: `     高峰时段大量车流量容易造成拥堵，主要由XXX企业、XXX企业的车辆构成，
            <span>可建议XXX企业向后延迟15min错峰入园。</span>
            高峰时段大量车流量容易造成拥堵， 主要由XXX企业、XXX企业的车辆构成`,
      },
      message: '操作成功',
    }),
  },
  // 车辆监控
  {
    url: '/api/smart-park/monitor',
    method: 'GET',
    response: () => ({
      code: 200,
      data: [
        { count: randomNumber(999), door: '入卡口（西北门）', percent: randomNumber() },
        { count: randomNumber(999), door: '入卡口（东北门）', percent: randomNumber() },
        { count: randomNumber(999), door: '入卡口（东南门）', percent: randomNumber() },
        { count: randomNumber(999), door: '入卡口（东南门）', percent: randomNumber() },
      ],
      message: '操作成功',
    }),
  },
  // 车流量
  {
    url: '/api/smart-park/flow-rate',
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        overview: [
          { title: '最高进园车流量', statistics: randomNumber(9999) },
          { title: '最高出园车流量', statistics: randomNumber(9999) },
        ],
        timeline: ['02.01', '02.02', '02.03', '02.04', '02.05', '02.06', '02.22'],
        enter: Array(11)
          .fill(0)
          .map(() => randomNumber(999).toFixed(2)),
        outer: Array(11)
          .fill(0)
          .map(() => randomNumber(999).toFixed(2)),
      },
      message: '操作成功',
    }),
  },
]);
