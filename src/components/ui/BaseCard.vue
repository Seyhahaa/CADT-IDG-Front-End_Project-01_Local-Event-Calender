<template>
    <div class="bg-white shadow rounded-lg" :class="className">
        <div v-if="title || $slots.header" class="p-6 border-b border-gray-200">
            <slot name="header">
                <h4 class="text-lg font-semibold leading-7 text-gray-900">
                    {{ title }}
                </h4>
                <p v-if="subtitle" class="mt-1 text-sm text-gray-500">{{ subtitle }}</p>
            </slot>
        </div>
        <div :class="[padding ? 'p-6' : '', $slots.footer ? 'border-b border-gray-200' : '']">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="p-6">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseCard',
        props: {
            title: {
                type: String,
                default: '',
            },
            subtitle: {
                type: String,
                default: '',
            },
            padding: {
                type: Boolean,
                default: true,
            },
            className: {
                type: String,
                default: '',
            },
        },
    };
</script>
