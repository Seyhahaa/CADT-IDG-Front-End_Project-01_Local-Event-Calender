<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <SidebarContent :navigation="navigation"/>
  </div>
</template>

<script setup>
import SidebarContent from '@/components/admin/layout/SidebarContent.vue'
defineProps({
  navigation: {
    type: Array,
    required: true,
  },
})
</script>
