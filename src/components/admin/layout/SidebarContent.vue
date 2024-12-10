<script setup>
import { Cog6ToothIcon } from "@heroicons/vue/24/outline";

defineProps({
  navigation: {
    type: Array,
    required: true,
  },
});

// Add computed functions for class bindings
const getNavigationItemClasses = (item) => {
  return [
    item.current
      ? "bg-gray-50 text-indigo-600"
      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
    "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
  ];
};

const getNavigationIconClasses = (item) => {
  return [
    item.current
      ? "text-indigo-600"
      : "text-gray-400 group-hover:text-indigo-600",
    "size-6 shrink-0",
  ];
};

const getTeamItemClasses = (team) => {
  return [
    team.current
      ? "bg-gray-50 text-indigo-600"
      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
    "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold",
  ];
};

const getTeamInitialClasses = (team) => {
  return [
    team.current
      ? "border-indigo-600 text-indigo-600"
      : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
    "flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
  ];
};
</script>

<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
    <div class="flex h-16 shrink-0 items-center">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </div>
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in navigation" :key="item.name">
              <router-link
                :to="item.to"
                :class="getNavigationItemClasses(item)"
              >
                <component
                  :is="item.icon"
                  :class="getNavigationIconClasses(item)"
                  aria-hidden="true"
                />
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </li>

        <li class="mt-auto">
          <router-link
            to="/admin/settings"
            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
          >
            <Cog6ToothIcon
              class="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
              aria-hidden="true"
            />
            Settings
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
