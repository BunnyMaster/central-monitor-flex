import vue from '@vitejs/plugin-vue';
import type { PluginOption } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspector from 'vite-plugin-vue-inspector';
import { compressPack, report } from './utils';
import removeConsole from 'vite-plugin-remove-console';
import { useCDN } from './cdn';
import { viteConsoleLog } from './info';

export const plugins = (mode): PluginOption[] => {
	return [vue(), vueJsx(), Inspector(), report(), removeConsole(), useCDN(mode), viteConsoleLog(mode), compressPack(mode)];
};
