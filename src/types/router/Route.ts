import type { RouteComponent } from 'vue-router';

/**
 * @description 动画入场和离场
 */
interface Transition {
  enter?: string;
  leave?: string;
}

/**
 * @description 完整子路由的`meta`配置表
 */
interface CustomizeRouteMeta {
  title?: string;
  subtitle?: string;
  transition?: Transition;
  hidden?: boolean;
  /* 头部类型 */
  headerType?: any;
}

/**
 * @description 整体路由配置表（包括完整子路由）
 */
export interface RouteConfigsTable {
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
