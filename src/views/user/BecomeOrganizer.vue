<template>
  <div class="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
    <BaseCard>
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-2xl font-semibold leading-6 text-gray-900">Become an Event Organizer</h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p
            >Join our community of event organizers and start hosting your own events. Tell us about
            yourself and your experience.</p
          >
        </div>

        <form @submit.prevent="submitApplication" class="mt-8 space-y-6">
          <!-- Organization Information -->
          <div>
            <h4 class="text-lg font-medium text-gray-900">Organization Information</h4>
            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div class="sm:col-span-2">
                <BaseInput
                  v-model="form.organizationName"
                  id="orgName"
                  label="Organization Name"
                  placeholder="Enter your organization name"
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <BaseTextarea
                  v-model="form.description"
                  id="description"
                  label="Organization Description"
                  placeholder="Tell us about your organization..."
                  required
                  :rows="3"
                />
              </div>

              <div>
                <BaseInput
                  v-model="form.website"
                  id="website"
                  label="Website"
                  type="url"
                  placeholder="https://example.com"
                  hint="Optional"
                />
              </div>

              <div>
                <BaseInput
                  v-model="form.phone"
                  id="phone"
                  label="Contact Phone"
                  type="tel"
                  placeholder="Enter contact phone"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div>
            <h4 class="text-lg font-medium text-gray-900">Experience & Qualifications</h4>
            <div class="mt-4 space-y-4">
              <BaseTextarea
                v-model="form.experience"
                id="experience"
                label="Past Event Experience"
                placeholder="Tell us about any events you've organized in the past..."
                required
                :rows="4"
              />

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Types of Events You Plan to Host</label
                >
                <div class="space-y-2">
                  <BaseCheckbox
                    v-for="type in eventTypes"
                    :key="type.value"
                    v-model="form.eventTypes[type.value]"
                    :id="'event-type-' + type.value"
                    :label="type.label"
                  />
                </div>
              </div>

              <BaseTextarea
                v-model="form.motivation"
                id="motivation"
                label="Why do you want to become an organizer?"
                placeholder="Tell us about your motivation..."
                required
                :rows="3"
              />
            </div>
          </div>

          <!-- References -->
          <div>
            <h4 class="text-lg font-medium text-gray-900">References (Optional)</h4>
            <div class="mt-4 space-y-4">
              <div
                v-for="(ref, index) in form.references"
                :key="index"
                class="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <BaseInput v-model="ref.name" :id="'refName' + index" label="Reference Name" />
                <BaseInput
                  v-model="ref.contact"
                  :id="'refContact' + index"
                  label="Contact Information"
                />
              </div>
              <BaseButton type="button" variant="secondary" @click="addReference">
                + Add Reference
              </BaseButton>
            </div>
          </div>

          <!-- Terms -->
          <BaseCheckbox
            v-model="form.acceptedTerms"
            id="terms"
            label="I agree to the terms and conditions"
            description="By submitting this application, you agree to our organizer guidelines and terms of service."
            required
          />

          <!-- Submit Button -->
          <div class="flex justify-end">
            <BaseButton type="submit" :disabled="isSubmitting" :loading="isSubmitting">
              {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
            </BaseButton>
          </div>
        </form>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const isSubmitting = ref(false);

  const eventTypes = [
    { value: 'conference', label: 'Conferences' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'seminar', label: 'Seminars' },
    { value: 'networking', label: 'Networking Events' },
    { value: 'cultural', label: 'Cultural Events' },
    { value: 'sports', label: 'Sports Events' },
    { value: 'entertainment', label: 'Entertainment Events' },
    { value: 'other', label: 'Other' },
  ];

  const form = ref({
    organizationName: '',
    description: '',
    website: '',
    phone: '',
    experience: '',
    eventTypes: {},
    motivation: '',
    references: [{ name: '', contact: '' }],
    acceptedTerms: false,
  });

  // Initialize eventTypes object
  eventTypes.forEach((type) => {
    form.value.eventTypes[type.value] = false;
  });

  const addReference = () => {
    form.value.references.push({ name: '', contact: '' });
  };

  const submitApplication = async () => {
    try {
      isSubmitting.value = true;

      // Convert eventTypes from object to array of selected types
      const selectedEventTypes = Object.entries(form.value.eventTypes)
        .filter(([_, selected]) => selected)
        .map(([type]) => type);

      const formData = {
        ...form.value,
        eventTypes: selectedEventTypes,
      };

      // TODO: Implement API call to submit organizer application
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

      // Show success message
      alert(
        'Application submitted successfully! We will review your application and get back to you soon.'
      );

      // Redirect to dashboard
      router.push('/user/dashboard');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      isSubmitting.value = false;
    }
  };
</script>
