<template>
    <div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Events</h1>
            <router-link
                to="/admin/events/create"
                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Create Event
            </router-link>
        </div>

        <!-- Filters -->
        <div class="bg-white p-4 rounded-lg shadow mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Search with clear button -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
                    <div class="relative">
                        <input
                            v-model="filters.search"
                            type="text"
                            placeholder="Search by title or location..."
                            class="w-full border rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            v-if="filters.search"
                            @click="filters.search = ''"
                            class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            title="Clear search"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Category -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                        v-model="filters.category"
                        class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">All Categories</option>
                        <option v-for="category in categories" :key="category" :value="category">
                            {{ category }}
                        </option>
                    </select>
                </div>

                <!-- Event Date Range -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                    <div class="flex items-center space-x-2">
                        <div class="relative flex-1">
                            <input
                                v-model="filters.dateFrom"
                                type="date"
                                class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                v-if="filters.dateFrom"
                                @click="filters.dateFrom = ''"
                                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                title="Clear start date"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <span class="text-gray-500">to</span>
                        <div class="relative flex-1">
                            <input
                                v-model="filters.dateTo"
                                type="date"
                                class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                v-if="filters.dateTo"
                                @click="filters.dateTo = ''"
                                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                title="Clear end date"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Status Filter and Clear Filters -->
            <div class="flex items-center justify-between mt-4 pt-4 border-t">
                <div class="flex gap-2">
                    <label class="text-sm font-medium text-gray-700 mr-2">Status:</label>
                    <button
                        v-for="status in statuses"
                        :key="status"
                        @click="toggleStatus(status)"
                        class="px-3 py-1 rounded-full text-xs font-medium"
                        :class="[
                            filters.status === status
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                        ]"
                    >
                        {{ status }}
                    </button>
                </div>
                <div class="flex items-center gap-4">
                    <span v-if="hasActiveFilters" class="text-sm text-gray-500">
                        {{ activeFilterCount }} active
                        {{ activeFilterCount === 1 ? 'filter' : 'filters' }}
                    </span>
                    <button
                        v-if="hasActiveFilters"
                        @click="clearFilters"
                        class="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Clear All Filters
                    </button>
                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="p-4 border-b">
                <div class="flex items-center gap-4">
                    <input
                        type="checkbox"
                        :checked="selectAll"
                        @change="toggleSelectAll"
                        class="rounded"
                    />
                    <button
                        v-if="selectedEvents.length > 0"
                        @click="confirmDeleteMultiple"
                        class="text-red-600 hover:text-red-800"
                    >
                        Delete Selected ({{ selectedEvents.length }})
                    </button>
                </div>
            </div>
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="w-12 px-6 py-3"></th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Event
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Category
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Date
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="event in paginatedEvents" :key="event.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4" @click.stop>
                            <input
                                type="checkbox"
                                v-model="selectedEvents"
                                :value="event.id"
                                class="rounded"
                            />
                        </td>
                        <td
                            class="px-6 py-4 cursor-pointer"
                            @click="router.push(`/admin/events/${event.id}`)"
                        >
                            <div class="flex items-center">
                                <img
                                    :src="event.image"
                                    class="h-10 w-10 rounded-lg object-cover mr-3"
                                />
                                <div>
                                    <div class="font-medium text-gray-900">{{ event.title }}</div>
                                    <div class="text-sm text-gray-500">{{ event.location }}</div>
                                </div>
                            </div>
                        </td>
                        <td
                            class="px-6 py-4 cursor-pointer"
                            @click="router.push(`/admin/events/${event.id}`)"
                        >
                            <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
                            >
                                {{ event.category }}
                            </span>
                        </td>
                        <td
                            class="px-6 py-4 text-sm text-gray-500 cursor-pointer"
                            @click="router.push(`/admin/events/${event.id}`)"
                        >
                            {{ formatDate(event.date) }}
                        </td>
                        <td
                            class="px-6 py-4 cursor-pointer"
                            @click="router.push(`/admin/events/${event.id}`)"
                        >
                            <span :class="getStatusClass(event.status)">
                                {{ event.status }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm font-medium" @click.stop>
                            <div class="flex space-x-3">
                                <router-link
                                    :to="`/admin/events/${event.id}`"
                                    class="text-blue-600 hover:text-blue-900"
                                >
                                    View
                                </router-link>
                                <router-link
                                    :to="`/admin/events/${event.id}/edit`"
                                    class="text-green-600 hover:text-green-900"
                                >
                                    Edit
                                </router-link>
                                <button
                                    @click="confirmDelete(event)"
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

        <!-- Pagination -->
        <div
            class="flex items-center justify-between bg-white px-4 py-3 sm:px-6 mt-4 rounded-lg shadow"
        >
            <div class="flex items-center">
                <select v-model="perPage" class="border rounded-lg px-3 py-2">
                    <option :value="10">10 per page</option>
                    <option :value="25">25 per page</option>
                    <option :value="50">50 per page</option>
                </select>
            </div>
            <div class="flex items-center space-x-2">
                <button
                    :disabled="currentPage === 1"
                    @click="currentPage--"
                    class="px-3 py-1 rounded border"
                    :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''"
                >
                    Previous
                </button>
                <span class="px-3 py-1"> Page {{ currentPage }} of {{ totalPages }} </span>
                <button
                    :disabled="currentPage === totalPages"
                    @click="currentPage++"
                    class="px-3 py-1 rounded border"
                    :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''"
                >
                    Next
                </button>
            </div>
        </div>

        <!-- Delete Confirmation Dialog -->
        <DeleteConfirmationDialog
            v-if="showDeleteDialog"
            :event="eventToDelete"
            :multiple="isMultipleDelete"
            :count="selectedEvents.length"
            @confirm="handleDelete"
            @cancel="cancelDelete"
        />
    </div>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';
    import { useRouter } from 'vue-router';
    import DeleteConfirmationDialog from '@/components/events/DeleteConfirmationDialog.vue';
    import { useEvents } from '@/composables/useEvents';

    const router = useRouter();
    const { events, deleteEvent, deleteMultipleEvents } = useEvents();

    // Pagination
    const currentPage = ref(1);
    const perPage = ref(10);
    const totalPages = computed(() => Math.ceil(filteredEvents.value.length / perPage.value));

    // Filters
    const filters = ref({
        search: '',
        category: '',
        dateFrom: '',
        dateTo: '',
        status: '',
    });

    // Selection
    const selectedEvents = ref([]);
    const selectAll = computed({
        get: () => selectedEvents.value.length === paginatedEvents.value.length,
        set: (value) => {
            selectedEvents.value = value ? paginatedEvents.value.map((event) => event.id) : [];
        },
    });

    // Delete Dialog
    const showDeleteDialog = ref(false);
    const eventToDelete = ref(null);
    const isMultipleDelete = ref(false);

    // Categories (would come from API)
    const categories = ['Conference', 'Workshop', 'Webinar', 'Meetup', 'Concert'];

    // Add statuses array
    const statuses = ['Upcoming', 'In Progress', 'Completed', 'Cancelled'];

    // Computed
    const filteredEvents = computed(() => {
        return events.value.filter((event) => {
            // Search filter (title, location, or description)
            const searchTerm = filters.value.search.toLowerCase();
            const matchesSearch =
                searchTerm === '' ||
                event.title.toLowerCase().includes(searchTerm) ||
                event.location.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm);

            // Category filter
            const matchesCategory =
                !filters.value.category || event.category === filters.value.category;

            // Date range filter
            const eventDate = new Date(event.date);
            const matchesDateFrom =
                !filters.value.dateFrom || eventDate >= new Date(filters.value.dateFrom);
            const matchesDateTo =
                !filters.value.dateTo || eventDate <= new Date(filters.value.dateTo);

            // Status filter
            const matchesStatus = !filters.value.status || event.status === filters.value.status;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesDateFrom &&
                matchesDateTo &&
                matchesStatus
            );
        });
    });

    const paginatedEvents = computed(() => {
        const start = (currentPage.value - 1) * perPage.value;
        const end = start + perPage.value;
        return filteredEvents.value.slice(start, end);
    });

    // Methods
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    const getStatusClass = (status) => {
        const classes = {
            Upcoming: 'bg-yellow-100 text-yellow-800',
            'In Progress': 'bg-green-100 text-green-800',
            Completed: 'bg-gray-100 text-gray-800',
            Cancelled: 'bg-red-100 text-red-800',
        };
        return `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            classes[status] || ''
        }`;
    };

    const toggleSelectAll = () => {
        selectAll.value = !selectAll.value;
    };

    const confirmDelete = (event) => {
        eventToDelete.value = event;
        isMultipleDelete.value = false;
        showDeleteDialog.value = true;
    };

    const confirmDeleteMultiple = () => {
        isMultipleDelete.value = true;
        showDeleteDialog.value = true;
    };

    const handleDelete = async () => {
        if (isMultipleDelete.value) {
            await deleteMultipleEvents(selectedEvents.value);
            selectedEvents.value = [];
        } else if (eventToDelete.value) {
            await deleteEvent(eventToDelete.value.id);
        }
        showDeleteDialog.value = false;
    };

    const cancelDelete = () => {
        showDeleteDialog.value = false;
        eventToDelete.value = null;
        isMultipleDelete.value = false;
    };

    const toggleStatus = (status) => {
        filters.value.status = filters.value.status === status ? '' : status;
    };

    const clearFilters = () => {
        filters.value = {
            search: '',
            category: '',
            dateFrom: '',
            dateTo: '',
            status: '',
        };
    };

    const hasActiveFilters = computed(() => {
        return (
            filters.value.search ||
            filters.value.category ||
            filters.value.dateFrom ||
            filters.value.dateTo ||
            filters.value.status
        );
    });

    const activeFilterCount = computed(() => {
        let count = 0;
        if (filters.value.search) count++;
        if (filters.value.category) count++;
        if (filters.value.dateFrom || filters.value.dateTo) count++;
        if (filters.value.status) count++;
        return count;
    });

    // When filters change, reset to first page
    watch(
        filters,
        () => {
            currentPage.value = 1;
        },
        { deep: true }
    );
</script>
