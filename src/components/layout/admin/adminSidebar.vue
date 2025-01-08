<script setup>
    import { Cog6ToothIcon } from '@heroicons/vue/24/outline';

    const props = defineProps({
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

    // Add computed functions for class bindings
    const getNavigationItemClasses = (item) => {
        return [
            item.current
                ? 'bg-gray-50 text-indigo-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
        ];
    };

    const getNavigationIconClasses = (item) => {
        return [
            item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
            'size-6 shrink-0',
        ];
    };
</script>

<template>
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
        <!-- Logo -->
        <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" :src="logo.src" :alt="logo.alt" />
        </div>

        <!-- Navigation -->
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>  
                    <div class="mb-3">
                        <router-link to="/admin-dashboard" class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                            <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                            </svg>

                            <span class="font-semibold text-xl">Dashboard</span>
                        </router-link>   
                    </div>  
                    <div class="mb-3">
                        <router-link to="/admin/event" class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                            <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                            <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
                            </svg>
                            <span class="font-semibold text-xl">ព្រឹត្តិការណ៍ទាំងអស់</span>
                        </router-link>
                    </div> 
                    <div>
                        <router-link to="/admin/news" class="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M10 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h8a2 2 0 0 1-2-2V3ZM4 4h4v2H4V4Zm4 3.5H4V9h4V7.5Zm-4 3h4V12H4v-1.5Z" clip-rule="evenodd" />
  <path d="M13 5h-1.5v6.25a1.25 1.25 0 1 0 2.5 0V6a1 1 0 0 0-1-1Z" />
</svg>

                            <span class="font-semibold text-xl">ពត៌មានទាំងអស់</span>
                        </router-link>
                    </div>      
                            

                </li>

                <!-- Settings Link -->
                <li v-if="showSettings" class="mt-auto">
                    <router-link
                        :to="isAdmin ? '/admin/settings' : '/user/settings'"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                    >
                        <Cog6ToothIcon
                            class="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                            aria-hidden="true"
                        />
                        Settings
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
