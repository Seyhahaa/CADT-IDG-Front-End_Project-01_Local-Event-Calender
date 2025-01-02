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
                <Form @submit="uploadNews" class="space-y-4">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5">
                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <div class="mb-5">
                                <label class="sr-only" for="name">Title</label>
                                <Field
                                    class="w-full rounded-lg required border-gray-200 p-3 text-sm" name="title"
                                    placeholder="ចំណងជើង"
                                    :rules="titleRule"
                                    type="text"
                                    id="title"
                                    v-model="formData.title"
                                />
                                <ErrorMessage class="text-red-400" name="title" />
                            </div>
                            <div class="mb-5">
                                <label class="sr-only" for="name">subTitle</label>
                                <Field
                                    class="w-full rounded-lg required border-gray-200 p-3 text-sm" name="subTitle"
                                    placeholder="ចំណងជើងរង"
                                    type="text"
                                    id="subTitle"
                                    v-model="formData.subTitle"
                                />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
                               

                                <div class="mb-5">
                                    <label class="text-gray-400" for="name">រូបភាពអំពីពត៌មាន</label>
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
                                <label class="sr-only" for="message"></label>

                                <Field as="textarea"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm" name="content"
                                    placeholder="ខ្លឹមសារពត៌មាន"
                                    rows="18"
                                    id="content"
                                    :rules="contentRule"
                                    v-model="formData.content"
                                ></Field>
                                <ErrorMessage class="text-red-400" name="content" />
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
            eventId: useRoute().params.id,

            titleRule: Yup.string().required(),
            contentRule: Yup.string().min(200).required(),
            fileRule: Yup.string().required(),


            data: '',
            formData: {
                title: '',
                subTitle: '',
                content: '',
                file: null,
            },
        };
    },
    mounted() {
    },

    methods: {
        async uploadNews() {
            const formData = new FormData();
            formData.append('title', this.formData.title);
            formData.append('subTitle', this.formData.subTitle);
            formData.append('content', this.formData.content);
            formData.append('file', this.formData.file);
            //console.log(this.formData.title);
            try{
            const response = await axios.post(`${process.env.VUE_APP_SERVER}/news/`,formData,
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
        this.formData.file = event.target.files[0];
        console.log(this.formData.file);
    }
},
    
};
</script>
