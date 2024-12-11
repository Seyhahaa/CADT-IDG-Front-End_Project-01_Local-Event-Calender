<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1 relative">
      <div v-if="$slots.prefix" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="prefix"></slot>
      </div>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        :class="{
          'pl-10': $slots.prefix,
          'pr-10': $slots.suffix
        }"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <div v-if="$slots.suffix" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <slot name="suffix"></slot>
      </div>
    </div>
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      modelValue: {
        type: [String, Number],
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
      error: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    inheritAttrs: false,
  };
</script>
