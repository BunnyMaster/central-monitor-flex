import Layout from '@/layout/index.vue';
import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteConfigsTable[] = [
  {
    path: '/',
    name: '/',
    component: Layout,
    meta: { transition: 'fade', title: '后台管理系统大标题' },
  },
  {
    path: '/smart-parking',
    name: 'smartParking',
    component: () => import('@/views/smart-parking/index.vue'),
    meta: { title: '智慧智能监管中心', subtitle: '车辆监控中心' },
  },
];

export default routes;
