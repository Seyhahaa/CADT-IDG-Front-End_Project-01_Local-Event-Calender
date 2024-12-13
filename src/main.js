import './assets/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerComponents } from '@/components/ui';

import App from './App.vue';
import router from './router';
import { useAuthStore } from './stores/auth';

const app = createApp(App);
router.beforeEach((to, from,next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
        console.log(authStore.token)
        next({name: 'login'})

    }
    next() // redirect to login page
    
  })

// Register UI components globally
registerComponents(app);

app.use(createPinia());
app.use(router);

app.mount('#app');
