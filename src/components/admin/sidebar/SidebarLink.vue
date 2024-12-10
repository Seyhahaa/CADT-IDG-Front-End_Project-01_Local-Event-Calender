<template>
  <a
    :href="href"
    class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
  >
    <component
      :is="icon"
      class="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
      aria-hidden="true"
    />
    {{ text }}
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
