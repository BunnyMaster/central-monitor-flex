import UnoCssIcons from '@unocss/preset-icons';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetIcons } from 'unocss';
import UnoCSS from 'unocss/vite';
import type { PluginOption } from 'vite';
import { vitePluginFakeServer } from 'vite-plugin-fake-server';
import removeConsole from 'vite-plugin-remove-console';
import vueDevTools from 'vite-plugin-vue-devtools';
import Inspector from 'vite-plugin-vue-inspector';

import { useCDN } from './cdn';
import { viteConsoleLog } from './info';
import { compressPack, report, wrapperEnv } from './utils';

export const plugins = (mode: string): PluginOption[] => {
  return [
    vue(),
    vueJsx(),
    Inspector(),
    report(),
    removeConsole(),
    vueDevTools(),
    useCDN(mode),
    viteConsoleLog(mode),
    UnoCSS({
      hmrTopLevelAwait: false,
      inspector: true, // 控制台是否打印 UnoCSS inspector
      presets: [
        presetIcons({
          prefix: '',
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        UnoCssIcons({
          prefix: '',
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    compressPack(mode),
    useMock(mode),
  ];
};

/** MOCK 服务 */
const useMock = (mode: string) => {
  const { VITE_MOCK_DEV_SERVER } = wrapperEnv(mode);

  return VITE_MOCK_DEV_SERVER
    ? vitePluginFakeServer({
        logger: true,
        include: 'mock',
        infixName: false,
        enableDev: true,
        // enableProd: true,
        // build: true,
        // http2: true,
        // enableProd: true,
        // build: true,
        // http2: true,
      })
    : null;
};
