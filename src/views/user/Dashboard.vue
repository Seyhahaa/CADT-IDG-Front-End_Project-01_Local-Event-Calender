<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Dashboard</h1>
                <p class="mt-2 text-sm text-gray-700">Welcome to your personal dashboard.</p>
            </div>
        </div>

        <!-- Quick Stats -->
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <CalendarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">Upcoming Events</p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">3</p>
                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpIcon
                            class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            aria-hidden="true"
                        />
                        <span class="sr-only">Increased by</span>
                        2
                    </p>
                </dd>
            </div>

            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <StarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">Favorite Events</p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">5</p>
                </dd>
            </div>

            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <ClockIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">
                        Recent Activities
                    </p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">12</p>
                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpIcon
                            class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            aria-hidden="true"
                        />
                        <span class="sr-only">Increased by</span>
                        5
                    </p>
                </dd>
            </div>
        </dl>

        <!-- Recent Events -->
        <div class="mt-8">
            <h2 class="text-base font-semibold leading-6 text-gray-900">Recent Events</h2>
            <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                                Event
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Status
                            </th>
                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="event in recentEvents" :key="event.id">
                            <td
                                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                {{ event.name }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {{ event.date }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span
                                    :class="[
                                        event.status === 'Upcoming'
                                            ? 'text-green-700 bg-green-50'
                                            : 'text-gray-700 bg-gray-50',
                                        'inline-flex rounded-full px-2 text-xs font-semibold leading-5',
                                    ]"
                                >
                                    {{ event.status }}
                                </span>
                            </td>
                            <td
                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                            >
                                <RouterLink
                                    :to="`/user/events/${event.id}`"
                                    class="text-indigo-600 hover:text-indigo-900"
                                >
                                    View
                                </RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import { CalendarIcon, StarIcon, ClockIcon, ArrowUpIcon } from '@heroicons/vue/24/outline';

    // Mock data - replace with actual API calls
    const recentEvents = [
        {
            id: 1,
            name: 'Tech Conference 2024',
            date: 'Mar 15, 2024',
            status: 'Upcoming',
        },
        {
            id: 2,
            name: 'Web Development Workshop',
            date: 'Mar 20, 2024',
            status: 'Registered',
        },
        {
            id: 3,
            name: 'AI Symposium',
            date: 'Apr 5, 2024',
            status: 'Upcoming',
        },
    ];
</script>
