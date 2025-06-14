import type { AcceptedPlugin } from 'postcss';
import postCssPxToViewport8plugin from 'postcss-px-to-viewport-8-plugin';
import type { CSSOptions } from 'vite';

import { wrapperEnv } from './utils';

export const css = (mode: string): CSSOptions => {
  const plugins: AcceptedPlugin[] = [usePostCssPxToViewport8plugin(mode)];

  return {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/minix/sidebar" as  *;`,
      },
    },
    postcss: {
      plugins: plugins.filter(Boolean),
    },
  };
};

/** 是否启用px转换vw插件 */
const usePostCssPxToViewport8plugin = (mode: string): AcceptedPlugin => {
  const { VITE_POST_CSS_PX_TO_VIEWPORT8_PLUGIN } = wrapperEnv(mode, 'VITE');

  const cssPxToVw = postCssPxToViewport8plugin({
    unitToConvert: 'px',
    viewportWidth: 1920, // 设计稿的宽度
    unitPrecision: 5, // 单位转换后保留的精度
    propList: ['*'], // 能转化为vw的属性列表
    viewportUnit: 'vw', // 希望使用的视口单位
    fontViewportUnit: 'vw', // 字体使用的视口单位
    selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
    minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
    mediaQuery: true, // 媒体查询里的单位是否需要转换单位
    replace: true, //  是否直接更换属性值，而不添加备用属性
    exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
    landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    landscapeUnit: 'vw', // 横屏时使用的单位
    landscapeWidth: 1024, // 横屏时使用的视口宽度
  });

  switch (VITE_POST_CSS_PX_TO_VIEWPORT8_PLUGIN) {
    case 'postcss-px-to-viewport-8-plugin':
      return cssPxToVw;
  }
};
