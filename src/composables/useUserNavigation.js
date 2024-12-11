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
  UserGroupIcon,
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
    { name: 'Events', to: '/user/events', icon: CalendarIcon, current: isCurrentRoute('/user/events') },
    { name: 'Calendar', to: '/user/calendar', icon: CalendarIcon, current: isCurrentRoute('/user/calendar') },
    { name: 'Favorites', to: '/user/favorites', icon: StarIcon, current: isCurrentRoute('/user/favorites') },
  ];

  // Settings navigation
  const settingsNavigation = [
    { name: 'Settings', type: 'divider' },
    {
      name: 'General Settings',
      to: '/user/settings',
      icon: Cog6ToothIcon,
      current: isCurrentRoute('/user/settings')
    },
    {
      name: 'Security',
      to: '/user/settings/security',
      icon: ShieldCheckIcon,
      current: isCurrentRoute('/user/settings/security')
    },
    {
      name: 'Notifications',
      to: '/user/settings/notifications',
      icon: BellIcon,
      current: isCurrentRoute('/user/settings/notifications')
    },
    {
      name: 'Privacy',
      to: '/user/settings/privacy',
      icon: UserIcon,
      current: isCurrentRoute('/user/settings/privacy')
    },
  ];

  // Organizer-specific navigation items
  const organizerNavigation = [
    {
      name: 'Organizer Dashboard',
      to: '/user/organizer/dashboard',
      icon: ClipboardDocumentListIcon,
      current: isCurrentRoute('/user/organizer/dashboard'),
    },
    {
      name: 'My Events',
      to: '/user/organizer/events',
      icon: BuildingStorefrontIcon,
      current: isCurrentRoute('/user/organizer/events'),
    },
    {
      name: 'Organizer Profile',
      to: '/user/organizer/profile',
      icon: UserGroupIcon,
      current: isCurrentRoute('/user/organizer/profile'),
    },
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
