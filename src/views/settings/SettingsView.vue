<template>
  <div>
    <div class="px-4 sm:px-0">
      <h3 class="text-2xl font-semibold leading-7 text-gray-900">Settings</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Manage your general preferences.
      </p>
    </div>

    <div class="mt-6">
      <div class="divide-y divide-gray-200">
        <!-- Language Preferences -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Language & Region</h2>
          <div class="mt-4 space-y-4">
            <BaseSelect
              id="language"
              v-model="settings.language"
              label="Language"
              :options="[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
                { value: 'fr', label: 'Français' },
                { value: 'de', label: 'Deutsch' }
              ]"
            />

            <BaseSelect
              id="timezone"
              v-model="settings.timezone"
              label="Time Zone"
              :options="[
                { value: 'UTC', label: 'UTC' },
                { value: 'America/New_York', label: 'Eastern Time' },
                { value: 'America/Chicago', label: 'Central Time' },
                { value: 'America/Denver', label: 'Mountain Time' },
                { value: 'America/Los_Angeles', label: 'Pacific Time' }
              ]"
            />
          </div>
        </div>

        <!-- Theme Settings -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Theme</h2>
          <div class="mt-4 space-y-4">
            <BaseSelect
              id="theme"
              v-model="settings.theme"
              label="Color Theme"
              :options="[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'System' }
              ]"
            />

            <BaseCheckbox
              id="reducedMotion"
              v-model="settings.reducedMotion"
              label="Reduced Motion"
              description="Minimize animations and transitions."
            />
          </div>
        </div>

        <!-- Admin-only Settings -->
        <div v-if="isAdmin" class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Administrative Settings</h2>
          <div class="mt-4 space-y-4">
            <!-- System Settings -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">System</h3>
              <div class="mt-4 space-y-4">
                <BaseCheckbox
                  id="maintenanceMode"
                  v-model="settings.admin.maintenanceMode"
                  label="Maintenance Mode"
                  description="Enable maintenance mode for the entire system."
                />

                <BaseCheckbox
                  id="debugMode"
                  v-model="settings.admin.debugMode"
                  label="Debug Mode"
                  description="Enable detailed error reporting and logging."
                />
              </div>
            </div>

            <!-- User Management -->
            <div class="mt-6">
              <h3 class="text-sm font-medium text-gray-900">User Management</h3>
              <div class="mt-4 space-y-4">
                <BaseCheckbox
                  id="userRegistration"
                  v-model="settings.admin.allowUserRegistration"
                  label="Allow User Registration"
                  description="Enable new user registration on the platform."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <BaseButton
          variant="secondary"
          text="Reset"
          @click="resetSettings"
        />
        <BaseButton
          variant="primary"
          text="Save Changes"
          :loading="loading"
          loadingText="Saving..."
          @click="saveSettings"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { BaseCheckbox, BaseButton, BaseSelect } from '@/components/ui';

const userStore = useUserStore();
const loading = ref(false);

const isAdmin = computed(() => {
  return userStore.user?.role === 'admin';
});

const settings = ref({
  language: 'en',
  timezone: 'UTC',
  theme: 'light',
  reducedMotion: false,
  admin: {
    maintenanceMode: false,
    debugMode: false,
    allowUserRegistration: true
  }
});

// Reset settings to last saved state
async function resetSettings() {
  try {
    const userSettings = await userStore.fetchUserSettings();
    if (userSettings) {
      settings.value = { ...settings.value, ...userSettings };
    }
  } catch (error) {
    console.error('Failed to reset settings:', error);
  }
}

// Save settings
async function saveSettings() {
  loading.value = true;
  try {
    await userStore.updateUserSettings(settings.value);
    alert('Settings saved successfully');
  } catch (error) {
    console.error('Failed to save settings:', error);
    alert('Failed to save settings');
  } finally {
    loading.value = false;
  }
}

// Load initial settings
onMounted(async () => {
  await resetSettings();
});
</script>
