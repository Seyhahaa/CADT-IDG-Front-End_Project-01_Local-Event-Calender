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
                <Form @submit="edditEvent" class="space-y-4">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <div class="mb-5">
                                <label class="sr-only" for="name">Title</label>
                                <Field
                                    class="w-full rounded-lg required border-gray-200 p-3 text-sm" name="title"
                                    :placeholder="data.title"
                                    :rules="titleRule"
                                    type="text"
                                    id="title"
                                    v-model="formData.title"
                                />
                                <ErrorMessage class="text-red-400" name="title" />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
                                
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Address</label>
                                    <Field
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm" name="address"
                                        :placeholder="data.address"
                                        type="text"
                                        id="address"
                                        :rules="addressRule"
                                        v-model="formData.address"
                                    />
                                    <ErrorMessage class="text-red-400" name="address" />
                                </div>
                                <div class="mb-5">
                                    <label class="sr-only" for="name">Category</label>
                                    <!-- <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="ប្រភេទកម្មវិធី"
                                        type="text"
                                        id="category"
                                        v-model="formData.category"
                                    /> -->
                                    <select v-model="formData.category" class="w-full rounded-lg border-gray-200 p-3 text-sm">
                                        <option value="">{{ data.category }}</option>
                                        <option value="exhibition">ការតាំងពិពណ៌</option>
                                        <option value="seminar">សិក្ខាសាលា</option>
                                        <option value="conference">កិច្ចប្រជុំ</option>
                                        <option value="social event">កម្មវិធីសង្គម</option>
                                    </select>
                                </div>
                                
                                <div class="mb-5">
                                    <label class="" for="name">ថ្ងៃចាប់ផ្តើម</label>
                                    <Field
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm" name="date"
                                        placeholder=""
                                        type="datetime-local"
                                        :rules="dateRule"
                                        id="startdate"
                                        v-model="formData.startdate"
                                    />
                                    <ErrorMessage class="text-red-400" name="date" />
                                </div>
                                <div class="mb-5">
                                    <label class="" for="name">ថ្ងៃបញ្ចប់</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="ពេលវេលា​ និងកាលបរិច្ឆេទ"
                                        type="datetime-local"
                                        id="enddate"
                                        v-model="formData.enddate"
                                    />
                                </div>
                                <div class="mb-5">
                                    <label class="text-gray-400" for="name">រូបភាពអំពីកម្មវិធី</label>
                                    <Field
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm" name="file"
                                         @change="onFileSelected"
                                        type="file"
                                        id="file"
                                        :rules="fileRule"
                                    />
                                    <ErrorMessage class="text-red-400" name="file" />
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-2">
                            <!-- Event Name -->
                            <div class="">
                                <label class="sr-only" for="message">description</label>

                                <Field as="textarea"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm" name="description"
                                    :placeholder="data.description"
                                    rows="18"
                                    id="description"
                                    :rules="descriptionRule"
                                    v-model="formData.description"
                                ></Field>
                                <ErrorMessage class="text-red-400" name="description" />
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
                </Form>
            </div>
        </section>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as Yup from "yup";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            titleRule: Yup.string().required(),
            descriptionRule: Yup.string().min(200).required(),
            addressRule: Yup.string().required(),
            dateRule: Yup.string().required(),
            fileRule: Yup.string().required(),

            eventId: useRoute().params.id,
            data: '',
            formData: {
                title: '',
                description: '',
                phone: '',
                address: '',
                category: '',
                startdate: '',
                enddate: '',
                file: null,
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
            formData.append('startdate', this.formData.startdate);
            formData.append('enddate', this.formData.enddate);
            formData.append('file', this.formData.file);
           // console.log(this.formData.title);
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
        this.formData.file = event.target.files[0];
        console.log(this.formData.file);
    }
},
    
};
</script>
