import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
];

export default routes;
