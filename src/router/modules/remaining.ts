import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import home from '@/router/modules/home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: 'welcome',
    children: [...home],
  },
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
