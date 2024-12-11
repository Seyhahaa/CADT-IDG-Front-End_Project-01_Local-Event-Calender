<template>
  <div>
    <div class="px-4 sm:px-0">
      <h3 class="text-2xl font-semibold leading-7 text-gray-900">Security Settings</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Manage your account security and authentication settings.
      </p>
    </div>

    <div class="mt-6">
      <div class="divide-y divide-gray-200">
        <!-- Email Settings -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Email Settings</h2>
          <div class="mt-4 space-y-4">
            <BaseInput
              id="currentEmail"
              :modelValue="userStore.user?.email"
              label="Current Email"
              type="email"
              disabled
            />

            <BaseInput
              id="newEmail"
              v-model="emailForm.newEmail"
              label="New Email"
              type="email"
              required
            />

            <BaseInput
              id="emailPassword"
              v-model="emailForm.password"
              label="Current Password"
              type="password"
              required
            />

            <div class="flex justify-end">
              <BaseButton
                variant="primary"
                text="Update Email"
                :loading="emailLoading"
                loadingText="Updating..."
                @click="updateEmail"
                :disabled="!emailForm.newEmail || !emailForm.password"
              />
            </div>
          </div>
        </div>

        <!-- Password Settings -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Password Settings</h2>
          <div class="mt-4 space-y-4">
            <BaseInput
              id="currentPassword"
              v-model="passwordForm.currentPassword"
              label="Current Password"
              type="password"
              required
            />

            <BaseInput
              id="newPassword"
              v-model="passwordForm.newPassword"
              label="New Password"
              type="password"
              required
            />

            <BaseInput
              id="confirmPassword"
              v-model="passwordForm.confirmPassword"
              label="Confirm New Password"
              type="password"
              required
            />

            <div class="flex justify-end">
              <BaseButton
                variant="primary"
                text="Update Password"
                :loading="passwordLoading"
                loadingText="Updating..."
                @click="updatePassword"
                :disabled="!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword"
              />
            </div>
          </div>
        </div>

        <!-- Two-Factor Authentication -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Two-Factor Authentication</h2>
          <div class="mt-4 space-y-4">
            <BaseCheckbox
              id="enable2FA"
              v-model="settings.twoFactorEnabled"
              label="Enable Two-Factor Authentication"
              description="Add an extra layer of security to your account by requiring a verification code in addition to your password."
            />

            <div v-if="settings.twoFactorEnabled" class="mt-4">
              <BaseButton
                variant="secondary"
                text="Configure 2FA"
                @click="configure2FA"
              />
            </div>
          </div>
        </div>

        <!-- Session Management -->
        <div class="py-6">
          <h2 class="text-lg font-medium text-gray-900">Session Management</h2>
          <div class="mt-4">
            <BaseButton
              variant="danger"
              text="Sign Out All Devices"
              :loading="sessionLoading"
              loadingText="Signing out..."
              @click="signOutAllDevices"
            />
            <p class="mt-2 text-sm text-gray-500">
              This will sign you out from all devices except your current one.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { BaseInput, BaseCheckbox, BaseButton } from '@/components/ui';

const userStore = useUserStore();
const emailLoading = ref(false);
const passwordLoading = ref(false);
const sessionLoading = ref(false);

const emailForm = ref({
  newEmail: '',
  password: ''
});

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const settings = ref({
  twoFactorEnabled: false
});

async function updateEmail() {
  if (!emailForm.value.newEmail || !emailForm.value.password) {
    alert('Please fill in all fields');
    return;
  }

  emailLoading.value = true;
  try {
    await userStore.updateEmail({
      newEmail: emailForm.value.newEmail,
      password: emailForm.value.password
    });
    emailForm.value.newEmail = '';
    emailForm.value.password = '';
    alert('Email updated successfully');
  } catch (error) {
    console.error('Failed to update email:', error);
    alert('Failed to update email');
  } finally {
    emailLoading.value = false;
  }
}

async function updatePassword() {
  if (!passwordForm.value.currentPassword ||
      !passwordForm.value.newPassword ||
      !passwordForm.value.confirmPassword) {
    alert('Please fill in all password fields');
    return;
  }

  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    alert('New passwords do not match');
    return;
  }

  passwordLoading.value = true;
  try {
    await userStore.updatePassword({
      currentPassword: passwordForm.value.currentPassword,
      newPassword: passwordForm.value.newPassword
    });
    passwordForm.value.currentPassword = '';
    passwordForm.value.newPassword = '';
    passwordForm.value.confirmPassword = '';
    alert('Password updated successfully');
  } catch (error) {
    console.error('Failed to update password:', error);
    alert('Failed to update password');
  } finally {
    passwordLoading.value = false;
  }
}

async function configure2FA() {
  // TODO: Implement 2FA configuration flow
  alert('2FA configuration will be implemented soon');
}

async function signOutAllDevices() {
  sessionLoading.value = true;
  try {
    await userStore.signOutAllDevices();
    alert('Successfully signed out from all other devices');
  } catch (error) {
    console.error('Failed to sign out all devices:', error);
    alert('Failed to sign out all devices');
  } finally {
    sessionLoading.value = false;
  }
}
</script>
