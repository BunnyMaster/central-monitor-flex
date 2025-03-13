import 'animate.css';
import '@unocss/reset/tailwind-compat.css';
import 'uno.css';
import 'virtual:unocss-devtools';
import './assets/styles/global.scss';

import { createApp } from 'vue';

import plugins from '@/plugins';

import App from './App.vue';

const app = createApp(App);

app.use(plugins).mount('#app');
