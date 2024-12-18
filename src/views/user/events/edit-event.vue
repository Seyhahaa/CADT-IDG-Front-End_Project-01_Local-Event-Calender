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
        <!-- Event Header -->

        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-6">
                <form @submit.prevent="edditEvent" class="space-y-4">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <div class="mb-5">
                                <label class="sr-only" for="name">Title</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    :placeholder="data.title"
                                    type="text"
                                    id="title"
                                    v-model="formData.title"
                                />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
                                <div>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        :placeholder="data.email"
                                        type="email"
                                        id="email"
                                        v-model="formData.email"
                                    />
                                </div>

                                <div class="mb-5">
                                    <label class="sr-only" for="phone">Phone</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        :placeholder="data.phone"
                                        type="tel"
                                        id="phone"
                                        v-model="formData.phone"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Address</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        :placeholder="data.address"
                                        type="text"
                                        id="address"
                                        v-model="formData.address"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Category</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        :placeholder="data.category"
                                        type="text"
                                        id="category"
                                        v-model="formData.category"
                                    />
                                </div>
                                <div>
                                    <label class="" for="email">Your Profile Picture</label>
                                    <input
                                    @change="onFileSelected"
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        :placeholder="data.images"
                                        type="file"
                                        id="files"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Category</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        :placeholder="data.date"
                                        type="date"
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
                                    :placeholder="data.description"
                                    rows="15"
                                    id="description"
                                    v-model="formData.description"
                                ></textarea>
                            </div>
                        </div>
                        <div class="">
                            <button
                                type="submit"
                                class="rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                រក្សាទុក
                            </button>
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
                files: null,
            },
        };
    },
    mounted() {
        this.getData()
    },

    methods: {
        async edditEvent() {
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
            const response = await axios.put(`${process.env.VUE_APP_SERVER}/event/${this.eventId}`,formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if(response.status == 200) this.$router.push("/user")
            }catch(e){console.log(e.message)}
        },
    async getData(id) {
        const token = localStorage.getItem('token');
        const eventId = useRoute().params.id;
        console.log(eventId);
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/event/${eventId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        this.data= response.data;
        console.log(this.data);
    },
    onFileSelected(event){
        this.formData.files = event.target.files[0];
        console.log(this.formData.files);
    }
},
    
};
</script>
