import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import {
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  FolderIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/vue/24/outline';

export function useNavigation() {
  const route = useRoute();
  const router = useRouter();
  const userStore = useUserStore();

  const isCurrentRoute = (path) => route.path === path;

  // Base navigation items
  const baseNavigation = [
    { name: 'Dashboard', to: '/admin', icon: HomeIcon, current: isCurrentRoute('/admin') },
    { name: 'Users', to: '/admin/users', icon: UsersIcon, current: isCurrentRoute('/admin/users') },
    {
      name: 'Events',
      to: '/admin/events',
      icon: CalendarIcon,
      current: isCurrentRoute('/admin/events'),
    },
    {
      name: 'Categories',
      to: '/admin/categories',
      icon: FolderIcon,
      current: isCurrentRoute('/admin/categories'),
    },
    {
      name: 'Reports',
      to: '/admin/reports',
      icon: ChartBarIcon,
      current: isCurrentRoute('/admin/reports'),
    },
  ];

  // Settings navigation
  const settingsNavigation = [
    { name: 'Settings', type: 'divider' },
    {
      name: 'General Settings',
      to: '/admin/settings',
      icon: Cog6ToothIcon,
      current: isCurrentRoute('/admin/settings'),
    },
    {
      name: 'Security',
      to: '/admin/settings/security',
      icon: ShieldCheckIcon,
      current: isCurrentRoute('/admin/settings/security'),
    },
    {
      name: 'Notifications',
      to: '/admin/settings/notifications',
      icon: BellIcon,
      current: isCurrentRoute('/admin/settings/notifications'),
    },
    {
      name: 'Privacy',
      to: '/admin/settings/privacy',
      icon: UserIcon,
      current: isCurrentRoute('/admin/settings/privacy'),
    },
  ];

  // Main navigation computed property
  const navigation = computed(() => {
    const nav = [...baseNavigation, ...settingsNavigation];
    return nav;
  });

  const userNavigation = computed(() => [
    {
      name: 'Your Profile',
      to: '/admin/profile',
      current: route.path.startsWith('/admin/profile'),
    },
    {
      name: 'Settings',
      to: '/admin/settings',
      current: route.path.startsWith('/admin/settings'),
    },
    {
      name: 'User Page',
      to: '/user',
      current: route.path.startsWith('/user'),
    },
    {
      name: 'Sign out',
      to: '#',
      onClick: async () => {
        try {
          await userStore.logout();
          router.push('/login');
        } catch (error) {
          console.error('Logout failed:', error);
        }
      },
    },
  ]);

  return {
    navigation,
    userNavigation,
    isCurrentRoute,
  };
}
