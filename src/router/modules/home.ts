import Layout from '@/layout/index.vue';
import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteConfigsTable[] = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/index.vue'),
    meta: { transition: 'fade', title: '后台管理系统大标题' },
  },

  {
    path: '/business-supervision',
    name: 'manageForms',
    component: () => import('@/views/business-supervision/index.vue'),
    meta: { title: '智慧经营监管中心', subtitle: '园区经营可视化' },
  },

  {
    path: '/smart-park',
    name: 'smartParking',
    component: () => import('@/views/smart-park/index.vue'),
    meta: { title: '智慧智能监管中心', subtitle: '车辆监控中心' },
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
