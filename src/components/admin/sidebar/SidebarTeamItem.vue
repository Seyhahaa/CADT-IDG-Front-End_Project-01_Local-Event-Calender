<template>
  <li>
    <a
      :href="team.href"
      :class="[
        team.current
          ? 'bg-gray-50 text-indigo-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
      ]"
    >
      <span
        :class="[
          team.current
            ? 'border-indigo-600 text-indigo-600'
            : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
          'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
        ]"
        >{{ team.initial }}</span
      >
      <span class="truncate">{{ team.name }}</span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  team: {
    type: Object,
    required: true,
  },
})
</script>
