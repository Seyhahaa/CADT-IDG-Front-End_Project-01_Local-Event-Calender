
import { createRouter, createWebHistory } from 'vue-router';
import LandingPageLayout from '@/layouts/LandingPageLayout.vue';
import { adminRoutes } from './admin.routes';
import LandingPageRoute from './landing-page.routes';
import { userRoutes } from './user.routes';
import Login from '@/components/Login.vue';
import Admin from '@/Pages/Admin.vue';

// Marketing routes
const landingPageRoute = {
    path: '/',
    component: LandingPageLayout,
    meta: { requiresAuth: false, isRedirect: false },
    children: [...LandingPageRoute],
};

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        landingPageRoute,

    { path: '/admin',
        
        component: Admin},
        adminRoutes,
        userRoutes,
        // Catch-all / 404 route
        { path: '/login', component: Login,meta: { requiresAuth: false, isRedirect: true },name: 'login'},

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/components/pageNotFound.vue'),
        },
    ],
});

// Navigation guard for auth
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // Add your auth check logic here
        // For now, just proceeding
        next();
    } else {
        next();
    }
});

export default router;
