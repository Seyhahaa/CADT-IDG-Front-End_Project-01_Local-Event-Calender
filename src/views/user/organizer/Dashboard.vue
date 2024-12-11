<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Organizer Dashboard</h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Stats -->
      <div class="mt-8">
        <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
            <dt>
              <div class="absolute rounded-md bg-indigo-500 p-3">
                <component :is="stat.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p class="ml-16 truncate text-sm font-medium text-gray-500">{{ stat.name }}</p>
            </dt>
            <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">{{ stat.value }}</p>
              <p :class="[stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
                <component :is="stat.changeType === 'increase' ? ArrowUpIcon : ArrowDownIcon" class="h-5 w-5 flex-shrink-0 self-center text-current" aria-hidden="true" />
                <span class="sr-only"> {{ stat.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                {{ stat.change }}
              </p>
            </dd>
          </div>
        </dl>
      </div>

      <!-- Upcoming Events -->
      <div class="mt-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h2 class="text-xl font-semibold text-gray-900">Upcoming Events</h2>
            <p class="mt-2 text-sm text-gray-700">A list of your upcoming events that need attention.</p>
          </div>
          <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <RouterLink
              to="/user/organizer/events/create"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Event
            </RouterLink>
          </div>
        </div>

        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Event</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Registrations</th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="event in upcomingEvents" :key="event.id">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {{ event.name }}
                      </td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ event.date }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm">
                        <span :class="[
                          event.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800',
                          'inline-flex rounded-full px-2 text-xs font-semibold leading-5'
                        ]">
                          {{ event.status }}
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {{ event.registrations }}/{{ event.capacity }}
                      </td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <RouterLink :to="'/user/organizer/events/' + event.id + '/edit'" class="text-indigo-600 hover:text-indigo-900">
                          Edit<span class="sr-only">, {{ event.name }}</span>
                        </RouterLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  CalendarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/vue/24/outline';

// Mock data - replace with actual API calls
const stats = [
  {
    name: 'Total Events',
    value: '12',
    change: '7%',
    changeType: 'increase',
    icon: CalendarIcon,
  },
  {
    name: 'Total Attendees',
    value: '2.3k',
    change: '10%',
    changeType: 'increase',
    icon: UsersIcon,
  },
  {
    name: 'Revenue',
    value: '$13,500',
    change: '2%',
    changeType: 'decrease',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Avg. Rating',
    value: '4.8',
    change: '4%',
    changeType: 'increase',
    icon: ChartBarIcon,
  },
];

const upcomingEvents = [
  {
    id: 1,
    name: 'Tech Conference 2024',
    date: 'Mar 15, 2024',
    status: 'Published',
    registrations: 180,
    capacity: 200,
  },
  {
    id: 2,
    name: 'Web Development Workshop',
    date: 'Mar 20, 2024',
    status: 'Draft',
    registrations: 45,
    capacity: 50,
  },
  {
    id: 3,
    name: 'Design Thinking Seminar',
    date: 'Mar 25, 2024',
    status: 'Published',
    registrations: 75,
    capacity: 100,
  },
];
</script>
