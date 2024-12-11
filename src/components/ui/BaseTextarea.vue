<template>
    <div>
        <label
            v-if="label"
            :for="id"
            class="block text-sm font-medium text-gray-700"
            :class="{ 'text-red-600': error }"
        >
            {{ label }}
            <span v-if="required" class="text-red-600">*</span>
        </label>
        <div class="mt-1 relative">
            <textarea
                ref="textareaRef"
                :id="id"
                :value="modelValue"
                :rows="rows"
                :placeholder="placeholder"
                :required="required"
                :disabled="disabled"
                :aria-invalid="!!error"
                :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined"
                :maxlength="maxLength"
                class="block w-full rounded-md shadow-sm sm:text-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                :class="{
                    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500': !error,
                    'border-red-300 focus:border-red-500 focus:ring-red-500': error,
                    'pr-16': maxLength,
                    'resize-none': !resizable && !autoGrow,
                    'resize-y': resizable && !autoGrow,
                }"
                @input="handleInput"
                @blur="handleBlur"
            ></textarea>
            <div
                v-if="maxLength"
                class="absolute bottom-2 right-2 flex items-center gap-1 text-xs text-gray-500"
                :class="{ 'text-red-500': isNearMaxLength }"
            >
                <DocumentTextIcon class="h-4 w-4" />
                <span>{{ modelValue?.length || 0 }}/{{ maxLength }}</span>
            </div>
        </div>
        <p v-if="hint && !error" :id="`${id}-hint`" class="mt-2 text-sm text-gray-500">
            {{ hint }}
        </p>
        <p v-if="error" :id="`${id}-error`" class="mt-2 text-sm text-red-600" role="alert">
            {{ error }}
        </p>
    </div>
</template>

<script setup>
    import { computed, ref, watch, onMounted, nextTick } from 'vue';
    import { DocumentTextIcon } from '@heroicons/vue/20/solid';

    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            required: true,
        },
        rows: {
            type: Number,
            default: 3,
        },
        placeholder: {
            type: String,
            default: '',
        },
        hint: {
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
        maxLength: {
            type: Number,
            default: null,
        },
        validateOnBlur: {
            type: Boolean,
            default: false,
        },
        resizable: {
            type: Boolean,
            default: true,
        },
        autoGrow: {
            type: Boolean,
            default: false,
        },
        maxHeight: {
            type: Number,
            default: 400, // pixels
        },
    });

    const emit = defineEmits(['update:modelValue', 'blur']);
    const textareaRef = ref(null);

    const isNearMaxLength = computed(() => {
        if (!props.maxLength || !props.modelValue) return false;
        return props.modelValue.length >= props.maxLength * 0.9;
    });

    const adjustHeight = () => {
        if (!props.autoGrow || !textareaRef.value) return;

        const textarea = textareaRef.value;
        textarea.style.height = 'auto';

        const newHeight = Math.min(textarea.scrollHeight + 2, props.maxHeight);

        textarea.style.height = `${newHeight}px`;
    };

    const handleInput = (event) => {
        const value = event.target.value;
        if (props.maxLength && value.length > props.maxLength) {
            event.target.value = value.slice(0, props.maxLength);
            emit('update:modelValue', event.target.value);
            return;
        }
        emit('update:modelValue', value);
        adjustHeight();
    };

    const handleBlur = (event) => {
        emit('blur', event);
    };

    watch(
        () => props.modelValue,
        () => {
            if (props.autoGrow) {
                nextTick(adjustHeight);
            }
        }
    );

    onMounted(() => {
        if (props.autoGrow && props.modelValue) {
            adjustHeight();
        }
    });
</script>
