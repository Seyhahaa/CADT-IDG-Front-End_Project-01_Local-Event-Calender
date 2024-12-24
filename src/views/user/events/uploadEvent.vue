<template>
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
        <h1 class="mb-5 font-bold text-2xl">Create Upcoming Event</h1>
        <!-- Event Header -->

        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-6">
                <form @submit.prevent="uploadEvent" class="space-y-4">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <div class="mb-5">
                                <label class="sr-only" for="name">Title</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Event title"
                                    type="text"
                                    id="title"
                                    v-model="formData.title"
                                />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
                                <div>
                                    <input
                                   
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        v-model="formData.email"
                                    />
                                </div>

                                <div class="mb-5">
                                    <label class="sr-only" for="phone">Phone</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        v-model="formData.phone"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Address</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Address"
                                        type="text"
                                        id="address"
                                        v-model="formData.address"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Category</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Category"
                                        type="text"
                                        id="category"
                                        v-model="formData.category"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="text-gray-400" for="name">Your Profile Picture</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                         @change="onFileSelected"
                                        type="file"
                                        id="files"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Category</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Date And Time"
                                        type="datetime-local"
                                        id="date"
                                        v-model="formData.date"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-2">
                            <!-- Event Name -->
                            <div class="">
                                <label class="sr-only" for="message">description</label>

                                <textarea
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Description"
                                    rows="18"
                                    id="description"
                                    v-model="formData.description"
                                ></textarea>
                            </div>
                            <div class="flex justify-end mt-5">
                            <button
                                type="submit"
                                class="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                រក្សាទុក
                            </button>
                        </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
    data() {
        return {
            eventId: useRoute().params.id,
            data: '',
            formData: {
                title: '',
                description: '',
                phone: '',
                address: '',
                category: '',
                date: '',
                files: [],
            },
        };
    },
    mounted() {
    },

    methods: {
        async uploadEvent() {
            const formData = new FormData();
            formData.append('title', this.formData.title);
            formData.append('description', this.formData.description);
            formData.append('phone', this.formData.phone);
            formData.append('address', this.formData.address);
            formData.append('category', this.formData.category);
            formData.append('date', this.formData.date);
            formData.append('files', this.formData.files);
            console.log(this.formData.title);
            try{
            const response = await axios.post(`${process.env.VUE_APP_SERVER}/event/`,formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if(response.status == 201) this.$router.push("/user")
            }catch(e){console.log(e.message)}
        },
    onFileSelected(event){
        this.formData.files = event.target.files;
        console.log(this.formData.files);
    }
},
    
};
</script>
