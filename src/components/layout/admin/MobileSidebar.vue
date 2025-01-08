<script setup>
    import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
    import { XMarkIcon } from '@heroicons/vue/24/outline';
    import SidebarContent from '../user/SidebarContent.vue';
import AdminSidebar from './adminSidebar.vue';


    defineProps({
        open: {
            type: Boolean,
            required: true,
        },
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

    const emit = defineEmits(['close']);
</script>

<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-50 lg:hidden" @close="emit('close')">
            <TransitionChild
                as="template"
                enter="duration-200 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-gray-900/80" />
            </TransitionChild>

            <div class="fixed inset-0 flex">
                <TransitionChild
                    as="template"
                    enter="duration-200 ease-out"
                    enter-from="opacity-0 -translate-x-full"
                    enter-to="opacity-100 translate-x-0"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 translate-x-0"
                    leave-to="opacity-0 -translate-x-full"
                >
                    <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                        <TransitionChild
                            as="template"
                            enter="ease-in-out duration-200"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="ease-in-out duration-200"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                <button type="button" class="-m-2.5 p-2.5" @click="emit('close')">
                                    <span class="sr-only">Close sidebar</span>
                                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>

                        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                           
                            <AdminSidebar />

                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
