<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold leading-6 text-gray-900">My Schedule</h1>
        <p class="mt-2 text-sm text-gray-700">
          View and manage your upcoming events.
        </p>
      </div>
    </div>

    <!-- Calendar View -->
    <div class="mt-6">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div class="flex items-center text-gray-900">
            <button
              type="button"
              class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              @click="prevMonth"
            >
              <span class="sr-only">Previous month</span>
              <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            <div class="flex-auto text-sm font-semibold">{{ currentMonthName }}</div>
            <button
              type="button"
              class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              @click="nextMonth"
            >
              <span class="sr-only">Next month</span>
              <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            <button
              v-for="day in days"
              :key="day.date"
              :class="[
                'py-1.5 hover:bg-gray-100 focus:z-10',
                day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                day.isToday && 'font-semibold',
                day.isSelected && 'font-semibold',
                day.hasEvent && !day.isSelected && 'bg-gray-50 font-semibold text-indigo-600',
                day.isSelected && 'text-white',
                !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                day.isToday && !day.isSelected && 'text-indigo-600',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
              ]"
              @click="selectDate(day)"
            >
              <time
                :datetime="day.date"
                :class="[
                  'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                ]"
              >
                {{ day.dayOfMonth }}
              </time>
            </button>
          </div>
        </div>

        <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          <li v-for="event in selectedDateEvents" :key="event.id" class="relative flex space-x-6 py-6 xl:static">
            <img
              :src="event.imageUrl"
              alt=""
              class="h-14 w-14 flex-none rounded-full"
            />
            <div class="flex-auto">
              <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0">{{ event.name }}</h3>
              <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                <div class="flex items-start space-x-3">
                  <dt class="mt-0.5">
                    <span class="sr-only">Date</span>
                    <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <time :datetime="event.datetime">{{ event.time }}</time>
                  </dd>
                </div>
                <div class="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                  <dt class="mt-0.5">
                    <span class="sr-only">Location</span>
                    <MapPinIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>{{ event.location }}</dd>
                </div>
              </dl>
            </div>
            <div class="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:ml-4">
              <RouterLink
                :to="`/user/events/${event.id}`"
                class="text-indigo-600 hover:text-indigo-900"
              >
                View<span class="sr-only">, {{ event.name }}</span>
              </RouterLink>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import {
  CalendarIcon,
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

const currentDate = ref(new Date());
const selectedDate = ref(new Date());

// Mock events data - replace with API call
const events = ref([
  {
    id: 1,
    name: 'Tech Conference 2024',
    datetime: '2024-03-15T09:00',
    time: '9:00 AM PST',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  },
  {
    id: 2,
    name: 'Web Development Workshop',
    datetime: '2024-03-20T10:00',
    time: '10:00 AM PST',
    location: 'Online',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
  },
]);

const currentMonthName = computed(() => {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate.value);
});

const days = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const result = [];

  // Add days from previous month
  const firstDayOfWeek = firstDay.getDay() || 7; // Convert Sunday (0) to 7
  for (let i = firstDayOfWeek - 1; i > 0; i--) {
    const date = new Date(year, month, 1 - i);
    result.push({
      date: date.toISOString().split('T')[0],
      dayOfMonth: date.getDate(),
      isCurrentMonth: false,
      isToday: isSameDay(date, new Date()),
      isSelected: isSameDay(date, selectedDate.value),
      hasEvent: hasEventOnDate(date),
    });
  }

  // Add days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    result.push({
      date: date.toISOString().split('T')[0],
      dayOfMonth: i,
      isCurrentMonth: true,
      isToday: isSameDay(date, new Date()),
      isSelected: isSameDay(date, selectedDate.value),
      hasEvent: hasEventOnDate(date),
    });
  }

  // Add days from next month
  const remainingDays = 42 - result.length; // 6 weeks * 7 days = 42
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    result.push({
      date: date.toISOString().split('T')[0],
      dayOfMonth: i,
      isCurrentMonth: false,
      isToday: isSameDay(date, new Date()),
      isSelected: isSameDay(date, selectedDate.value),
      hasEvent: hasEventOnDate(date),
    });
  }

  return result;
});

const selectedDateEvents = computed(() => {
  return events.value.filter(event =>
    isSameDay(new Date(event.datetime), selectedDate.value)
  );
});

function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

function hasEventOnDate(date) {
  return events.value.some(event => isSameDay(new Date(event.datetime), date));
}

function selectDate(day) {
  selectedDate.value = new Date(day.date);
}

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
}
</script>
