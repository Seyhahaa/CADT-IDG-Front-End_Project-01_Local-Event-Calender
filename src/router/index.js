import { createRouter, createWebHistory } from 'vue-router'
import LandingPageLayout from '@/layouts/LandingPageLayout.vue'

import adminRoutes from './admin-route'
import LandingPageRoute from './landing-page-route';

// Marketing routes
const landingPageRoute = {
    path: '/',
    component: LandingPageLayout,
    children: [
        ...LandingPageRoute,
    ],
}

// Admin/Dashboard routes
const adminRoute = {
    path: '/admin',
    redirect: { name: 'dashboard' },
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
        ...adminRoutes,
    ],
}

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [landingPageRoute, adminRoute],
})

export default router
