<script setup>
import {
  CalendarIcon,
  UsersIcon,
  ChartPieIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const events = ref([
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "March 15, 2024",
    attendees: 250,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Startup Meetup",
    date: "March 20, 2024",
    attendees: 120,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Design Workshop",
    date: "March 25, 2024",
    attendees: 75,
    rating: 4.9,
  },
]);
</script>

<template>
  <div class="py-6">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Stats -->
      <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <CalendarIcon
                  class="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">
                    Total Events
                  </dt>
                  <dd
                    class="text-3xl font-semibold tracking-tight text-gray-900"
                  >
                    12
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <UsersIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">
                    Total Attendees
                  </dt>
                  <dd
                    class="text-3xl font-semibold tracking-tight text-gray-900"
                  >
                    2.1k
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <ChartPieIcon
                  class="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="truncate text-sm font-medium text-gray-500">
                    Average Rating
                  </dt>
                  <dd
                    class="text-3xl font-semibold tracking-tight text-gray-900"
                  >
                    4.8
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar -->
      <div class="mt-8">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <h2 class="text-base font-semibold leading-6 text-gray-900">
              Upcoming Events
            </h2>
            <div
              class="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500"
            >
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
            <div class="mt-2 grid grid-cols-7 text-sm">
              <!-- Calendar grid would go here - simplified for example -->
              <div v-for="n in 31" :key="n" class="py-2">
                <button
                  type="button"
                  class="mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                  :class="
                    n === 15
                      ? 'bg-indigo-600 font-semibold text-white'
                      : 'text-gray-900'
                  "
                >
                  {{ n }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Events List -->
      <div class="mt-8">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <div class="flex justify-between items-center">
              <h2 class="text-base font-semibold leading-6 text-gray-900">
                Your Events
              </h2>
              <router-link
                to="/admin/events/create"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Create Event
              </router-link>
            </div>
            <div class="mt-6 flow-root">
              <ul role="list" class="-my-5 divide-y divide-gray-200">
                <li v-for="event in events" :key="event.id" class="py-5">
                  <div class="flex items-center space-x-4">
                    <div class="min-w-0 flex-1">
                      <p class="truncate text-sm font-medium text-gray-900">
                        {{ event.name }}
                      </p>
                      <p class="truncate text-sm text-gray-500">
                        {{ event.date }}
                      </p>
                    </div>
                    <div>
                      <router-link
                        :to="`/admin/events/${event.id}`"
                        class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        View details
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
