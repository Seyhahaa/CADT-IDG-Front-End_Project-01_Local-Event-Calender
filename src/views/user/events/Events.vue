<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold leading-6 text-gray-900">Events</h1>
        <p class="mt-2 text-sm text-gray-700">
          Browse and register for upcoming events.
        </p>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mt-6 border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Events">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="currentTab = tab.id"
          :class="[
            currentTab === tab.id
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
            'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
          ]"
        >
          {{ tab.name }}
          <span
            v-if="tab.count !== undefined"
            :class="[
              currentTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
              'ml-3 rounded-full py-0.5 px-2.5 text-xs font-medium'
            ]"
          >
            {{ tab.count }}
          </span>
        </button>
      </nav>
    </div>

    <!-- Search and Filter -->
    <div class="mt-6 flex items-center gap-4">
      <div class="relative flex-grow">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search events..."
          class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>

    <!-- Events Grid -->
    <div class="mt-8">
      <!-- Registered Events Section -->
      <div v-if="(currentTab === 'all' && hasRegisteredEvents) || currentTab === 'registered'" class="mb-8">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Your Registered Events</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="event in registeredEvents"
            :key="event.id"
            class="relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
          >
            <div class="aspect-h-3 aspect-w-4 bg-gray-200">
              <img
                :src="event.imageUrl"
                :alt="event.name"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="flex flex-1 flex-col p-4">
              <h3 class="text-lg font-medium text-gray-900">
                <RouterLink :to="`/user/events/${event.id}`">
                  {{ event.name }}
                </RouterLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ event.description }}</p>
              <div class="mt-4 flex items-center gap-4">
                <div class="flex items-center text-sm text-gray-500">
                  <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {{ event.date }}
                </div>
                <div class="flex items-center text-sm text-gray-500">
                  <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {{ event.location }}
                </div>
              </div>
              <div class="mt-4 flex items-center gap-2">
                <span
                  :class="[
                    event.status === 'Open' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700',
                    'inline-flex rounded-full px-2 py-1 text-xs font-semibold'
                  ]"
                >
                  {{ event.status }}
                </span>
                <div class="flex flex-1 justify-end gap-2">
                  <button
                    @click="toggleFavorite(event)"
                    class="rounded-full p-1 hover:bg-gray-50"
                    :class="{ 'text-red-500': event.isFavorite, 'text-gray-400': !event.isFavorite }"
                  >
                    <StarIcon class="h-5 w-5" :class="{ 'fill-current': event.isFavorite }" />
                  </button>
                  <button
                    @click="unregisterFromEvent(event)"
                    class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Unregister
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Events Section -->
      <div v-if="currentTab !== 'registered'">
        <h2 v-if="currentTab === 'all'" class="text-lg font-medium text-gray-900 mb-4">
          {{ hasRegisteredEvents ? 'Other Upcoming Events' : 'Upcoming Events' }}
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="event in unregisteredEvents"
            :key="event.id"
            class="relative flex flex-col overflow-hidden rounded-lg border border-gray-200"
          >
            <div class="aspect-h-3 aspect-w-4 bg-gray-200">
              <img
                :src="event.imageUrl"
                :alt="event.name"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="flex flex-1 flex-col p-4">
              <h3 class="text-lg font-medium text-gray-900">
                <RouterLink :to="`/user/events/${event.id}`">
                  {{ event.name }}
                </RouterLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ event.description }}</p>
              <div class="mt-4 flex items-center gap-4">
                <div class="flex items-center text-sm text-gray-500">
                  <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {{ event.date }}
                </div>
                <div class="flex items-center text-sm text-gray-500">
                  <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {{ event.location }}
                </div>
              </div>
              <div class="mt-4 flex items-center gap-2">
                <span
                  :class="[
                    event.status === 'Open' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700',
                    'inline-flex rounded-full px-2 py-1 text-xs font-semibold'
                  ]"
                >
                  {{ event.status }}
                </span>
                <div class="flex flex-1 justify-end gap-2">
                  <button
                    @click="toggleFavorite(event)"
                    class="rounded-full p-1 hover:bg-gray-50"
                    :class="{ 'text-red-500': event.isFavorite, 'text-gray-400': !event.isFavorite }"
                  >
                    <StarIcon class="h-5 w-5" :class="{ 'fill-current': event.isFavorite }" />
                  </button>
                  <button
                    @click="registerForEvent(event)"
                    class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import {
  StarIcon,
  CalendarIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';

const searchQuery = ref('');
const currentTab = ref('all');

const tabs = [
  { id: 'all', name: 'All Events' },
  { id: 'registered', name: 'Registered', count: 0 },
  { id: 'interested', name: 'Interested', count: 0 }
];

// Mock data - replace with actual API calls
const events = ref([
  {
    id: 1,
    name: 'Tech Conference 2024',
    description: 'Annual technology conference featuring industry leaders and innovators.',
    date: 'Mar 15, 2024',
    location: 'San Francisco, CA',
    status: 'Open',
    isFavorite: false,
    isRegistered: false,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  },
  {
    id: 2,
    name: 'Web Development Workshop',
    description: 'Hands-on workshop covering modern web development practices.',
    date: 'Mar 20, 2024',
    location: 'Online',
    status: 'Limited',
    isFavorite: true,
    isRegistered: true,
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
  },
  {
    id: 3,
    name: 'AI Symposium',
    description: 'Exploring the latest advancements in artificial intelligence.',
    date: 'Apr 5, 2024',
    location: 'New York, NY',
    status: 'Open',
    isFavorite: false,
    isRegistered: false,
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
  },
]);

// Update tab counts
const updateTabCounts = () => {
  const registeredCount = events.value.filter(event => event.isRegistered).length;
  const interestedCount = events.value.filter(event => event.isFavorite).length;

  tabs[1].count = registeredCount;
  tabs[2].count = interestedCount;
};

// Initial tab count update
updateTabCounts();

const filteredEvents = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return events.value.filter(event => {
    const matchesSearch =
      event.name.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query);

    if (currentTab.value === 'registered') {
      return matchesSearch && event.isRegistered;
    } else if (currentTab.value === 'interested') {
      return matchesSearch && event.isFavorite;
    }
    return matchesSearch;
  });
});

const displayedEvents = computed(() => {
  if (currentTab.value === 'registered') {
    return filteredEvents.value.filter(event => event.isRegistered);
  }

  if (currentTab.value === 'interested') {
    return filteredEvents.value.filter(event => event.isFavorite);
  }

  // For 'all' tab, show registered events first
  return [...filteredEvents.value].sort((a, b) => {
    if (a.isRegistered === b.isRegistered) {
      return new Date(a.date) - new Date(b.date);
    }
    return b.isRegistered ? 1 : -1;
  });
});

const hasRegisteredEvents = computed(() => {
  return filteredEvents.value.some(event => event.isRegistered);
});

const registeredEvents = computed(() => {
  return filteredEvents.value.filter(event => event.isRegistered)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
});

const unregisteredEvents = computed(() => {
  if (currentTab.value === 'registered') {
    return [];
  }
  if (currentTab.value === 'interested') {
    return filteredEvents.value;
  }
  return filteredEvents.value.filter(event => !event.isRegistered)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
});

const toggleFavorite = (event) => {
  event.isFavorite = !event.isFavorite;
  updateTabCounts();
};

const registerForEvent = (event) => {
  event.isRegistered = true;
  updateTabCounts();
};

const unregisterFromEvent = (event) => {
  event.isRegistered = false;
  updateTabCounts();
};
</script>
