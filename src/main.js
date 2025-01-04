import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerComponents } from '@/components/ui';

import App from './App.vue';
import router from './router';
import { useAuthStore } from './stores/auth';
import ToastPlugin from 'vue-toast-notification';

const app = createApp(App);
router.beforeEach((to, from,next) => {
    const authStore = useAuthStore()
    if(to.meta.requiresAuth && !authStore.isAuthenticated){
     next({name: 'login'})
    }
    else if(to.meta.isRedirect && authStore.isAuthenticated){
     next({name: 'user-dashboard'})
    }
    next()
  })
  

// Register UI components globally
registerComponents(app);

app.use(createPinia());
app.use(ToastPlugin);
app.use(router);

app.mount('#app');
