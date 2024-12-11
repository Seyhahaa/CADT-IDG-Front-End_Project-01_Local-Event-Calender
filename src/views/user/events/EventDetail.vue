<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="text-center">
      <p class="text-gray-500">Loading event details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center">
      <p class="text-red-500">{{ error }}</p>
    </div>

    <!-- Event Content -->
    <div v-else>
      <!-- Event Header -->
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {{ event.name }}
          </h2>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ event.date }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ event.location }}
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <UserGroupIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{ event.attendees }} attendees
            </div>
          </div>
        </div>
        <div class="mt-5 flex lg:ml-4 lg:mt-0">
          <span class="hidden sm:block">
            <button
              type="button"
              @click="toggleFavorite"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              :class="{ 'text-red-500': event.isFavorite }"
            >
              <StarIcon class="h-5 w-5 mr-2" :class="{ 'fill-current': event.isFavorite }" aria-hidden="true" />
              {{ event.isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
            </button>
          </span>

          <span class="ml-3 hidden sm:block">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <TicketIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Register
            </button>
          </span>
        </div>
      </div>

      <!-- Event Image -->
      <div class="mt-8 aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
        <img
          :src="event.imageUrl"
          :alt="event.name"
          class="h-full w-full object-cover object-center"
        />
      </div>

      <!-- Event Details -->
      <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <div class="prose max-w-none">
            <h3>About this event</h3>
            <p>{{ event.description }}</p>

            <h3>What you'll learn</h3>
            <ul>
              <li v-for="(item, index) in event.learningPoints" :key="index">
                {{ item }}
              </li>
            </ul>

            <h3>Schedule</h3>
            <div v-for="(item, index) in event.schedule" :key="index" class="mb-4">
              <h4 class="font-medium">{{ item.time }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div>
          <div class="rounded-lg bg-gray-50 p-6">
            <h3 class="text-base font-semibold leading-6 text-gray-900">Event Details</h3>

            <dl class="mt-4 space-y-4">
              <div>
                <dt class="text-sm font-medium text-gray-500">Date and Time</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ event.date }}</dd>
              </div>

              <div>
                <dt class="text-sm font-medium text-gray-500">Location</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ event.location }}</dd>
              </div>

              <div>
                <dt class="text-sm font-medium text-gray-500">Category</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ event.category }}</dd>
              </div>

              <div>
                <dt class="text-sm font-medium text-gray-500">Price</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ event.price }}</dd>
              </div>

              <div>
                <dt class="text-sm font-medium text-gray-500">Status</dt>
                <dd class="mt-1">
                  <span
                    :class="[
                      event.status === 'Open' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700',
                      'inline-flex rounded-full px-2 py-1 text-xs font-semibold'
                    ]"
                  >
                    {{ event.status }}
                  </span>
                </dd>
              </div>
            </dl>

            <div class="mt-6">
              <button
                type="button"
                class="w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  StarIcon,
  TicketIcon,
} from '@heroicons/vue/24/outline';

const route = useRoute();
const loading = ref(true);
const error = ref(null);

// Mock data - replace with actual API call
const event = ref({
  id: route.params.id,
  name: 'Tech Conference 2024',
  description: 'Join us for our annual technology conference featuring industry leaders and innovators. This year\'s conference will focus on emerging technologies, best practices, and future trends in software development.',
  date: 'March 15, 2024 • 9:00 AM PST',
  location: 'San Francisco Convention Center, CA',
  category: 'Technology',
  price: '$299',
  status: 'Open',
  attendees: 250,
  isFavorite: false,
  imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  learningPoints: [
    'Latest trends in web development',
    'Best practices for cloud architecture',
    'AI and machine learning applications',
    'DevOps and continuous deployment strategies',
  ],
  schedule: [
    {
      time: '9:00 AM - 10:00 AM',
      description: 'Registration and Welcome Coffee',
    },
    {
      time: '10:00 AM - 11:30 AM',
      description: 'Keynote: The Future of Technology',
    },
    {
      time: '11:45 AM - 12:45 PM',
      description: 'Breakout Sessions',
    },
    {
      time: '1:00 PM - 2:00 PM',
      description: 'Lunch Break',
    },
  ],
});

onMounted(async () => {
  try {
    // Add API call here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
    loading.value = false;
  } catch (err) {
    error.value = 'Failed to load event details';
    loading.value = false;
  }
});

const toggleFavorite = () => {
  event.value.isFavorite = !event.value.isFavorite;
  // Add API call here to update favorites
};
</script>
