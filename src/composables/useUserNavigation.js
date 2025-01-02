import {
    UserCircleIcon,
    Cog6ToothIcon,
    BellIcon,
    ShieldCheckIcon,
    KeyIcon,
    UserIcon,
    HomeIcon,
    CalendarIcon,
    StarIcon,
    ClipboardDocumentListIcon,
    BuildingStorefrontIcon,
} from '@heroicons/vue/24/outline';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

export function useUserNavigation() {
    const route = useRoute();
    const userStore = useUserStore();
    const isOrganizer = ref(true); // TODO: Replace with actual auth check

    const isCurrentRoute = (path) => route.path === path;

    // Base navigation items
    const baseNavigation = [
        { name: 'Dashboard', to: '/user', icon: HomeIcon, current: isCurrentRoute('/user') },
        {
            name: 'Events',
            to: '/user/events',
            icon: CalendarIcon,
            current: isCurrentRoute('/user/events'),
        },
        {
            name: 'Calendar',
            to: '/user/calendar',
            icon: CalendarIcon,
            current: isCurrentRoute('/user/calendar'),
        },

    ];

    // Settings navigation
    const settingsNavigation = [
        
    ];

    // Organizer-specific navigation items
    const organizerNavigation = [
        
    ];

    // Main navigation computed property
    const navigation = computed(() => {
        const nav = [...baseNavigation];

        // Add settings navigation
        nav.push(...settingsNavigation);

        if (isOrganizer.value) {
            nav.push({ name: 'Organizer', type: 'divider' });
            nav.push(...organizerNavigation);
        } else {
            nav.push({
                name: 'Become an Organizer',
                to: '/user/become-organizer',
                icon: UserGroupIcon,
                current: isCurrentRoute('/user/become-organizer'),
            });
        }

        return nav;
    });

    const userNavigation = computed(() => [
        {
            name: 'Your Profile',
            to: '/user/profile',
            current: isCurrentRoute('/user/profile'),
        },
        {
            name: 'Settings',
            to: '/user/settings',
            current: route.path.startsWith('/user/settings'),
        },
        {
            name: 'Admin Page',
            to: '/admin',
            current: route.path === '/admin',
        },
        {
            name: 'Sign out',
            to: '#',
            onClick: () => {
                userStore.clearUser();
                window.location.href = '/login';
            },
        },
    ]);

    return {
        navigation,
        userNavigation,
        isCurrentRoute,
        isOrganizer,
    };
}
