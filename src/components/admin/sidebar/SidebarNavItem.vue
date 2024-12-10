<template>
  <li>
    <a
      :href="item.href"
      :class="[
        item.current
          ? 'bg-gray-50 text-indigo-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
      ]"
    >
      <component
        :is="item.icon"
        :class="[
          item.current
            ? 'text-indigo-600'
            : 'text-gray-400 group-hover:text-indigo-600',
          'size-6 shrink-0',
        ]"
        aria-hidden="true"
      />
      {{ item.name }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
