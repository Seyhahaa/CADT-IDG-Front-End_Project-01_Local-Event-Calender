<template>
    <ProfileView :showRole="true" :userId="userStore.user?.id" />
</template>

<script setup>
    import { useUserStore } from '@/stores/userStore';
    import ProfileView from '@/views/profile/ProfileView.vue';

    const userStore = useUserStore();
</script>
