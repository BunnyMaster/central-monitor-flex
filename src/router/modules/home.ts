import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteConfigsTable[] = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/index.vue'),
    meta: { transition: 'fade', title: '后台管理系统大标题' },
  },
  {
    path: '/smart-parking',
    name: 'smartParking',
    component: () => import('@/views/smart-parking/index.vue'),
    meta: { title: '智慧智能监管中心', subtitle: '车辆监控中心' },
  },
  {
    path: '/manage-forms',
    name: 'manageForms',
    component: () => import('@/views/manage-forms/index.vue'),
    meta: { title: '智慧经营监管中心', subtitle: '园区经营可视化' },
  },
];

export default routes;
