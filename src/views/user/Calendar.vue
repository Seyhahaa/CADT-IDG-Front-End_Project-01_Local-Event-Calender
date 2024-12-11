<template>
  <div class="py-10">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">My Event Calendar</h1>

      <!-- Calendar View -->
      <div class="mt-6 bg-white shadow ring-1 ring-gray-900/5 sm:rounded-xl">
        <div class="px-4 py-6 sm:px-8 sm:py-8">
          <!-- Calendar Header -->
          <div class="flex items-center">
            <h2 class="flex-auto text-sm font-semibold text-gray-900">
              {{ currentMonthYear }}
            </h2>
            <div class="flex items-center gap-6">
              <button
                type="button"
                class="flex items-center justify-center rounded-md py-2 px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                @click="previousMonth"
              >
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                Previous
              </button>
              <button
                type="button"
                class="flex items-center justify-center rounded-md py-2 px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                @click="nextMonth"
              >
                Next
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="mt-8 grid grid-cols-7 text-sm leading-6 text-gray-500">
            <div v-for="day in weekDays" :key="day" class="text-center">{{ day }}</div>
          </div>
          <div class="mt-2 grid grid-cols-7 text-sm">
            <div
              v-for="(day, dayIdx) in days"
              :key="dayIdx"
              class="relative py-2 px-3"
              :class="[
                dayIdx === 0 ? 'col-start-' + firstDayOfMonth : '',
                'hover:bg-gray-50'
              ]"
            >
              <button
                type="button"
                :class="[
                  'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
                  isToday(day) && 'font-semibold text-indigo-600',
                  day.events.length > 0 && 'bg-gray-50 font-semibold text-gray-900',
                  'hover:bg-gray-100'
                ]"
                @click="selectDate(day)"
              >
                <time :datetime="day.date">{{ day.dayOfMonth }}</time>
              </button>

              <div v-if="day.events.length > 0" class="mt-1">
                <div
                  v-for="event in day.events.slice(0, 2)"
                  :key="event.id"
                  class="flex items-center px-2 py-1 text-xs rounded-lg"
                  :class="[
                    event.type === 'registered' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                  ]"
                >
                  <div class="w-2 h-2 rounded-full mr-2"
                    :class="[
                      event.type === 'registered' ? 'bg-blue-400' : 'bg-green-400'
                    ]"
                  ></div>
                  {{ event.name }}
                </div>
                <div
                  v-if="day.events.length > 2"
                  class="px-2 py-1 text-xs text-gray-500"
                >
                  +{{ day.events.length - 2 }} more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Selected Date Events -->
      <div v-if="selectedDate" class="mt-8">
        <h3 class="text-lg font-medium text-gray-900">
          Events on {{ formatDate(selectedDate.date) }}
        </h3>
        <ul role="list" class="mt-4 divide-y divide-gray-100">
          <li
            v-for="event in selectedDate.events"
            :key="event.id"
            class="flex gap-x-4 py-5"
          >
            <div class="flex-auto">
              <div class="flex items-start justify-between gap-x-3">
                <div>
                  <div class="flex items-center gap-x-3">
                    <h4 class="flex-none text-sm font-semibold leading-6 text-gray-900">
                      {{ event.name }}
                    </h4>
                    <div
                      :class="[
                        event.type === 'registered' ? 'text-blue-700 bg-blue-50' : 'text-green-700 bg-green-50',
                        'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                      ]"
                    >
                      {{ event.type === 'registered' ? 'Registered' : 'Hosting' }}
                    </div>
                  </div>
                  <p class="mt-1 text-sm leading-6 text-gray-500">{{ event.description }}</p>
                </div>
                <div class="flex flex-none items-center gap-x-4">
                  <RouterLink
                    :to="'/user/events/' + event.id"
                    class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    View details
                  </RouterLink>
                </div>
              </div>
              <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p class="whitespace-nowrap">
                  {{ event.time }}
                </p>
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="truncate">{{ event.location }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

const currentDate = ref(new Date());
const selectedDate = ref(null);

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleString('default', { month: 'long', year: 'numeric' });
});

const firstDayOfMonth = computed(() => {
  const firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
  return firstDay.getDay() + 1;
});

// Mock events data - replace with actual API call
const events = [
  {
    id: 1,
    name: 'Tech Conference',
    description: 'Annual technology conference',
    date: '2024-03-15',
    time: '9:00 AM',
    location: 'Convention Center',
    type: 'registered'
  },
  {
    id: 2,
    name: 'Web Development Workshop',
    description: 'Learn modern web development',
    date: '2024-03-15',
    time: '2:00 PM',
    location: 'Online',
    type: 'hosting'
  },
  // Add more events as needed
];

const days = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const dateString = date.toISOString().split('T')[0];

    return {
      date: dateString,
      dayOfMonth: i + 1,
      events: events.filter(event => event.date === dateString)
    };
  });
});

const isToday = (day) => {
  const today = new Date();
  return day.date === today.toISOString().split('T')[0];
};

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1);
};

const selectDate = (day) => {
  selectedDate.value = day;
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>
