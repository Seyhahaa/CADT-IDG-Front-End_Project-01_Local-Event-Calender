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
                    <h5
                        class="font-bold leading-7 text-gray-500 sm:tracking-tight"
                    >
                        {{ data.subTitle }}
                    </h5>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        
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
                            {{}} 
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
                    :src="data.image"
                    :alt="data.title"
                    class="h-full w-full object-cover object-center"
                />
            </div>

            <!-- Event Details -->
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    <div class="prose max-w-none mb-5">
                        <h3 class="text-2xl font-bold mb-5">About this News</h3>
                        <p>{{ data.content }}</p>
                    </div>

                </div>
                

                <!-- Sidebar -->
                <div>
                    <div class="rounded-lg bg-gray-50 p-6">
                        <h3 class="text-base font-semibold leading-6 text-gray-900">
                            News Details
                        </h3>

                        <dl class="mt-4 space-y-4">
                            <div>
                                <dt class="text-sm font-medium text-gray-500">Date and Time</dt>
                                <dd class="mt-1 text-sm text-gray-900">
                                    {{ newDate }}
                                </dd>
                            </div>

                            <div>
                                <dd class="mt-1 text-md text-yellow-700">{{ during }}</dd>
                            </div>
                        </dl>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import moment from'moment';
export default {
    name: 'PopupForm',
    data() {
        return {
            newDate: '',
            during: '',
            eventId: useRoute().params.id,
            data: '',

        };
    },
    mounted() {
        this.getData()
    },

    methods: {
    async getData() {
        try{
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/news/${this.eventId}`)

        this.data= response.data;
        this.newDate = moment(response.data.createdAt).format('LLLL')
        this.during = moment(response.data.createdAt).fromNow()
        console.log(this.newDate);
        }catch(e){console.log(e.message)}
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
},
    
};
</script>
