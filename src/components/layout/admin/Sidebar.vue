<template>
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <AdminSidebar />
    </div>
</template>

<script setup>
import AdminSidebar from './adminSidebar.vue';


    defineProps({
        navigation: {
            type: Array,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        showSettings: {
            type: Boolean,
            default: true,
        },
        logo: {
            type: Object,
            default: () => ({
                src: '/assets/Wegocolor.png',
                alt: 'Your Company',
            }),
        },
    });
</script>
