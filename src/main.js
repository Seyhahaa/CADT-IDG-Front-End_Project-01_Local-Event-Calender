import './assets/style.css';
import '../public/assets/css/style.css';
import '../public/assets/css/all.min.css';
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/bootstrap-select.min.css'
import '../public/assets/css/jquery.fancybox.min.css'
import '../public/assets/css/perfect-scrollbar.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/responsive.css'

import '../public/assets/css/colors/color.css'
import '../public/assets/css/colors/color2.css'
import '../public/assets/css/colors/color3.css'
import '../public/assets/css/colors/color4.css'
import '../public/assets/css/colors/color5.css'
import '../public/assets/css/colors/color6.css'
import '../public/assets/css/colors/color7.css'
import '../public/assets/css/colors/color8.css'
import '../public/assets/css/colors/color9.css'
import '../public/assets/css/colors/color10.css'

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
    else if(to.meta.isRedirect && authStore.isAuthenticated ){
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
