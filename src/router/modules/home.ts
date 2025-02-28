import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: Layout,
    // redirect: '/dashboard',
    children: [
      // {
      // 	path: 'dashboard',
      // 	component: () => import('@/views/index.vue'),
      // 	// 用于 keep-alive 功能，需要与 SFC 中自动推导或显式声明的组件名称一致
      // 	// 参考文档: https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
      // 	name: 'Dashboard',
      // 	meta: {
      // 		title: 'dashboard',
      // 		icon: 'homepage',
      // 		affix: true,
      // 		keepAlive: true,
      // 	},
      // },
    ],
  },
  {
    path: '/smart-parking',
    name: 'smartParking',
    component: () => import('@/views/smart-parking/index.vue'),
  },
];

export default routes;
