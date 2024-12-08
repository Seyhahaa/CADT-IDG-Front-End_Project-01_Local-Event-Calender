<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">
        {{ isEditing ? 'Edit Event' : 'Create New Event' }}
      </h1>
      <button @click="router.back()" class="text-gray-600 hover:text-gray-900">Cancel</button>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="bg-white rounded-lg shadow p-6 space-y-6">
        <!-- Basic Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Event Title </label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full border rounded-lg px-3 py-2"
              placeholder="Enter event title"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Category </label>
            <select v-model="form.category" required class="w-full border rounded-lg px-3 py-2">
              <option value="">Select category</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
        </div>

        <!-- Date and Location -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Date </label>
            <input
              v-model="form.date"
              type="date"
              required
              class="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Location </label>
            <input
              v-model="form.location"
              type="text"
              required
              class="w-full border rounded-lg px-3 py-2"
              placeholder="Enter event location"
            />
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Description </label>
          <textarea
            v-model="form.description"
            rows="4"
            required
            class="w-full border rounded-lg px-3 py-2"
            placeholder="Enter event description"
          ></textarea>
        </div>

        <!-- Image Upload -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Event Image </label>
          <div class="flex items-center space-x-4">
            <div
              class="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500"
              @click="triggerImageUpload"
            >
              <img
                v-if="form.image"
                :src="form.image"
                class="w-full h-full object-cover rounded-lg"
              />
              <div v-else class="text-center text-gray-500">
                <i class="fas fa-upload mb-2"></i>
                <div class="text-sm">Upload Image</div>
              </div>
            </div>
            <input
              ref="imageInput"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleImageUpload"
            />
          </div>
        </div>

        <!-- Video URL -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> Video URL (Optional) </label>
          <input
            v-model="form.videoUrl"
            type="url"
            class="w-full border rounded-lg px-3 py-2"
            placeholder="Enter YouTube or video URL"
          />
        </div>

        <!-- Price and Capacity -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Price (Optional) </label>
            <input
              v-model.number="form.price"
              type="number"
              min="0"
              step="0.01"
              class="w-full border rounded-lg px-3 py-2"
              placeholder="Enter ticket price"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Capacity (Optional)
            </label>
            <input
              v-model.number="form.capacity"
              type="number"
              min="1"
              class="w-full border rounded-lg px-3 py-2"
              placeholder="Enter maximum capacity"
            />
          </div>
        </div>

        <!-- Organizer Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Organizer Name </label>
            <input
              v-model="form.organizer.name"
              type="text"
              required
              class="w-full border rounded-lg px-3 py-2"
              placeholder="Enter organizer name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"> Organizer Email </label>
            <input
              v-model="form.organizer.email"
              type="email"
              required
              class="w-full border rounded-lg px-3 py-2"
              placeholder="Enter organizer email"
            />
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {{ isEditing ? 'Update Event' : 'Create Event' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useEvents } from '@/composables/useEvents'

const router = useRouter()
const route = useRoute()
const { getEvent, createEvent, updateEvent } = useEvents()

const categories = ['Conference', 'Workshop', 'Webinar', 'Meetup', 'Concert']
const imageInput = ref(null)

const isEditing = computed(() => route.params.id !== undefined)

const defaultForm = {
  title: '',
  description: '',
  category: '',
  date: '',
  location: '',
  image: '',
  status: 'Upcoming',
  videoUrl: '',
  organizer: {
    name: '',
    email: '',
  },
  price: undefined,
  capacity: undefined,
}

const form = ref({ ...defaultForm })

onMounted(() => {
  if (isEditing.value) {
    const event = getEvent(Number(route.params.id))
    if (event) {
      form.value = { ...event }
    } else {
      router.push('/events')
    }
  }
})

const triggerImageUpload = () => {
  imageInput.value?.click()
}

const handleImageUpload = (event) => {
  const target = event.target
  if (target.files && target.files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.image = e.target?.result
    }
    reader.readAsDataURL(target.files[0])
  }
}

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      await updateEvent(Number(route.params.id), form.value)
    } else {
      await createEvent(form.value)
    }
    router.push('/events')
  } catch (error) {
    console.error('Error saving event:', error)
  }
}
</script>
