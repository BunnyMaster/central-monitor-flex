import { defineFakeRoute } from 'vite-plugin-fake-server/client';

const randomNumber = (range: number = 100) => {
  return parseInt((Math.random() * range).toFixed(0));
};

export default defineFakeRoute([
  {
    url: 'community-statistics',
    method: 'GET',
    response: () => ({
      code: 200,
      data: [
        {
          name: '统计人口',
          total: randomNumber(9999),
          subtitle: `${randomNumber()}%`,
          subTotal: randomNumber(99999),
        },
        {
          name: '统计人口',
          total: randomNumber(9999),
          subtitle: `${randomNumber()}%`,
          subTotal: randomNumber(99999),
        },
        {
          name: '统计人口',
          total: randomNumber(9999),
          subtitle: `${randomNumber()}%`,
          subTotal: randomNumber(99999),
        },
        {
          name: '统计人口',
          total: randomNumber(9999),
          subtitle: `${randomNumber()}%`,
          subTotal: randomNumber(99999),
        },
      ],
      message: '操作成功',
    }),
  },
]);
