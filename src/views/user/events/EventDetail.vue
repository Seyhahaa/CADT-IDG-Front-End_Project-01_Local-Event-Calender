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
                    <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
                    >
                        {{ data.title }}
                    </h2>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <CalendarIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{ new Date(data.date).toLocaleDateString('en-KH') }}
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{ data.address }}
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <UserGroupIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{}} attendees
                        </div>
                    </div>
                </div>
                <div class="mt-5 flex lg:ml-4 lg:mt-0">
                    <span class="ml-3 hidden sm:block">
                        <button
                            type="button"
                            class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <TicketIcon class="-ml-0.5 mr-1.5 h-5" aria-hidden="true" />
                            កែប្រែ
                        </button>
                    </span>
                </div>
            </div>

            <!-- Event Image -->
            <div class="mt-8 aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                <img
                    :src="data.images"
                    :alt="data.title"
                    class="h-full w-full object-cover object-center"
                />
            </div>

            <!-- Event Details -->
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    <div class="prose max-w-none">
                        <h3 class="text-2xl font-bold mb-5">About this event</h3>
                        <p>{{ data.description }}</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div>
                    <div class="rounded-lg bg-gray-50 p-6">
                        <h3 class="text-base font-semibold leading-6 text-gray-900">
                            Event Details
                        </h3>

                        <dl class="mt-4 space-y-4">
                            <div>
                                <dt class="text-sm font-medium text-gray-500">Date and Time</dt>
                                <dd class="mt-1 text-sm text-gray-900">
                                    {{ new Date(data.date).toLocaleDateString('en-KH') }}
                                </dd>
                            </div>

                            <div>
                                <dt class="text-sm font-medium text-gray-500">Location</dt>
                                <dd class="mt-1 text-sm text-gray-900">{{ data.address }}</dd>
                            </div>

                            <div>
                                <dt class="text-sm font-medium text-gray-500">Category</dt>
                                <dd class="mt-1 text-sm text-gray-900">{{ data.category }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const data = ref([]);

onMounted(async () => {
    const token = localStorage.getItem('token');
    const eventId = useRoute().params.id;
    console.log(eventId);
    const response = await axios.get(`${process.env.VUE_APP_SERVER}/event/${eventId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    data.value = response.data;
    console.log(data.value);
    return { data };
});
</script>
