<template>
  <div class="min-h-screen bg-white lg:grid lg:grid-cols-[280px,1fr] px-16">
    <!-- Sidebar -->
    <aside
      class="fixed inset-y-0 z-20 flex w-64 flex-col border-r border-gray-200 bg-white lg:static lg:w-auto"
    >
      <div class="overflow-y-auto px-4 py-6">
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-gray-900">Style Guide</h2>
          <p class="mt-1 text-sm text-gray-600">Documentation and examples</p>
        </div>

        <!-- Navigation -->
        <nav class="space-y-1">
          <div
            v-for="(section, index) in navigation"
            :key="index"
            class="space-y-2"
          >
            <h3
              class="font-medium text-sm text-gray-500 uppercase tracking-wider"
            >
              {{ section.title }}
            </h3>
            <div class="space-y-1">
              <router-link
                v-for="item in section.items"
                :key="item.name"
                :to="item.href"
                class="group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === item.href
                    ? 'bg-gray-50 text-primary-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                ]"
              >
                <component
                  :is="item.icon"
                  class="mr-3 h-5 w-5"
                  :class="[
                    $route.path === item.href
                      ? 'text-primary-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true"
                />
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="px-4 py-8 sm:px-6 lg:px-8 w-full overflow-x-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  HomeIcon,
  SwatchIcon,
  Squares2X2Icon,
  CubeIcon,
  BellIcon,
  ArrowsPointingOutIcon,
  TableCellsIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/vue/24/outline";

const navigation = ref([
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/docs", icon: HomeIcon },
      { name: "Installation", href: "/docs/installation", icon: CubeIcon },
    ],
  },
  {
    title: "Foundation",
    items: [
      { name: "Colors", href: "/docs/colors", icon: SwatchIcon },
      { name: "Typography", href: "/docs/typography", icon: Squares2X2Icon },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Alerts", href: "/docs/alerts", icon: BellIcon },
      { name: "Buttons", href: "/docs/buttons", icon: Squares2X2Icon },
      { name: "Cards", href: "/docs/cards", icon: Squares2X2Icon },
      { name: "Forms", href: "/docs/forms", icon: Squares2X2Icon },
      { name: "Modal", href: "/docs/modal", icon: ArrowsPointingOutIcon },
      { name: "Navigation", href: "/docs/navigation", icon: Squares2X2Icon },
      { name: "Tables", href: "/docs/tables", icon: TableCellsIcon },
      { name: "Tabs", href: "/docs/tabs", icon: Squares2X2Icon },
    ],
  },
  {
    title: "Advanced Components",
    items: [
      { name: "Avatar", href: "/docs/avatar", icon: UserIcon },
      { name: "DatePicker", href: "/docs/datepicker", icon: CalendarIcon },
      { name: "DataGrid", href: "/docs/datagrid", icon: TableCellsIcon },
    ],
  },
]);
</script>
