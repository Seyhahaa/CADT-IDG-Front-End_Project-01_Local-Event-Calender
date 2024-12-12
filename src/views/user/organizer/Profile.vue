<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="space-y-10">
            <!-- Profile Header -->
            <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                <div class="px-4 sm:px-0">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">
                        Organizer Profile
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                        Manage your organizer profile and information visible to event attendees.
                    </p>
                </div>

                <form
                    class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
                    @submit.prevent="saveProfile"
                >
                    <div class="px-4 py-6 sm:p-8">
                        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <!-- Organization Info -->
                            <div class="sm:col-span-4">
                                <label
                                    for="orgName"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Organization Name</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="text"
                                        id="orgName"
                                        v-model="form.organizationName"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label
                                    for="description"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Organization Description</label
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
                            </div>

                            <!-- Contact Information -->
                            <div class="sm:col-span-4">
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Contact Email</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="form.email"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label
                                    for="phone"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Contact Phone</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="tel"
                                        id="phone"
                                        v-model="form.phone"
                                        required
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <!-- Website -->
                            <div class="sm:col-span-4">
                                <label
                                    for="website"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >Website</label
                                >
                                <div class="mt-2">
                                    <input
                                        type="url"
                                        id="website"
                                        v-model="form.website"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <!-- Social Media Links -->
                            <div class="col-span-full">
                                <label class="block text-sm font-medium leading-6 text-gray-900"
                                    >Social Media Links</label
                                >
                                <div class="mt-2 space-y-4">
                                    <div
                                        v-for="(platform, index) in socialPlatforms"
                                        :key="platform.id"
                                        class="flex gap-4"
                                    >
                                        <div class="w-1/3">
                                            <select
                                                v-model="platform.type"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="facebook">Facebook</option>
                                                <option value="twitter">Twitter</option>
                                                <option value="instagram">Instagram</option>
                                                <option value="linkedin">LinkedIn</option>
                                            </select>
                                        </div>
                                        <div class="flex-1">
                                            <input
                                                type="url"
                                                v-model="platform.url"
                                                placeholder="Enter URL"
                                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            @click="removeSocialPlatform(index)"
                                            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        @click="addSocialPlatform"
                                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-50"
                                    >
                                        Add Social Media Link
                                    </button>
                                </div>
                            </div>

                            <!-- Logo Upload -->
                            <div class="col-span-full">
                                <label class="block text-sm font-medium leading-6 text-gray-900"
                                    >Organization Logo</label
                                >
                                <div class="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon
                                        v-if="!form.logo"
                                        class="h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />
                                    <img v-else :src="form.logo" class="h-12 w-12 rounded-full" />
                                    <button
                                        type="button"
                                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        @click="$refs.logoInput.click()"
                                    >
                                        Change
                                    </button>
                                    <input
                                        ref="logoInput"
                                        type="file"
                                        accept="image/*"
                                        class="hidden"
                                        @change="handleLogoUpload"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
                    >
                        <button
                            type="button"
                            class="text-sm font-semibold leading-6 text-gray-900"
                            @click="resetForm"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                        >
                            {{ isSubmitting ? 'Saving...' : 'Save Changes' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { UserCircleIcon } from '@heroicons/vue/24/outline';

    const isSubmitting = ref(false);

    // Form data
    const form = ref({
        organizationName: '',
        description: '',
        email: '',
        phone: '',
        website: '',
        logo: null,
    });

    // Social media platforms
    const socialPlatforms = ref([{ id: 1, type: 'facebook', url: '' }]);

    // Load profile data
    onMounted(async () => {
        try {
            // TODO: Implement API call to fetch organizer profile
            // Mock data for now
            const profileData = {
                organizationName: 'Tech Events Co.',
                description: 'We organize cutting-edge technology events and conferences.',
                email: 'contact@techevents.co',
                phone: '+1 (555) 123-4567',
                website: 'https://techevents.co',
                logo: null,
            };
            form.value = { ...profileData };
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    });

    // Methods
    const addSocialPlatform = () => {
        socialPlatforms.value.push({
            id: Date.now(),
            type: 'facebook',
            url: '',
        });
    };

    const removeSocialPlatform = (index) => {
        socialPlatforms.value.splice(index, 1);
    };

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // TODO: Implement logo upload logic
            const reader = new FileReader();
            reader.onload = (e) => {
                form.value.logo = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const saveProfile = async () => {
        try {
            isSubmitting.value = true;
            // TODO: Implement API call to save profile
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
            alert('Profile saved successfully!');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to save profile. Please try again.');
        } finally {
            isSubmitting.value = false;
        }
    };

    const resetForm = () => {
        // Reset form to initial values
        onMounted();
    };
</script>
