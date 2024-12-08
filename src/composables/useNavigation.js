import { CalendarIcon, ChartPieIcon, FolderIcon, HomeIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

export function useNavigation() {
  const route = useRoute()
  const router = useRouter()
  const { logout: authLogout } = useAuth()

  const handleLogout = async () => {
    try {
      await authLogout()
      // redirect to login page after logout
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const navigation = computed(() => [
    {
      name: 'Dashboard',
      to: '/admin/dashboard',
      icon: HomeIcon,
      current: route.path === '/admin/dashboard',
    },
    {
      name: 'Events',
      to: '/admin/events',
      icon: FolderIcon,
      current: route.path === '/admin/events',
    },
    {
      name: 'Calendar',
      to: '/admin/calendar',
      icon: CalendarIcon,
      current: route.path === '/admin/calendar',
    },
    {
      name: 'Reports',
      to: '/admin/reports',
      icon: ChartPieIcon,
      current: route.path === '/admin/reports',
    },
  ])

  const userNavigation = [
    {
      name: 'Your profile',
      to: '/admin/profile',
      current: route.path === '/admin/profile',
    },
    {
      name: 'Sign out',
      to: '#',
      onClick: handleLogout,
    },
  ]

  return {
    navigation,
    userNavigation,
    handleLogout,
  }
}
