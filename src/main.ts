import { createApp } from 'vue';
import App from './App.vue';
import Preview from 'vite-plugin-vue-component-preview/client';

const app = createApp(App);
app.use(Preview);
app.mount('#app');
