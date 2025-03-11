import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteConfigsTable[] = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/index.vue'),
    meta: { transition: 'fade', title: '后台管理系统大标题' },
  },
  {
    path: '/smart-park',
    name: 'smartPark',
    component: () => import('@/views/smart-park/index.vue'),
    meta: { title: '智慧智能监管中心', subtitle: '车辆监控中心' },
  },
  {
    path: '/business-supervision',
    name: 'businessSupervision',
    component: () => import('@/views/business-supervision/index.vue'),
    meta: { title: '智慧经营监管中心', subtitle: '园区经营可视化' },
  },
  {
    path: '/big-data',
    name: 'bigData',
    component: () => import('@/views/big-data/index.vue'),
    meta: { title: '大数据可视化中心', subtitle: '大数据可视化' },
  },
];

export default routes;
