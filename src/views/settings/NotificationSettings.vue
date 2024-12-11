<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="px-4 sm:px-0">
      <h3 class="text-2xl font-semibold leading-7 text-gray-900">Notification Settings</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Manage how and when you receive notifications.
      </p>
    </div>

    <div class="mt-6 space-y-8 divide-y divide-gray-200">
      <!-- Email Notifications -->
      <div class="py-6">
        <h2 class="text-lg font-medium text-gray-900">Email Notifications</h2>
        <div class="mt-4 space-y-4">
          <div class="flex items-start">
            <div class="flex h-6 items-center">
              <input
                id="emailUpdates"
                v-model="settings.emailNotifications.updates"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="ml-3">
              <label for="emailUpdates" class="text-sm font-medium text-gray-700">Product updates</label>
              <p class="text-sm text-gray-500">Get notified about new features and updates.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex h-6 items-center">
              <input
                id="emailEvents"
                v-model="settings.emailNotifications.events"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="ml-3">
              <label for="emailEvents" class="text-sm font-medium text-gray-700">Event notifications</label>
              <p class="text-sm text-gray-500">Receive notifications about events you're interested in.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex h-6 items-center">
              <input
                id="emailSecurity"
                v-model="settings.emailNotifications.security"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="ml-3">
              <label for="emailSecurity" class="text-sm font-medium text-gray-700">Security alerts</label>
              <p class="text-sm text-gray-500">Get notified about security updates and unusual activity.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Push Notifications -->
      <div class="py-6">
        <h2 class="text-lg font-medium text-gray-900">Push Notifications</h2>
        <div class="mt-4 space-y-4">
          <div class="flex items-start">
            <div class="flex h-6 items-center">
              <input
                id="pushEvents"
                v-model="settings.pushNotifications.events"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="ml-3">
              <label for="pushEvents" class="text-sm font-medium text-gray-700">Event reminders</label>
              <p class="text-sm text-gray-500">Receive push notifications for upcoming events.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex h-6 items-center">
              <input
                id="pushMessages"
                v-model="settings.pushNotifications.messages"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="ml-3">
              <label for="pushMessages" class="text-sm font-medium text-gray-700">Messages</label>
              <p class="text-sm text-gray-500">Get notified when you receive new messages.</p>
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
        text="Save Changes"
        :loading="loading"
        loadingText="Saving..."
        @click="saveSettings"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { BaseButton } from '@/components/ui';

const userStore = useUserStore();
const loading = ref(false);

const settings = ref({
  emailNotifications: {
    updates: false,
    events: true,
    security: true
  },
  pushNotifications: {
    events: true,
    messages: true
  }
});

// Reset settings to last saved state
async function resetSettings() {
  try {
    const userSettings = await userStore.fetchUserSettings();
    if (userSettings?.notifications) {
      settings.value = { ...settings.value, ...userSettings.notifications };
    }
  } catch (error) {
    console.error('Failed to reset settings:', error);
  }
}

// Save settings
async function saveSettings() {
  loading.value = true;
  try {
    await userStore.updateUserSettings({ notifications: settings.value });
    alert('Notification settings saved successfully');
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
