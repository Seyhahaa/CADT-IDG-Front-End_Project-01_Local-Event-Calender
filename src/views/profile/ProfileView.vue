<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div v-if="userStore.loading" class="flex justify-center items-center py-10">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>

    <div v-else-if="userStore.error" class="p-4 text-red-600 bg-red-50 rounded-md">
      {{ userStore.error }}
    </div>

    <template v-else-if="userStore.userProfile">
      <!-- Profile Header with Edit Button -->
      <div class="flex justify-between items-center pt-10">
        <div>
          <h2 class="text-base font-semibold leading-7 text-gray-900">Profile Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Personal details and information.</p>
        </div>
        <div v-if="canEdit">
          <RouterLink
            :to="editProfileRoute"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit Profile
          </RouterLink>
        </div>
      </div>

      <!-- Profile Content -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Details</h3>
          <p class="mt-1 text-sm leading-6 text-gray-600">View your profile information.</p>
        </div>

        <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <dl class="divide-y divide-gray-100">
            <!-- Role Badge -->
            <div v-if="showRole" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Role</dt>
              <dd class="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                <span
                  :class="[
                    'inline-flex rounded-full px-2 py-1 text-xs font-semibold',
                    isAdmin ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  ]"
                >
                  {{ isAdmin ? 'Administrator' : 'User' }}
                </span>
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ userStore.userProfile.name }}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ userStore.userProfile.email }}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Phone number</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ userStore.userProfile.phone }}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Location</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ userStore.userProfile.location }}
              </dd>
            </div>

            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ userStore.userProfile.about }}
              </dd>
            </div>

            <!-- Interests -->
            <div v-if="userStore.userProfile.interests?.length" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Interests</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="interest in userStore.userProfile.interests"
                    :key="interest"
                    class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                  >
                    {{ interest }}
                  </span>
                </div>
              </dd>
            </div>

            <!-- Social Links -->
            <div v-if="userStore.userProfile.socialLinks" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-6 text-gray-900">Social Links</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div class="flex gap-4">
                  <a
                    v-for="(link, platform) in userStore.userProfile.socialLinks"
                    :key="platform"
                    :href="link"
                    target="_blank"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    {{ platform }}
                  </a>
                </div>
              </dd>
            </div>

            <!-- Admin-only section -->
            <template v-if="isAdmin">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium leading-6 text-gray-900">Administrative Access</dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <div class="flex flex-col gap-2">
                    <div>Last login: {{ userStore.userProfile.lastLogin }}</div>
                    <div>Access Level: {{ userStore.userProfile.accessLevel }}</div>
                  </div>
                </dd>
              </div>
            </template>
          </dl>
        </div>
      </div>

      <!-- Actions -->
      <div v-if="canEdit" class="mt-6 flex items-center justify-end gap-x-6">
        <RouterLink
          :to="editProfileRoute"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Edit Profile
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps({
  showRole: {
    type: Boolean,
    default: true
  },
  userId: {
    type: [Number, String],
    default: null
  }
});

const route = useRoute();
const userStore = useUserStore();

// Function to load profile data
const loadProfileData = async () => {
  try {
    // Get the effective user ID
    const effectiveUserId = props.userId || userStore.user?.id;

    if (!effectiveUserId) {
      console.error('No user ID available');
      return;
    }

    await userStore.fetchUserProfile(effectiveUserId);
  } catch (error) {
    console.error('Error loading profile:', error);
  }
};

// Watch for route changes
watch(
  () => route.path,
  async () => {
    await loadProfileData();
  }
);

// Initial load
onMounted(async () => {
  await loadProfileData();
});

const isAdmin = computed(() => {
  return route.path.startsWith('/admin') || userStore.user?.role === 'admin';
});

const canEdit = computed(() => {
  return isAdmin.value || userStore.user?.id === props.userId;
});

const editProfileRoute = computed(() => {
  const basePath = isAdmin.value ? '/admin' : '/user';
  return `${basePath}/profile/edit`;
});
</script>
