<template>
  <div class="p-6 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">{{ event?.title }}</h1>
      <div class="flex gap-3">
        <router-link
          :to="`/admin/events/${event?.id}/edit`"
          class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Edit Event
        </router-link>
        <button
          @click="confirmDelete"
          class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete Event
        </button>
      </div>
    </div>

    <div v-if="event" class="space-y-6">
      <!-- Main Image and Basic Info -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <img
          :src="event.image"
          class="w-full h-64 object-cover"
          :alt="event.title"
        />
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <span
              class="px-3 py-1 text-sm font-semibold rounded-full"
              :class="getStatusClass(event.status)"
            >
              {{ event.status }}
            </span>
            <span class="text-2xl font-bold text-gray-900">
              {{ event.price ? `$${event.price}` : "Free" }}
            </span>
          </div>
          <p class="text-gray-600 mb-4">{{ event.description }}</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="font-medium text-gray-500">Date:</span>
              <span class="ml-2">{{ formatDate(event.date) }}</span>
            </div>
            <div>
              <span class="font-medium text-gray-500">Location:</span>
              <span class="ml-2">{{ event.location }}</span>
            </div>
            <div>
              <span class="font-medium text-gray-500">Category:</span>
              <span class="ml-2">{{ event.category }}</span>
            </div>
            <div>
              <span class="font-medium text-gray-500">Capacity:</span>
              <span class="ml-2">{{ event.capacity }} attendees</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Section -->
      <div v-if="event.videoUrl" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">Event Preview</h2>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="getEmbedUrl(event.videoUrl)"
            class="w-full h-full rounded-lg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <!-- Organizer Information -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4">Organizer Information</h2>
        <div class="space-y-2">
          <div>
            <span class="font-medium text-gray-500">Name:</span>
            <span class="ml-2">{{ event.organizer.name }}</span>
          </div>
          <div>
            <span class="font-medium text-gray-500">Contact:</span>
            <a
              :href="`mailto:${event.organizer.email}`"
              class="ml-2 text-blue-600 hover:text-blue-800"
            >
              {{ event.organizer.email }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-500">Event not found</p>
      <router-link
        to="/admin/events"
        class="text-blue-600 hover:text-blue-800 mt-4 inline-block"
      >
        Back to Events
      </router-link>
    </div>

    <!-- Delete Confirmation Dialog -->
    <DeleteConfirmationDialog
      v-if="showDeleteDialog"
      :event="event"
      @confirm="handleDelete"
      @cancel="cancelDelete"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEvents } from "@/composables/useEvents.js";
import DeleteConfirmationDialog from "@/components/events/DeleteConfirmationDialog.vue";

const router = useRouter();
const route = useRoute();
const { getEvent, deleteEvent } = useEvents();
const event = ref(null);
const showDeleteDialog = ref(false);

onMounted(() => {
  const eventId = Number(route.params.id);
  const foundEvent = getEvent(eventId);
  if (foundEvent) {
    event.value = foundEvent;
  }
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getStatusClass = (status) => {
  const classes = {
    Upcoming: "bg-yellow-100 text-yellow-800",
    "In Progress": "bg-green-100 text-green-800",
    Completed: "bg-gray-100 text-gray-800",
    Cancelled: "bg-red-100 text-red-800",
  };
  return classes[status] || "";
};

const getEmbedUrl = (url) => {
  // Convert YouTube URL to embed URL
  if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

const confirmDelete = () => {
  showDeleteDialog.value = true;
};

const handleDelete = async () => {
  if (event.value) {
    await deleteEvent(event.value.id);
    router.push("/admin/events");
  }
};

const cancelDelete = () => {
  showDeleteDialog.value = false;
};
</script>
