import { HeaderTypeEnum } from '@/enums/HeaderTypeEnum';
import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteConfigsTable[] = [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/index.vue'),
    meta: { transition: 'fade', title: '后台管理系统标题', headerType: HeaderTypeEnum.default },
  },
  {
    path: '/smart-park',
    name: 'smartPark',
    component: () => import('@/views/smart-park/index.vue'),
    meta: {
      title: '智慧智能监管中心',
      subtitle: '车辆监控中心',
      headerType: HeaderTypeEnum.subtitle,
    },
  },
  {
    path: '/data-analyse',
    name: 'dataAnalyse',
    component: () => import('@/views/data-analyse/index.vue'),
    meta: {
      title: '数据分析',
      subtitle: '车辆监控中心',
      headerType: HeaderTypeEnum.subtitle,
    },
  },
  {
    path: '/business-supervision',
    name: 'businessSupervision',
    component: () => import('@/views/business-supervision/index.vue'),
    meta: {
      title: '智慧经营监管中心',
      subtitle: '园区经营可视化',
      headerType: HeaderTypeEnum.subtitle,
    },
  },
  {
    path: '/big-data',
    name: 'bigData',
    component: () => import('@/views/big-data/index.vue'),
    meta: {
      title: '大数据可视化中心',
      subtitle: '大数据可视化',
      headerType: HeaderTypeEnum.subtitle,
    },
  },
];

export default routes;
