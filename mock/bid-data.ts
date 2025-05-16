import { defineFakeRoute } from 'vite-plugin-fake-server';

const BASE_URL = '/mock/big-data';

const randomNumber = (range: number = 100) => {
  return parseInt((Math.random() * range).toFixed(0));
};

export default defineFakeRoute([
  // 规模效益
  {
    url: `${BASE_URL}/scale-benfit`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        total: randomNumber(200),
        income: randomNumber(999999999),
        incomeChain: randomNumber(150),
        expend: randomNumber(999999999),
        expendChain: randomNumber(150),
      },
      message: '操作成功',
    }),
  },
  // 经营收入
  {
    url: `${BASE_URL}/year-income`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        list: Array(4)
          .fill(0)
          .map((_, index) => ({
            title: `经营总收入-${index + 1}`,
            amount: randomNumber(9999999),
            percent: randomNumber(),
          })),
        endTime: new Date().getTime(),
      },
      message: '操作成功',
    }),
  },
  // 园区规划
  {
    url: `${BASE_URL}/chart-plan`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: [
        Array(12)
          .fill(0)
          .map(() => {
            const num = randomNumber().toFixed(2);
            return parseInt(num);
          }),
        Array(12)
          .fill(0)
          .map(() => {
            const num = randomNumber().toFixed(2);
            return parseInt(num);
          }),
      ],
      message: '操作成功',
    }),
  },
  // 税收概览
  {
    url: `${BASE_URL}/revenue-overview`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: Array(12)
        .fill(0)
        .map(() => randomNumber(9999)),
      message: '操作成功',
    }),
  },
  // 园区进出口额
  {
    url: `${BASE_URL}/parks/import-export`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        amount: randomNumber(99999999),
        import: randomNumber(99999),
        export: randomNumber(99999),
      },
      message: '操作成功',
    }),
  },
  // 企业信息
  {
    url: `${BASE_URL}/enterprise-info`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        // 报税金额
        taxAmount: randomNumber(999999),
        // 税收总金额
        taxTotalAmount: randomNumber(99999),
        // 企业数量
        enterpriseCount: randomNumber(9999),
        // 国营企业（强调国家控股）
        stateOwnedEnterprise: randomNumber(9999),
        // 私营企业
        privateEnterprise: randomNumber(9999),
        // 投资总金额
        investmentTotal: randomNumber(10000),
      },
      message: '操作成功',
    }),
  },
  // 园区规划
  {
    url: `${BASE_URL}/parks/areas`,
    method: 'GET',
    response: () => ({
      code: 200,
      data: Array(9)
        .fill(0)
        .map(() => ({
          title: randomNumber(99999.99),
          summary: '建成投产面积',
        })),
      message: '操作成功',
    }),
  },
]);
