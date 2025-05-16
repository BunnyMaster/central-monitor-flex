import type { ServerOptions } from 'vite';

import { wrapperEnv } from './utils';

/* 开发服务配置 */
export const server = (mode: string) => {
  const { VITE_PORT, VITE_APP_URL, VITE_STRICT_PORT } = wrapperEnv(mode);

  const options: ServerOptions = {
    strictPort: VITE_STRICT_PORT,
    port: VITE_PORT,
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: VITE_APP_URL,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/api'),
      },
      '/mock': {
        target: VITE_APP_URL,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/mock/, '/mock'),
      },
    },
    // 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
    warmup: {
      clientFiles: ['./index.html', './src/{views,components}/*'],
    },
  };

  return options;
};
