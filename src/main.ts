import 'animate.css';
import '@unocss/reset/tailwind-compat.css';
import 'uno.css';
import 'virtual:unocss-devtools';

import { createApp } from 'vue';

import plugins from '@/plugins';

import App from './App.vue';

createApp(App).use(plugins).mount('#app');
