<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="space-y-10 divide-y divide-gray-900/10">
            <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                <div class="px-4 sm:px-0">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">
                        {{ isEditing ? 'Edit Event' : 'Create Event' }}
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                        {{
                            isEditing
                                ? 'Update your event details.'
                                : 'Create a new event and set its details.'
                        }}
                    </p>
                </div>

                <form
                    class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                    @submit.prevent="handleSubmit"
                >
                    <div class="px-4 py-6 sm:p-8">
                        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <!-- Basic Information -->
                            <div class="sm:col-span-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Event Name</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        id="name"
                                        v-model="form.name"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label
                                    for="description"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Description</label
                                >
                                <div class="mt-2">
                                    <textarea
                                        id="description"
                                        v-model="form.description"
                                        rows="3"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea>
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">
                                    Write a detailed description of your event.
                                </p>
                            </div>

                            <!-- Date and Time -->
                            <div class="sm:col-span-3">
                                <label
                                    for="date"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Date</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="date"
                                        id="date"
                                        v-model="form.date"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label
                                    for="time"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Time</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="time"
                                        id="time"
                                        v-model="form.time"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <!-- Location -->
                            <div class="sm:col-span-4">
                                <label
                                    for="location"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Location</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        id="location"
                                        v-model="form.location"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <!-- Category -->
                            <div class="sm:col-span-3">
                                <label
                                    for="category"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Category</label
                                >
                                <div class="mt-2">
                                    <select
                                        id="category"
                                        v-model="form.category"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Select a category</option>
                                        <option
                                            v-for="category in categories"
                                            :key="category"
                                            :value="category"
                                        >
                                            {{ category }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <!-- Capacity and Price -->
                            <div class="sm:col-span-2">
                                <label
                                    for="capacity"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Capacity</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="number"
                                        id="capacity"
                                        v-model="form.capacity"
                                        required
                                        min="1"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label
                                    for="price"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Price</label
                                >
                                <div class="mt-2">
                                    <div class="relative rounded-md shadow-sm">
                                        <div
                                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                        >
                                            <span class="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            id="price"
                                            v-model="form.price"
                                            required
                                            min="0"
                                            step="0.01"
                                            class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <!-- Image Upload -->
                            <div class="col-span-full">
                                <label
                                    for="image"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Event Image</label
                                >
                                <div
                                    class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                                >
                                    <div class="text-center">
                                        <PhotoIcon
                                            class="mx-auto h-12 w-12 text-gray-300"
                                            aria-hidden="true"
                                        />
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                for="file-upload"
                                                class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    class="sr-only"
                                                    accept="image/*"
                                                    @change="handleImageUpload"
                                                />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
                    >
                        <button
                            type="button"
                            @click="$router.back()"
                            class="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                        >
                            {{
                                isSubmitting
                                    ? 'Saving...'
                                    : isEditing
                                    ? 'Update Event'
                                    : 'Create Event'
                            }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { PhotoIcon } from '@heroicons/vue/24/solid';

    const route = useRoute();
    const router = useRouter();
    const isSubmitting = ref(false);

    const isEditing = computed(() => route.params.id !== undefined);

    const form = ref({
        name: '',
        description: '',
        date: '',
        time: '',
        location: '',
        category: '',
        capacity: '',
        price: '',
        image: null,
    });

    const categories = ['Conference', 'Workshop', 'Seminar', 'Networking', 'Cultural', 'Other'];

    // Load event data if editing
    onMounted(async () => {
        if (isEditing.value) {
            try {
                // TODO: Implement API call to fetch event details
                const eventId = route.params.id;
                // Mock data for now
                const eventData = {
                    name: 'Tech Conference 2024',
                    description: 'Annual technology conference',
                    date: '2024-03-15',
                    time: '09:00',
                    location: 'San Francisco, CA',
                    category: 'Conference',
                    capacity: 200,
                    price: 99.99,
                };
                form.value = { ...eventData };
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        }
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // TODO: Implement image upload logic
            form.value.image = file;
        }
    };

    const handleSubmit = async () => {
        try {
            isSubmitting.value = true;
            // TODO: Implement API call to create/update event
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

            // Redirect to events list
            router.push('/user/organizer/events');
        } catch (error) {
            console.error('Error saving event:', error);
        } finally {
            isSubmitting.value = false;
        }
    };
</script>
