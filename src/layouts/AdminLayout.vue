<template>
  <div>
    <MobileSidebar :open="sidebarOpen" :navigation="navigation" @close="sidebarOpen = false" />
    <Sidebar :navigation="navigation" />
    <div class="lg:pl-72">
      <AppHeader
        :sidebar-open="sidebarOpen"
        :user-navigation="userNavigation"
        @open-sidebar="sidebarOpen = true"
      />
      <main class="py-10 w-full">
        <div class="mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import MobileSidebar from '@/components/admin/layout/MobileSidebar.vue'
import Sidebar from '@/components/admin/sidebar/Sidebar.vue'
import AppHeader from '@/components/admin/layout/AppHeader.vue'
import { useNavigation } from '@/composables/useNavigation'

const { navigation, userNavigation } = useNavigation()
const sidebarOpen = ref(false)
</script>
