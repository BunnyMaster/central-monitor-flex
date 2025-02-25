import { defineConfig } from "vite";
import { plugins } from "./build/plugins";
import { resolve } from "./build/resolve";
import { buildEnv } from "./build/buildEnv";
import { define } from "./build/define";
import { root, wrapperEnv } from "./build/utils";
import { server } from "./build/server";
import { exclude, include } from "./build/optimize";
import postCssPxToViewport8plugin from "postcss-px-to-viewport-8-plugin";

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const env = wrapperEnv(mode, "VITE");

  return {
    root,
    base: env.VITE_PUBLIC_PATH,
    define: define(),
    plugins: plugins(mode),
    resolve: resolve(),
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: "import { h } from 'vue';",
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToViewport8plugin({
            unitToConvert: "px",
            viewportWidth: 1920, // 设计稿的宽度
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ["*"], // 能转化为vw的属性列表
            viewportUnit: "vw", // 希望使用的视口单位
            fontViewportUnit: "vw", // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: "vw", // 横屏时使用的单位
            landscapeWidth: 1024, // 横屏时使用的视口宽度
          }),
        ],
      },
    },
    logLevel: "info",
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,
    build: buildEnv(),
    server: server(mode),
    preview: server(mode),
    optimizeDeps: { include, exclude },
  };
});
