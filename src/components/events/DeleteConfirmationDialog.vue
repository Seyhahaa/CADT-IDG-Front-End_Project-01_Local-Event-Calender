<template>
    <div class="fixed inset-0 z-50 overflow-y-auto" v-if="show">
        <div class="flex items-center justify-center min-h-screen">
            <div class="fixed inset-0 bg-black opacity-50"></div>
            <div class="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h3 class="text-lg font-medium mb-4">{{ title }}</h3>
                <p class="text-gray-600 mb-6">{{ message }}</p>
                <div class="flex justify-end space-x-4">
                    <button
                        @click="$emit('cancel')"
                        class="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                        Cancel
                    </button>
                    <button
                        @click="$emit('confirm')"
                        class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Confirm Delete',
        },
        message: {
            type: String,
            default: 'Are you sure you want to delete this item? This action cannot be undone.',
        },
    });

    defineEmits(['confirm', 'cancel']);
</script>
