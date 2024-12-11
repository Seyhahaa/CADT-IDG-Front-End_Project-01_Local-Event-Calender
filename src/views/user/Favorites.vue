<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Favorites</h1>
                <p class="mt-2 text-sm text-gray-700">Your favorite events and saved items.</p>
            </div>
        </div>

        <!-- Favorites Grid -->
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="event in favoriteEvents"
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
                                event.status === 'Open'
                                    ? 'bg-green-50 text-green-700'
                                    : 'bg-yellow-50 text-yellow-700',
                                'inline-flex rounded-full px-2 py-1 text-xs font-semibold',
                            ]"
                        >
                            {{ event.status }}
                        </span>
                        <button
                            @click="removeFromFavorites(event)"
                            class="ml-auto rounded-full p-1 text-red-500 hover:bg-gray-50"
                        >
                            <StarIcon class="h-5 w-5 fill-current" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="favoriteEvents.length === 0" class="mt-8 text-center">
            <StarIcon class="mx-auto h-12 w-12 text-gray-400" />
            <h3 class="mt-2 text-sm font-semibold text-gray-900">No favorites</h3>
            <p class="mt-1 text-sm text-gray-500">
                Get started by adding some events to your favorites.
            </p>
            <div class="mt-6">
                <RouterLink
                    to="/user/events"
                    class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Browse Events
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { CalendarIcon, MapPinIcon, StarIcon } from '@heroicons/vue/24/outline';

    // Mock data - replace with actual API calls
    const favoriteEvents = ref([
        {
            id: 1,
            name: 'Tech Conference 2024',
            description: 'Annual technology conference featuring industry leaders and innovators.',
            date: 'Mar 15, 2024',
            location: 'San Francisco, CA',
            status: 'Open',
            imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
        },
        {
            id: 2,
            name: 'Web Development Workshop',
            description: 'Hands-on workshop covering modern web development practices.',
            date: 'Mar 20, 2024',
            location: 'Online',
            status: 'Limited',
            imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
        },
    ]);

    const removeFromFavorites = (event) => {
        if (confirm('Remove this event from favorites?')) {
            favoriteEvents.value = favoriteEvents.value.filter((e) => e.id !== event.id);
            // Add API call here
        }
    };
</script>
