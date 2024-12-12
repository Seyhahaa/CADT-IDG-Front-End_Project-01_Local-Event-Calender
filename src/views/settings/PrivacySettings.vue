<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="px-4 sm:px-0">
            <h3 class="text-2xl font-semibold leading-7 text-gray-900">Privacy Settings</h3>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Control your privacy and data sharing preferences.
            </p>
        </div>

        <div class="mt-6 space-y-8 divide-y divide-gray-200">
            <!-- Profile Privacy -->
            <div class="py-6">
                <h2 class="text-lg font-medium text-gray-900">Profile Privacy</h2>
                <div class="mt-4 space-y-4">
                    <BaseCheckbox
                        id="profileVisibility"
                        v-model="settings.privacy.profileVisibility"
                        label="Public Profile"
                        description="Make your profile visible to other users."
                    />

                    <BaseCheckbox
                        id="activityVisibility"
                        v-model="settings.privacy.activityVisibility"
                        label="Activity Status"
                        description="Show when you're active on the platform."
                    />

                    <BaseCheckbox
                        id="searchVisibility"
                        v-model="settings.privacy.searchVisibility"
                        label="Search Visibility"
                        description="Allow others to find you in search results."
                    />
                </div>
            </div>

            <!-- Data Sharing -->
            <div class="py-6">
                <h2 class="text-lg font-medium text-gray-900">Data Sharing</h2>
                <div class="mt-4 space-y-4">
                    <BaseCheckbox
                        id="dataAnalytics"
                        v-model="settings.privacy.dataAnalytics"
                        label="Analytics"
                        description="Allow us to use your data for analytics and improvements."
                    />

                    <BaseCheckbox
                        id="thirdPartySharing"
                        v-model="settings.privacy.thirdPartySharing"
                        label="Third-party Sharing"
                        description="Share your data with trusted partners for better services."
                    />
                </div>
            </div>
        </div>

        <!-- Save Button -->
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <BaseButton variant="secondary" text="Reset" @click="resetSettings" />
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
    import { BaseCheckbox, BaseButton } from '@/components/ui';

    const userStore = useUserStore();
    const loading = ref(false);

    const settings = ref({
        privacy: {
            profileVisibility: true,
            activityVisibility: true,
            searchVisibility: true,
            dataAnalytics: false,
            thirdPartySharing: false,
        },
    });

    // Reset settings to last saved state
    async function resetSettings() {
        try {
            const userSettings = await userStore.fetchUserSettings();
            if (userSettings?.privacy) {
                settings.value = { ...settings.value, ...userSettings.privacy };
            }
        } catch (error) {
            console.error('Failed to reset settings:', error);
        }
    }

    // Save settings
    async function saveSettings() {
        loading.value = true;
        try {
            await userStore.updateUserSettings({ privacy: settings.value });
            alert('Privacy settings saved successfully');
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
