<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">
                    {{ isEditing ? 'Edit Category' : 'Create Category' }}
                </h1>
                <p class="mt-2 text-sm text-gray-700">
                    {{
                        isEditing
                            ? 'Update the category details below.'
                            : 'Add a new category to the system.'
                    }}
                </p>
            </div>
        </div>

        <form @submit.prevent="handleSubmit" class="mt-6 space-y-6">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <!-- Name -->
                <div class="sm:col-span-4">
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
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

                <!-- Description -->
                <div class="col-span-full">
                    <label
                        for="description"
                        class="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Description
                    </label>
                    <div class="mt-2">
                        <textarea
                            id="description"
                            v-model="form.description"
                            rows="3"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <!-- Status -->
                <div class="sm:col-span-4">
                    <div class="flex items-center gap-x-3">
                        <input
                            id="active"
                            v-model="form.active"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                            for="active"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Active
                        </label>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">
                        Inactive categories won't be available for new events.
                    </p>
                </div>
            </div>

            <!-- Form Actions -->
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <RouterLink
                    to="/admin/categories"
                    class="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </RouterLink>
                <button
                    type="submit"
                    :disabled="loading"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {{ loading ? 'Saving...' : isEditing ? 'Update Category' : 'Create Category' }}
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useRoute, useRouter, RouterLink } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const loading = ref(false);

    const isEditing = computed(() => route.params.id !== undefined);

    const form = ref({
        name: '',
        description: '',
        active: true,
    });

    onMounted(async () => {
        if (isEditing.value) {
            try {
                loading.value = true;
                // Add API call here to fetch category
                // For now, using mock data
                const mockCategory = {
                    id: route.params.id,
                    name: 'Sample Category',
                    description: 'Sample Description',
                    active: true,
                };
                form.value = { ...mockCategory };
            } catch (error) {
                console.error('Failed to fetch category:', error);
            } finally {
                loading.value = false;
            }
        }
    });

    const handleSubmit = async () => {
        try {
            loading.value = true;
            // Add API call here
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
            router.push('/admin/categories');
        } catch (error) {
            console.error('Failed to save category:', error);
        } finally {
            loading.value = false;
        }
    };
</script>
