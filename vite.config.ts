import { defineConfig } from 'vite';

import { buildEnv } from './build/buildEnv';
import { css } from './build/css';
import { define } from './build/define';
import { exclude, include } from './build/optimize';
import { plugins } from './build/plugins';
import { resolve } from './build/resolve';
import { server } from './build/server';
import { root, wrapperEnv } from './build/utils';

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const env = wrapperEnv(mode, 'VITE');

  return {
    root,
    base: env.VITE_PUBLIC_PATH,
    define: define(),
    plugins: plugins(mode),
    resolve: resolve(),
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue';",
    },
    logLevel: 'info',
    css: css(mode),
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,
    build: buildEnv(),
    server: server(mode),
    preview: server(mode),
    optimizeDeps: { include, exclude },
  };
});
