<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="px-4 sm:px-0">
      <h3 class="text-2xl font-semibold leading-7 text-gray-900">Edit Profile</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Update your profile information.
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="userStore.loading" class="mt-6 text-center">
      <p class="text-gray-500">Loading profile...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="userStore.error" class="mt-6 text-center text-red-600">
      {{ userStore.error }}
    </div>

    <form v-else @submit.prevent="handleSubmit" class="mt-6">
      <!-- Basic Information -->
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full name</label>
              <div class="mt-2">
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
              <div class="mt-2">
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
              <div class="mt-2">
                <input
                  type="text"
                  id="location"
                  v-model="formData.location"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
              <div class="mt-2">
                <textarea
                  id="about"
                  v-model="formData.about"
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Interests -->
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Interests</h2>
          <div class="mt-10 space-y-6">
            <div class="flex gap-x-3">
              <div class="flex-grow">
                <input
                  type="text"
                  v-model="newInterest"
                  @keyup.enter="addInterest"
                  placeholder="Add an interest"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="button"
                @click="addInterest"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Add
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="interest in formData.interests"
                :key="interest"
                class="inline-flex items-center gap-x-1 rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600"
              >
                {{ interest }}
                <button
                  type="button"
                  @click="removeInterest(interest)"
                  class="group relative rounded-sm hover:bg-gray-200"
                >
                  <span class="sr-only">Remove interest {{ interest }}</span>
                  <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Social Links</h2>
          <div class="mt-10 space-y-6">
            <div class="flex gap-x-3">
              <div>
                <input
                  type="text"
                  v-model="newSocialPlatform"
                  placeholder="Platform"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="flex-grow">
                <input
                  type="url"
                  v-model="newSocialLink"
                  placeholder="URL"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="button"
                @click="addSocialLink"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Add
              </button>
            </div>
            <div class="space-y-2">
              <div
                v-for="(link, platform) in formData.socialLinks"
                :key="platform"
                class="flex items-center justify-between rounded-md border border-gray-200 p-2"
              >
                <div>
                  <span class="font-medium">{{ platform }}:</span>
                  <a :href="link" target="_blank" class="ml-2 text-indigo-600 hover:text-indigo-500">{{ link }}</a>
                </div>
                <button
                  type="button"
                  @click="removeSocialLink(platform)"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Remove {{ platform }}</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Admin-only fields -->
        <div v-if="isAdmin" class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Administrative Settings</h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="accessLevel" class="block text-sm font-medium leading-6 text-gray-900">Access Level</label>
              <div class="mt-2">
                <select
                  id="accessLevel"
                  v-model="formData.accessLevel"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="user">User</option>
                  <option value="moderator">Moderator</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Actions -->
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <RouterLink
          :to="profileRoute"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </RouterLink>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          :disabled="userStore.loading"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { RouterLink, useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const isAdmin = computed(() => {
  return route.path.startsWith('/admin') || userStore.user?.role === 'admin';
});

const profileRoute = computed(() => {
  return isAdmin.value ? '/admin/profile' : '/user/profile';
});

const formData = ref({
  name: '',
  email: '',
  phone: '',
  location: '',
  about: '',
  interests: [],
  socialLinks: {},
  accessLevel: 'user'
});

const newInterest = ref('');
const newSocialPlatform = ref('');
const newSocialLink = ref('');

// Initialize form data from store
onMounted(async () => {
  try {
    const userId = userStore.user?.id;
    if (!userId) {
      console.error('No user ID available');
      return;
    }
    await userStore.fetchUserProfile(userId);
    if (userStore.userProfile) {
      formData.value = {
        ...formData.value,
        ...userStore.userProfile,
        interests: userStore.userProfile.interests || [],
        socialLinks: userStore.userProfile.socialLinks || {}
      };
    }
  } catch (error) {
    console.error('Error loading profile:', error);
  }
});

// Interest management
function addInterest() {
  if (newInterest.value.trim()) {
    formData.value.interests.push(newInterest.value.trim());
    newInterest.value = '';
  }
}

function removeInterest(interest) {
  formData.value.interests = formData.value.interests.filter(i => i !== interest);
}

// Social links management
function addSocialLink() {
  if (newSocialPlatform.value.trim() && newSocialLink.value.trim()) {
    formData.value.socialLinks[newSocialPlatform.value.trim()] = newSocialLink.value.trim();
    newSocialPlatform.value = '';
    newSocialLink.value = '';
  }
}

function removeSocialLink(platform) {
  const { [platform]: removed, ...rest } = formData.value.socialLinks;
  formData.value.socialLinks = rest;
}

// Form submission
async function handleSubmit() {
  try {
    await userStore.updateProfile(formData.value);
    router.push(profileRoute.value);
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
}
</script>
