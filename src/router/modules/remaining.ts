import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import home from '@/router/modules/home';
import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteRecordRaw[] | RouteConfigsTable[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: 'welcome',
    children: [
      ...home,
      {
        path: '/redirect',
        component: Layout,
        meta: { hidden: true },
        children: [
          {
            path: '/:path(.*)',
            component: () => import('@/views/redirect/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录后台系统' },
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
