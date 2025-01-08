<template>
    <div>
        <UserMobileSibebar
            :open="sidebarOpen"
            :navigation="navigation"
            :isAdmin="false"
            @close="sidebarOpen = false"
        />

        <!-- Static sidebar for desktop -->
        <UserSidebar :navigation="navigation" :isAdmin="false" />

        <div class="lg:pl-72">
            <AppHeader
                :sidebarOpen="sidebarOpen"
                :userNavigation="userNavigation"
                :isAdmin="false"
                :user="user"
                @openSidebar="sidebarOpen = true"
            />

            <main class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Sidebar from '@/components/layout/admin/Sidebar.vue';
    import MobileSidebar from '@/components/layout/admin/MobileSidebar.vue';
    import AppHeader from '@/components/layout/user/AppHeader.vue';
    import { useUserNavigation } from '@/composables/useUserNavigation';
import UserMobileSibebar from '@/components/layout/user/userMobileSibebar.vue';
import UserSidebar from '@/components/layout/user/userSidebar.vue';

    const { navigation, userNavigation } = useUserNavigation();
    const auth = localStorage.getItem('user');
    const parseData = JSON.parse(auth)
    const username = parseData.firstname.concat(' ',parseData.lastname)
    const user = {
        name: username,
        imageUrl:parseData.path
    };

    const sidebarOpen = ref(false);
</script>
