import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspector from 'vite-plugin-vue-inspector';
import { compressPack, report } from './utils';
import removeConsole from 'vite-plugin-remove-console';
import { useCDN } from './cdn';
import { viteConsoleLog } from './info';
import UnoCSS from 'unocss/vite';
import { presetIcons, presetUno } from 'unocss';
import UnoCssIcons from '@unocss/preset-icons';

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

			presets: [
				presetIcons({
					extraProperties: {
						display: 'inline-block',
						'vertical-align': 'middle',
					},
				}),
				UnoCssIcons({
					// 其他选项
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
