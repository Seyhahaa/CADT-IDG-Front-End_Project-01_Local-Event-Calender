import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerComponents } from '@/components/ui';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// Register UI components globally
registerComponents(app);

app.use(createPinia());
app.use(router);

app.mount('#app');
