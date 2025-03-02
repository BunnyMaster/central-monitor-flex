import type { App } from 'vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

import error from '@/router/modules/error';
import remaining from '@/router/modules/remaining';

// 静态路由
const routes: RouteRecordRaw[] = [...remaining, ...error];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
});

/** 全局注册 router */
export const setupRouter = (app: App<Element>) => {
  app.use(router);
};

/** 重置路由 */
export const resetRouter = () => {
  router.replace({ path: '/' }).then();
};

export default router;
