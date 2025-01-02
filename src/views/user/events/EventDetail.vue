<template>
    <div>
        <!-- Loading State -->
        <div v-if="loading" class="text-center">
            <p class="text-gray-500">Loading event details...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center">
            <p class="text-red-500">{{ error }}</p>
        </div>

        <!-- Event Content -->
        <div v-else>
            <!-- Event Header -->
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="min-w-0 flex-1">
                    <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight"
                    >
                        {{ data.title }}
                    </h2>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <CalendarIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{ new Date(data.date).toLocaleDateString('en-KH') }}
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{ data.address }}
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <UserGroupIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{}} attendees
                        </div>
                    </div>
                </div>
                <div class="mt-5 flex lg:ml-4 lg:mt-0">
                    <!-- <span class="ml-3 hidden sm:block">
                        <button  @click="edditEvent(events._id)"
                            type="button"
                            class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <TicketIcon class="-ml-0.5 mr-1.5 h-5" aria-hidden="true" />
                            កែប្រែ
                        </button>
                    </span> -->
                </div>
            </div>

            <!-- Event Image -->
            <div class="mt-8 aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                <img
                    :src="data.images"
                    :alt="data.title"
                    class="h-full w-full object-cover object-center"
                />
            </div>

            <!-- Event Details -->
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    <div class="prose max-w-none mb-5">
                        <h3 class="text-2xl font-bold mb-5">About this event</h3>
                        <p>{{ data.description }}</p>
                    </div>
                    <h2 class="text-2xl font-bold mb-5">Who's speaking</h2>
                    <div class="flex flex-wrap justify-items-center text-center gap-5">
                    <div  v-for="person in speaker" :key="person.id">
                        <div class="flex flex-col max-w-[10rem]">
                            <img :src="person.photo" alt="" class="rounded-full w-[8rem] h-[8rem] object-cover">
                            <h4 class="text-sm font-semibold mt-3">{{ person.name }}</h4>
                            <p>{{ person.company }}</p>
                        </div>
                    </div>
                </div>
                </div>
                

                <!-- Sidebar -->
                <div>
                    <div class="rounded-lg bg-gray-50 p-6">
                        <h3 class="text-base font-semibold leading-6 text-gray-900">
                            Event Details
                        </h3>

                        <dl class="mt-4 space-y-4">
                            <div>
                                <dt class="text-sm font-medium text-gray-500">Date and Time</dt>
                                <dd class="mt-1 text-sm text-gray-900">
                                    {{ new Date(data.date).toLocaleDateString('en-KH') }}
                                </dd>
                            </div>

                            <div>
                                <dt class="text-sm font-medium text-gray-500">Location</dt>
                                <dd class="mt-1 text-sm text-gray-900">{{ data.address }}</dd>
                            </div>

                            <div>
                                <dt class="text-sm font-medium text-gray-500">Category</dt>
                                <dd class="mt-1 text-sm text-gray-900">{{ data.category }}</dd>
                            </div>
                        </dl>

                        <!-- speaker dialog -->
                        <div class="mt-5">
                            <div class="mb-5">
                            <!-- Trigger Button -->
                            <button @click="showPopup = true" class="px-4 py-2 bg-blue-500 text-white rounded">
                            Add Speaker
                            </button>
                            <button @click="popupPartner = true" class="ml-5 px-4 py-2 bg-yellow-600 text-white rounded">
                            Add Partner
                            </button>
                        </div>

                            <!-- Logo sponser -->
                            <h v-if="isPartner == true" class="font-semibold text-2xl">Our Sponsor</h>
                            
                            <div class="mt-5 flex flex-wrap justify-items-center text-center gap-5">
                                <div  v-for="p in partner" :key="p.id">
                                    <div class="flex flex-col max-w-[7rem]">
                                        <img :src="p.logo" alt="" class="rounded-full h-[7rem] object-cover">
                                    </div>
                                </div>
                            </div>

                            <!-- Popup Form speaker-->
                            <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                    <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-xl font-bold">Who Speaking</h2>
                                    <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
                                        ✕
                                    </button>
                                    </div>

                                    <form @submit.prevent="handleSubmit">
                                    <div class="mb-4">
                                        <label class="block text-gray-700 mb-2">Name</label>
                                        <input
                                        id="name"
                                        v-model="formData.name"
                                        type="text"
                                        class="w-full p-2 border rounded"
                                        required
                                        >
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-700 mb-2">Photo</label>
                                        <input
                                        @change="onFileSelected"
                                        id="file"
                                        type="file"
                                        class="w-full p-2 border rounded"
                                        required
                                        >
                                    </div>

                                    <div class="mb-4">
                                        <label class="block text-gray-700 mb-2">Company</label>
                                        <input
                                        id="company"
                                        v-model="formData.company"
                                        type="text"
                                        class="w-full p-2 border rounded"
                                        required
                                        >
                                    </div>

                                    <div class="mb-4">
                                        <label class="block text-gray-700 mb-2">Position</label>
                                        <input
                                        id="position"
                                        v-model="formData.position"
                                        class="w-full p-2 border rounded"
                                        required >
                                    </div>

                                    <div class="flex justify-end gap-2">
                                        <button
                                        type="button"
                                        @click="closePopup"
                                        class="px-4 py-2 border rounded" >Cancel
                                        </button>
                                        <button type="submit"
                                        class="px-4 py-2 bg-blue-500 text-white rounded">រក្សាទុក</button>
                                    </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Popup Form partner-->
                            <div v-if="popupPartner" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                    <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-xl font-bold">Your Partner</h2>
                                    <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
                                        ✕
                                    </button>
                                    </div>

                                    <form @submit.prevent="handlePartnerSubmit">
                                    <div class="mb-4">
                                        <label class="block text-gray-700 mb-2">Logo</label>
                                        <input multiple
                                        @change="onFileSelected"
                                        id="files"
                                        type="file"
                                        class="w-full p-2 border rounded"
                                        required
                                        >
                                    </div>

                                    <div class="flex justify-end gap-2">
                                        <button
                                        type="button"
                                        @click="closePopup"
                                        class="px-4 py-2 border rounded" >Cancel
                                        </button>
                                        <button type="submit"
                                        class="px-4 py-2 bg-blue-500 text-white rounded">រក្សាទុក</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
    name: 'PopupForm',
    data() {
        return {
            eventId: useRoute().params.id,
            data: '',

            speaker: null,

            partner: null,
            
            isPartner: false,

            showPopup: false,
            popupPartner: false,

            formData: {
                name: '',
                company: '',
                position: '',
                file: null,
                files: [],
            }
        };
    },
    mounted() {
        this.getData()
    },

    methods: {
    async getData() {
        try{
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/event/${this.eventId}`)
        const speakers = await axios.get(`${process.env.VUE_APP_SERVER}/event/speaker/${this.eventId}/`);
        const result = await axios.get(`${process.env.VUE_APP_SERVER}/event/partner/${this.eventId}/`);

        if(result.data.length > 0){
            this.isPartner = true;
        }
        this.data= response.data;

        this.speaker = speakers.data;

        this.partner = result.data;
        console.log(this.speaker);
        }catch(e){console.log(e.message)}
    },
    onFileSelected(event){
        this.formData.file = event.target.files[0];
        this.formData.files = event.target.files[0];
        console.log(this.formData.files);
    },
    closePopup() {
      this.showPopup = false
      this.popupPartner = false;
      this.resetForm()
    },
    async handleSubmit() {
      // Handle form submission here
      console.log('Form submitted:', this.formData)

      const formData = new FormData();
        formData.append('file', this.formData.file);
        formData.append('name', this.formData.name);
        formData.append('company', this.formData.company);
        formData.append('position', this.formData.position);
        console.log(this.formData.file);
        try{
        const response = await axios.post(`${process.env.VUE_APP_SERVER}/event/speaker/${this.eventId}`, formData);
        if(response.status == 201) console.log(response.data)
        console.log(response.data)
        }catch(e){console.log(e.message)}

        this.getData()
      this.closePopup()
    },
    async handlePartnerSubmit() {
        const formData = new FormData();
        formData.append('files', this.formData.files);
        try{
            const response = await axios.post(`${process.env.VUE_APP_SERVER}/event/partner/${this.eventId}`, formData);
            if(response.status == 201) console.log(response.data)
        }catch(e){console.log(e.message)}
        this.getData()
    this.closePopup();

    },

    resetForm() {
      this.formData = {
        name: '',
        company: '',
        position: '',
        file: '',
        files: '',
      }
    },
    async edditEvent(id){
            this.$router.push(`/user/events/edit-event/`+id)
        }
},
    
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-open {
  background-color: #4CAF50;
  color: white;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
}
</style>