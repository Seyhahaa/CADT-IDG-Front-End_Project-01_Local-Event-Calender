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
                src: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
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
                    <ul role="list" class="-mx-2 space-y-1">
                        <template v-for="item in navigation" :key="item.name">
                            <!-- Navigation Item -->
                            <li v-if="!item.type">
                                <router-link :to="item.to" :class="getNavigationItemClasses(item)">
                                    <component
                                        :is="item.icon"
                                        :class="getNavigationIconClasses(item)"
                                        aria-hidden="true"
                                    />
                                    {{ item.name }}
                                </router-link>
                            </li>
                            <!-- Navigation Divider -->
                            <li v-else-if="item.type === 'divider'" class="relative my-4">
                                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div class="w-full border-t border-gray-200"></div>
                                </div>
                                <div class="relative flex justify-start">
                                    <span
                                        class="bg-white pr-2 text-sm font-semibold leading-6 text-gray-900"
                                        >{{  }}</span
                                    >
                                </div>
                            </li>
                        </template>
                    </ul>
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
