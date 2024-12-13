<template>
    <div>
        <div class="px-4 sm:px-0">
            <h3 class="text-2xl font-semibold leading-7 text-gray-900">Dashboard</h3>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Overview of your system's performance and key metrics.
            </p>
        </div>

        <div class="mt-6">
            <!-- Stats -->
            <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div class="absolute rounded-md bg-indigo-500 p-3">
                            <UsersIcon class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p class="ml-16 truncate text-sm font-medium text-gray-500">Total Users</p>
                    </dt>
                    <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p class="text-2xl font-semibold text-gray-900">1,234</p>
                        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <ArrowUpIcon
                                class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                aria-hidden="true"
                            />
                            <span class="sr-only">Increased by</span>
                            12%
                        </p>
                    </dd>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div class="absolute rounded-md bg-indigo-500 p-3">
                            <CalendarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p class="ml-16 truncate text-sm font-medium text-gray-500">
                            Active Events
                        </p>
                    </dt>
                    <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p class="text-2xl font-semibold text-gray-900">89</p>
                        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <ArrowUpIcon
                                class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                aria-hidden="true"
                            />
                            <span class="sr-only">Increased by</span>
                            8%
                        </p>
                    </dd>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div class="absolute rounded-md bg-indigo-500 p-3">
                            <TicketIcon class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p class="ml-16 truncate text-sm font-medium text-gray-500">Tickets Sold</p>
                    </dt>
                    <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p class="text-2xl font-semibold text-gray-900">3,456</p>
                        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <ArrowUpIcon
                                class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                aria-hidden="true"
                            />
                            <span class="sr-only">Increased by</span>
                            15%
                        </p>
                    </dd>
                </div>

                <div
                    class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                >
                    <dt>
                        <div class="absolute rounded-md bg-indigo-500 p-3">
                            <CurrencyDollarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p class="ml-16 truncate text-sm font-medium text-gray-500">Revenue</p>
                    </dt>
                    <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p class="text-2xl font-semibold text-gray-900">$45,678</p>
                        <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                            <ArrowUpIcon
                                class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                aria-hidden="true"
                            />
                            <span class="sr-only">Increased by</span>
                            10%
                        </p>
                    </dd>
                </div>
            </dl>

            <!-- Recent Activity -->
            <div class="mt-8">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h2 class="text-lg font-medium text-gray-900">Recent Activity</h2>
                        <p class="mt-2 text-sm text-gray-700">
                            Latest events and updates from your system.
                        </p>
                    </div>
                </div>

                <div class="mt-6 overflow-hidden rounded-xl border border-gray-200">
                    <div class="min-w-full divide-y divide-gray-200">
                        <div class="bg-gray-50 px-6 py-3">
                            <div class="flex items-center justify-between">
                                <div class="flex-1">
                                    <h3 class="text-sm font-medium text-gray-900">Latest Events</h3>
                                </div>
                                <div class="ml-6 flex items-center">
                                    <router-link
                                        to="/admin/events"
                                        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        View All
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-200 bg-white">
                            <div v-for="(event, index) in recentEvents" :key="index" class="p-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex-1">
                                        <h4 class="text-sm font-medium text-gray-900">
                                            {{ event.name }}
                                        </h4>
                                        <p class="mt-1 text-sm text-gray-500">
                                            {{ event.description }}
                                        </p>
                                    </div>
                                    <div class="ml-6">
                                        <p class="text-sm text-gray-500">{{ event.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>

