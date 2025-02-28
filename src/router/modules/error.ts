import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true },
  },
];

export default routes;
