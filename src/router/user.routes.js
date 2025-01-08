export const userRoutes = {
    path: '/user',
    component: () => import('@/layouts/UserLayout.vue'),
    meta: { requiresAuth: true, isRedirect: false },
    children: [
        {
            path: '',
            name: 'user-dashboard',
            component: () => import('@/views/user/Dashboard.vue'),
        },
        // Events
        {
            path: 'events',
            name: 'user-events',
            component: () => import('@/views/user/events/Events.vue'),
        },
        {
            path: 'events/:id',
            name: 'user-event-detail',
            component: () => import('@/views/user/events/EventDetail.vue'),
        },
        {
            path: 'news/:id',
            name: 'news-detail',
            component: () => import('@/views/user/events/newsDetail.vue'),
        },
        {
            path: 'events/uploadEvent',
            name: 'uploadEvent',
            component: () => import('@/views/user/events/uploadEvent.vue'),
        },
        {
            path: 'events/edit-event/:id',
            name: 'edit-event',
            component: () => import('@/views/user/events/edit-event.vue'),
        },
        {
            path: 'news/edit-news/:id',
            name: 'edit-news',
            component: () => import('@/views/user/events/editNews.vue'),
        },
        {
            path: 'events/uploadNews',
            name: 'uploadNews',
            component: () => import('@/views/user/events/uploadNews.vue'),
        },
        {
            path: '/user/event',
            name: 'events',
            component: () => import('@/views/user/event.vue'),
        },
        {
            path: '/user/news',
            name: 'News',
            component: () => import('@/views/user/news.vue'),
        },
        // Schedule/Calendar
        {
            path: 'calendar',
            name: 'user-calendar',
            component: () => import('@/views/user/Calendar.vue'),
            meta: { title: 'My Event Calendar' },
        },
        // Favorites
        {
            path: 'favorites',
            name: 'user-favorites',
            component: () => import('@/views/user/Favorites.vue'),
        },
        // Profile & Settings
        {
            path: 'profile',
            children: [
                {
                    path: '/user/profile',
                    name: 'profile',
                    component: () => import('@/views/user/UserProfile.vue'),
                },
                {
                    path: 'view',
                    name: 'user-profile-view',
                    component: () => import('@/views/user/UserProfile.vue'),
                },
                {
                    path: '/user/edit',
                    name: 'user-profile-edit',
                    component: () => import('@/views/profile/ProfileEdit.vue'),
                },
            ],
        },
        {
            path: 'settings',
            children: [
                {
                    path: '',
                    name: 'user-settings',
                    component: () => import('@/views/settings/SettingsView.vue'),
                },
                {
                    path: 'security',
                    name: 'user-security-settings',
                    component: () => import('@/views/settings/SecuritySettings.vue'),
                },
                {
                    path: 'notifications',
                    name: 'user-notification-settings',
                    component: () => import('@/views/settings/NotificationSettings.vue'),
                },
                {
                    path: 'privacy',
                    name: 'user-privacy-settings',
                    component: () => import('@/views/settings/PrivacySettings.vue'),
                },
            ],
        },
        // Organizer Routes
        {
            path: 'organizer',
            meta: { requiresOrganizerRole: true },
            children: [
                {
                    path: 'events',
                    name: 'organizer-events',
                    component: () => import('@/views/user/organizer/Events.vue'),
                    meta: { title: 'My Hosted Events' },
                },
                {
                    path: 'events/create',
                    name: 'organizer-event-create',
                    component: () => import('@/views/user/organizer/EventForm.vue'),
                    meta: { title: 'Create Event' },
                },
                {
                    path: 'events/:id/edit',
                    name: 'organizer-event-edit',
                    component: () => import('@/views/user/organizer/EventForm.vue'),
                    meta: { title: 'Edit Event' },
                },
                {
                    path: 'profile',
                    name: 'organizer-profile',
                    component: () => import('@/views/user/organizer/Profile.vue'),
                    meta: { title: 'Organizer Profile' },
                },
                {
                    path: 'dashboard',
                    name: 'organizer-dashboard',
                    component: () => import('@/views/user/organizer/Dashboard.vue'),
                    meta: { title: 'Organizer Dashboard' },
                },
            ],
        },
        // Organizer Application
        {
            path: 'become-organizer',
            name: 'become-organizer',
            component: () => import('@/views/user/BecomeOrganizer.vue'),
            meta: { title: 'Become an Organizer' },
        },
    ],
};

