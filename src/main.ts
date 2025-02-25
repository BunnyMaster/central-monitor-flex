import { createApp } from 'vue';
import 'animate.css';
import App from './App.vue';
import plugins from '@/plugins';
import '@unocss/reset/tailwind-compat.css';
import 'uno.css';
import 'virtual:unocss-devtools';

createApp(App).use(plugins).mount('#app');
