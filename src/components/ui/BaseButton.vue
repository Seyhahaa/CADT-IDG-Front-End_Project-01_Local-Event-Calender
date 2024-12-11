<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm',
      variant === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' :
      variant === 'secondary' ? 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50' :
      variant === 'danger' ? 'bg-red-600 text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600' :
      'bg-white text-gray-900',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <slot name="icon-left" />
    <slot>{{ loading ? loadingText : text }}</slot>
    <slot name="icon-right" />
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Loading...'
  },
  className: {
    type: String,
    default: ''
  }
});

defineEmits(['click']);
</script>
