<template>
    <div>
        <!-- Header -->
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Category Details</h1>
                <p class="mt-2 text-sm text-gray-700">
                    Detailed information about the category and its associated events.
                </p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <RouterLink
                    :to="`/admin/categories/${route.params.id}/edit`"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Edit Category
                </RouterLink>
            </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="mt-6 text-center">
            <p class="text-gray-500">Loading category details...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="mt-6 text-center">
            <p class="text-red-500">{{ error }}</p>
        </div>

        <!-- Content -->
        <div v-else class="mt-6">
            <!-- Category Information -->
            <div class="overflow-hidden bg-white shadow sm:rounded-lg">
                <div class="px-4 py-6 sm:px-6">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">
                        Category Information
                    </h3>
                </div>
                <div class="border-t border-gray-100">
                    <dl class="divide-y divide-gray-100">
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-900">Name</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ category.name }}
                            </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-900">Description</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ category.description }}
                            </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-900">Status</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <span
                                    :class="[
                                        category.active
                                            ? 'bg-green-50 text-green-700'
                                            : 'bg-red-50 text-red-700',
                                        'inline-flex rounded-full px-2 py-1 text-xs font-semibold',
                                    ]"
                                >
                                    {{ category.active ? 'Active' : 'Inactive' }}
                                </span>
                            </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-900">Events Count</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ category.eventsCount }} events
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <!-- Associated Events -->
            <div class="mt-6">
                <h3 class="text-base font-semibold leading-7 text-gray-900">Associated Events</h3>
                <div
                    class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
                >
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                    Event Name
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
                            <tr v-for="event in category.events" :key="event.id">
                                <td
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                >
                                    {{ event.name }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {{ event.date }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {{ event.status }}
                                </td>
                                <td
                                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                >
                                    <RouterLink
                                        :to="`/admin/events/${event.id}`"
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
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, RouterLink } from 'vue-router';

    const route = useRoute();
    const loading = ref(true);
    const error = ref(null);

    // Mock data - replace with actual API call
    const category = ref({
        id: route.params.id,
        name: 'Conferences',
        description: 'Professional networking and learning events',
        eventsCount: 12,
        active: true,
        events: [
            {
                id: 1,
                name: 'Tech Conference 2024',
                date: 'March 15, 2024',
                status: 'Upcoming',
            },
            {
                id: 2,
                name: 'Developer Summit',
                date: 'April 20, 2024',
                status: 'Open for Registration',
            },
        ],
    });

    onMounted(async () => {
        try {
            // Add API call here
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
            loading.value = false;
        } catch (err) {
            error.value = 'Failed to load category details';
            loading.value = false;
        }
    });
</script>
