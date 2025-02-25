import type { App } from 'vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

export const Layout = () => import('@/layout/index.vue');

// 静态路由
const routes: RouteRecordRaw[] = [
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
		path: '/404',
		component: () => import('@/views/error-page/404.vue'),
		meta: { hidden: true },
	},
];
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior: () => ({ x: 0, y: 0 }),
});

/** 全局注册 router */
export const setUpRouter = (app: App<Element>) => {
	app.use(router);
};

/** 重置路由 */
export const resetRouter = () => {
	router.replace({ path: '/' }).then();
};
export default router;
