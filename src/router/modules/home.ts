import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: Layout,
    meta: { transition: 'fade' },
  },
  {
    path: '/smart-parking',
    name: 'smartParking',
    component: () => import('@/views/smart-parking/index.vue'),
  },
];

export default routes;
