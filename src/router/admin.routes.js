import AdminLayout from '@/layouts/AdminLayout.vue';

export const adminRoutes = {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
        {
            path: '',
            name: 'admin-dashboard',
            component: () => import('@/views/admin/Dashboard.vue'),
        },
        {
            path: 'users',
            name: 'admin-users',
            component: () => import('@/views/admin/UsersManagement.vue'),
            meta: { title: 'User Management' },
        },
        {
            path: 'events',
            name: 'admin-events',
            component: () => import('@/views/admin/events/Events.vue'),
        },
        {
            path: 'events/create',
            name: 'admin-event-create',
            component: () => import('@/views/admin/events/EventForm.vue'),
        },
        {
            path: 'events/:id/edit',
            name: 'admin-event-edit',
            component: () => import('@/views/admin/events/EventForm.vue'),
        },
        {
            path: 'events/:id',
            name: 'admin-event-detail',
            component: () => import('@/views/admin/events/EventDetail.vue'),
        },
        {
            path: 'categories',
            name: 'admin-categories',
            component: () => import('@/views/admin/categories/Categories.vue'),
        },
        {
            path: 'categories/create',
            name: 'admin-category-create',
            component: () => import('@/views/admin/categories/CategoryForm.vue'),
        },
        {
            path: 'categories/:id/edit',
            name: 'admin-category-edit',
            component: () => import('@/views/admin/categories/CategoryForm.vue'),
        },
        {
            path: 'categories/:id',
            name: 'admin-category-detail',
            component: () => import('@/views/admin/categories/CategoryDetail.vue'),
        },
        {
            path: 'profile',
            children: [
                {
                    path: '',
                    name: 'admin-profile',
                    component: () => import('@/views/admin/AdminProfile.vue'),
                },
                {
                    path: 'view',
                    name: 'admin-profile-view',
                    component: () => import('@/views/admin/AdminProfile.vue'),
                },
                {
                    path: 'edit',
                    name: 'admin-profile-edit',
                    component: () => import('@/views/profile/ProfileEdit.vue'),
                },
            ],
        },
        {
            path: 'settings',
            children: [
                {
                    path: '',
                    name: 'admin-settings',
                    component: () => import('@/views/settings/SettingsView.vue'),
                },
                {
                    path: 'security',
                    name: 'admin-security-settings',
                    component: () => import('@/views/settings/SecuritySettings.vue'),
                },
                {
                    path: 'notifications',
                    name: 'admin-notification-settings',
                    component: () => import('@/views/settings/NotificationSettings.vue'),
                },
                {
                    path: 'privacy',
                    name: 'admin-privacy-settings',
                    component: () => import('@/views/settings/PrivacySettings.vue'),
                },
            ],
        },
        {
            path: 'calendar',
            name: 'admin-calendar',
            component: () => import('@/views/admin/Calendar.vue'),
        },
        {
            path: 'reports',
            name: 'admin-reports',
            component: () => import('@/views/admin/Reports.vue'),
        },
    ],
};
