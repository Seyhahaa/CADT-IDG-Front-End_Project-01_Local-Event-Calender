<template>
    <div>
        <MobileSidebar
        />

        <!-- Static sidebar for desktop -->
        <Sidebar :navigation="navigation" :isAdmin="true" />

        <div class="lg:pl-72">
            <AppHeader
                :sidebarOpen="sidebarOpen"
                :userNavigation="userNavigation"
                :isAdmin="true"
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
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/userStore';
    import Sidebar from '@/components/layout/admin/Sidebar.vue';
    import MobileSidebar from '@/components/layout/admin/MobileSidebar.vue';
    import AppHeader from '@/components/layout/admin/AppHeader.vue';
    import { useNavigation } from '@/composables/useNavigation';

    const router = useRouter();
    const userStore = useUserStore();
    const { navigation, userNavigation } = useNavigation();

    const admin = JSON.parse(localStorage.getItem('admin'))

    const user = {
        name: admin.username,
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };

    const sidebarOpen = ref(false);

    // Handle logout
    async function handleLogout() {
        try {
            await userStore.logout();
            router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
</script>
