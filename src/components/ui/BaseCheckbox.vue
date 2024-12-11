<template>
    <div class="relative flex items-start">
        <div class="flex h-5 items-center">
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                :required="required"
                :disabled="disabled"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-not-allowed"
                @change="$emit('update:modelValue', $event.target.checked)"
            />
        </div>
        <div class="ml-3 text-sm">
            <label
                :for="id"
                :class="['font-medium', disabled ? 'text-gray-400' : 'text-gray-700']"
                >{{ label }}</label
            >
            <p v-if="description" class="text-gray-500">{{ description }}</p>
            <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    defineProps({
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        error: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    });

    defineEmits(['update:modelValue']);
</script>
