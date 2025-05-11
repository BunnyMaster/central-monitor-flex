import { HeaderTypeEnum } from '@/enums/HeaderTypeEnum';
import type { RouteConfigsTable } from '@/types/router/Route';

const routes: RouteConfigsTable[] = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/welcome/index.vue'),
    meta: {
      title: '后台管理系统标题',
      headerType: HeaderTypeEnum.default,
    },
  },
  {
    path: '/smart-park',
    name: 'SmartPark',
    component: () => import('@/views/smart-park/index.vue'),
    meta: {
      title: '智慧智能监管中心',
      subtitle: '车辆监控中心',
      headerType: HeaderTypeEnum.subtitle,
      transition: {
        enter: 'animate__bounceInUp animate__faster',
        leave: 'animate__bounceOutUp',
      },
    },
  },
  {
    path: '/data-analyse',
    name: 'DataAnalyse',
    component: () => import('@/views/data-analyse/index.vue'),
    meta: {
      title: '数据分析',
      subtitle: '数据分析中心',
      headerType: HeaderTypeEnum.subtitle,
      transition: {
        enter: 'animate__bounceIn animate__faster',
        leave: 'animate__bounceOut',
      },
    },
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/views/community/index.vue'),
    meta: {
      title: '社区',
      subtitle: '社区可视化中心',
      headerType: HeaderTypeEnum.subtitle,
      transition: {
        enter: 'animate__bounceIn animate__faster',
        leave: 'animate__bounceOut',
      },
    },
  },
  {
    path: '/business-supervision',
    name: 'BusinessSupervision',
    component: () => import('@/views/business-supervision/index.vue'),
    meta: {
      title: '智慧经营监管中心',
      subtitle: '园区经营可视化',
      headerType: HeaderTypeEnum.subtitle,
    },
  },
  {
    path: '/big-data',
    name: 'BigData',
    component: () => import('@/views/big-data/index.vue'),
    meta: {
      title: '大数据可视化中心',
      subtitle: '大数据可视化',
      headerType: HeaderTypeEnum.subtitle,
    },
  },
];

export default routes;
