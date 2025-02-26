import UnoCssIcons from '@unocss/preset-icons';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { presetIcons, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';
import type { PluginOption } from 'vite';
import removeConsole from 'vite-plugin-remove-console';
import Inspector from 'vite-plugin-vue-inspector';

import { useCDN } from './cdn';
import { viteConsoleLog } from './info';
import { compressPack, report } from './utils';

export const plugins = (mode): PluginOption[] => {
  return [
    vue(),
    vueJsx(),
    Inspector(),
    report(),
    removeConsole(),
    useCDN(mode),
    viteConsoleLog(mode),
    UnoCSS({
      hmrTopLevelAwait: false,
      inspector: true, // 控制台是否打印 UnoCSS inspector
      presets: [
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        UnoCssIcons({
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block',
          },
        }),
        presetUno(),
      ],
    }),
    compressPack(mode),
  ];
};
