<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="px-4 sm:px-0">
      <h3 class="text-2xl font-semibold leading-7 text-gray-900">Profile Settings</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Update your profile information and preferences.
      </p>
    </div>

    <div class="mt-6">
      <div class="divide-y divide-gray-200">
        <!-- Basic Information -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Basic Information</h2>
          <div class="mt-4 space-y-4">
            <BaseInput
              id="displayName"
              v-model="profile.displayName"
              label="Display Name"
              type="text"
              required
            />

            <BaseTextarea
              id="bio"
              v-model="profile.bio"
              label="Bio"
              description="Write a few sentences about yourself."
              :rows="4"
            />

            <BaseInput
              id="location"
              v-model="profile.location"
              label="Location"
              type="text"
            />

            <BaseInput
              id="website"
              v-model="profile.website"
              label="Website"
              type="url"
              placeholder="https://"
            />
          </div>
        </div>

        <!-- Social Links -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Social Links</h2>
          <div class="mt-4 space-y-4">
            <BaseInput
              id="twitter"
              v-model="profile.social.twitter"
              label="Twitter"
              type="text"
              placeholder="@username"
            />

            <BaseInput
              id="linkedin"
              v-model="profile.social.linkedin"
              label="LinkedIn"
              type="url"
              placeholder="https://linkedin.com/in/username"
            />

            <BaseInput
              id="github"
              v-model="profile.social.github"
              label="GitHub"
              type="text"
              placeholder="username"
            />
          </div>
        </div>

        <!-- Profile Visibility -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Profile Visibility</h2>
          <div class="mt-4 space-y-4">
            <BaseCheckbox
              id="publicProfile"
              v-model="profile.visibility.publicProfile"
              label="Public Profile"
              description="Make your profile visible to everyone."
            />

            <BaseCheckbox
              id="showEmail"
              v-model="profile.visibility.showEmail"
              label="Show Email"
              description="Display your email address on your public profile."
            />

            <BaseCheckbox
              id="showLocation"
              v-model="profile.visibility.showLocation"
              label="Show Location"
              description="Display your location on your public profile."
            />
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <BaseButton
          variant="secondary"
          text="Reset"
          @click="resetProfile"
        />
        <BaseButton
          variant="primary"
          text="Save Changes"
          :loading="loading"
          loadingText="Saving..."
          @click="saveProfile"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { BaseInput, BaseTextarea, BaseCheckbox, BaseButton } from '@/components/ui';

const userStore = useUserStore();
const loading = ref(false);

const profile = ref({
  displayName: '',
  bio: '',
  location: '',
  website: '',
  social: {
    twitter: '',
    linkedin: '',
    github: ''
  },
  visibility: {
    publicProfile: true,
    showEmail: false,
    showLocation: true
  }
});

// Reset profile to last saved state
async function resetProfile() {
  try {
    const userProfile = await userStore.fetchUserProfile();
    if (userProfile) {
      profile.value = { ...profile.value, ...userProfile };
    }
  } catch (error) {
    console.error('Failed to reset profile:', error);
  }
}

// Save profile
async function saveProfile() {
  loading.value = true;
  try {
    await userStore.updateUserProfile(profile.value);
    alert('Profile saved successfully');
  } catch (error) {
    console.error('Failed to save profile:', error);
    alert('Failed to save profile');
  } finally {
    loading.value = false;
  }
}

// Load initial profile
onMounted(async () => {
  await resetProfile();
});
</script>
