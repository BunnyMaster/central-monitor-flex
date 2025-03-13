import { defineFakeRoute } from 'vite-plugin-fake-server/client';

export default defineFakeRoute([
  {
    url: '/mock/users',
    method: 'GET',
    response: () => ({
      code: 200,
      data: {
        userId: 2,
        nickname: '系统管理员',
        username: 'admin',
        avatar:
          'https://foruda.gitee.com/images/1723603502796844527/03cdca2a_716974.gif?imageView2/1/w/80/h/80',
      },
      message: '操作成功',
    }),
  },
]);
