<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Categories</h1>
                <p class="mt-2 text-sm text-gray-700">
                    A list of all event categories in your system.
                </p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <RouterLink
                    to="/admin/categories/create"
                    class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add category
                </RouterLink>
            </div>
        </div>

        <!-- Search and Filter -->
        <div class="mt-6 flex items-center gap-4">
            <div class="relative flex-grow">
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search categories..."
                    class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
        </div>

        <!-- Categories Table -->
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div
                        class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
                    >
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Events Count
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
                                <tr v-for="category in filteredCategories" :key="category.id">
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                    >
                                        {{ category.name }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ category.description }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ category.eventsCount }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
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
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                    >
                                        <div class="flex justify-end gap-2">
                                            <RouterLink
                                                :to="`/admin/categories/${category.id}`"
                                                class="text-indigo-600 hover:text-indigo-900"
                                            >
                                                View
                                            </RouterLink>
                                            <RouterLink
                                                :to="`/admin/categories/${category.id}/edit`"
                                                class="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Edit
                                            </RouterLink>
                                            <button
                                                @click="deleteCategory(category.id)"
                                                class="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

    // Sample data - replace with actual API calls
    const categories = ref([
        {
            id: 1,
            name: 'Conferences',
            description: 'Professional networking and learning events',
            eventsCount: 12,
            active: true,
        },
        {
            id: 2,
            name: 'Workshops',
            description: 'Hands-on learning sessions',
            eventsCount: 8,
            active: true,
        },
        {
            id: 3,
            name: 'Seminars',
            description: 'Educational presentations',
            eventsCount: 5,
            active: false,
        },
    ]);

    const searchQuery = ref('');

    const filteredCategories = computed(() => {
        if (!searchQuery.value) return categories.value;
        const query = searchQuery.value.toLowerCase();
        return categories.value.filter(
            (category) =>
                category.name.toLowerCase().includes(query) ||
                category.description.toLowerCase().includes(query)
        );
    });

    const deleteCategory = async (id) => {
        if (confirm('Are you sure you want to delete this category?')) {
            try {
                // Add API call here
                categories.value = categories.value.filter((cat) => cat.id !== id);
            } catch (error) {
                console.error('Failed to delete category:', error);
            }
        }
    };
</script>
