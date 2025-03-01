import type { RouteComponent } from 'vue-router';

/**
 * @description 完整子路由的`meta`配置表
 */
interface CustomizeRouteMeta {
  title: string;
  subtitle: string;
  transition: string;
}

/**
 * @description 整体路由配置表（包括完整子路由）
 */
interface RouteConfigsTable {
  /** 路由地址 `必填` */
  path: string;
  /** 路由名字（保持唯一）`可选` */
  name?: string;
  /** `Layout`组件 `可选` */
  component?: RouteComponent;
  /** 路由重定向 `可选` */
  redirect?: string;
  meta?: CustomizeRouteMeta;
  /** 子路由配置项 */
  children?: Array<RouteConfigsTable>;
}

export { RouteConfigsTable };
