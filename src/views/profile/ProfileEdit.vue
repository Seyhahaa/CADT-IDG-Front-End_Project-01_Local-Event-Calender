<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="px-4 sm:px-0">
            <h3 class="text-2xl font-semibold leading-7 text-gray-900">Edit Profile</h3>
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Update your profile information.
            </p>
        </div>

        

        <Form @submit="handleSubmit" class="mt-6">
            <!-- Basic Information -->
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-4">
                            <label
                                for="name"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >First Name</label
                            >
                            <div class="mt-2">
                                <input name="firstname"
                                    type="text"
                                    :placeholder="user.firstname"
                                    :rules="firstnameRule"
                                    id="firstname"
                                    v-model="formData.firstname"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="firstname" />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label
                                for="name"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Last Name</label
                            >
                            <div class="mt-2">
                                <Field name="lastname"
                                    type="text"
                                    :placeholder="user.lastname"
                                    :rules="lastnameRule"
                                    id="lastname"
                                    v-model="formData.lastname"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="lastname" />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label
                                for="date"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Data of Birth</label
                            >
                            <div class="mt-2">
                                <Field name="date"
                                    type="date"
                                    id="dob"
                                    v-model="formData.date"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label
                                for="gender"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Gender</label
                            >
                            <div class="mt-2">
                                <select v-model="formData.gender" name="gender"  required :rules="genderRule"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm">
                                        <option value="">{{ user.gender }}</option>
                                        <option value="female">Male</option>
                                        <option value="male">Female</option>
                                        <option value="other">Other</option>

                                    </select>
                                    <ErrorMessage class="text-red-400" name="gender" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label
                                for="email"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Email address</label
                            >
                            <div class="mt-2">
                                <Field name="email"
                                    type="email"
                                    :placeholder="user.email"
                                    :rules="emailRule"
                                    id="email"
                                    v-model="formData.email"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="email" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label
                                for="phone"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Phone number</label
                            >
                            <div class="mt-2">
                                <Field name="phone"
                                    type="tel"
                                    :placeholder="user.phone"
                                    :rules="phoneRule"
                                    id="phone"
                                    v-model="formData.phone"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="phone" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label
                                for="address"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Address</label
                            >
                            <div class="mt-2">
                                <Field name="address"
                                    :rules="addressRule"
                                    :placeholder="user.address"
                                    type="text"
                                    id="address"
                                    v-model="formData.address"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="address" />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label
                                for="file"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Photo</label
                            >
                            <div class="mt-2">
                                <Field @change="handlefile" name="file"
                                    type="file"
                                    :rules="fileRule"
                                    id="file"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="file" />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label
                                for="Organization"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Organization</label
                            >
                            <div class="mt-2">
                                <Field name="organization"
                                    :placeholder="user.organization"
                                    type="text"
                                    :rules="organizationRule"
                                    id="organization"
                                    v-model="formData.organization"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="organization" />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label
                                for="position"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >Position</label
                            >
                            <div class="mt-2">
                                <Field name="position"
                                    :placeholder="user.position"
                                    :rules="positionRule"
                                    type="text"
                                    id="organization"
                                    v-model="formData.position"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <ErrorMessage class="text-red-400" name="position" />
                            </div>
                        </div>
                        
                        

                        <!-- <div class="col-span-full">
                            <label
                                for="about"
                                class="block text-sm font-medium leading-6 text-gray-900"
                                >About</label
                            >
                            <div class="mt-2">
                                <textarea
                                    id="about"
                                    v-model="formData.about"
                                    rows="3"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div> -->
                    </div>
                </div>

               

                <!-- Social Links -->
                <!-- <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-gray-900">Social Links</h2>
                    <div class="mt-10 space-y-6">
                        <div class="flex gap-x-3">
                            <div>
                                <input
                                    type="text"
                                    v-model="newSocialPlatform"
                                    placeholder="Platform"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div class="flex-grow">
                                <input
                                    type="url"
                                    v-model="newSocialLink"
                                    placeholder="URL"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <button
                                type="button"
                                @click="addSocialLink"
                                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                            >
                                Add
                            </button>
                        </div>
                        
                        
                    </div>
                </div> -->

              
            </div>

            <!-- Form Actions -->
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <RouterLink
                    :to="profileRoute"
                    class="text-sm font-semibold leading-6 text-gray-900"
                >
                    Cancel
                </RouterLink>
                <button
                    type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    
                >
                    Save
                </button>
            </div>
        </Form>
    </div>
</template>

<script>
import axios from 'axios';
import * as Yup from "yup";
import { ErrorMessage, Field, Form } from 'vee-validate';
export default{
    components:{
        Field,
        Form,
        ErrorMessage,
    },
    data(){
        return{
            firstnameRule: Yup.string().required(),
            laststnameRule: Yup.string().required(),
            genderRule: Yup.string().oneOf(['Male', 'Female', 'Other']),
            emailRule: Yup.string().email('Invalid email format').required('Email is required'),
            phoneRule: Yup.string().required('Phone number is required'),
            addressRule: Yup.string().required('Address is required'),
            organizationRule: Yup.string().required('Organization is required'),
            positionRule: Yup.string().required('Position is required'),
            fileRule: Yup.string().required('File is required'),

            user: '',

            formData:{
                firstname:'',
                lastname:'',
                email:'',
                phone:'',
                address:'',
                gender:'',
                organization:'',
                position:'',
                dob: '',
                file:null,
            },
        }
    },

    methods:{
        async handleSubmit(){
            const formData = new FormData();
            formData.append('firstname', this.formData.firstname);
            formData.append('lastname', this.formData.lastname);
            formData.append('email', this.formData.email);
            formData.append('phone', this.formData.phone);
            formData.append('address', this.formData.address);
            formData.append('gender', this.formData.gender);
            formData.append('organization', this.formData.organization);
            formData.append('position', this.formData.position);
            formData.append('dob', this.formData.dob);
            formData.append('file', this.formData.file);

            try{
                const response = await axios.put(`${process.env.VUE_APP_SERVER}/user/update-user/${this.user._id}`,formData)
                if(response.status == 200){
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                 this.$router.push("/user/profile")
            }catch(e){
                alert(e.message);
            }

        },
        getUserProfile(){
            const user = localStorage.getItem("user")
            this.user = JSON.parse(user);
            
            console.log(this.user);
        },

        async handlefile(event){
            this.formData.file = event.target.files[0];
        },

    },
    mounted() {
            const user = localStorage.getItem("user")
            this.user = JSON.parse(user);
            console.log(this.user._id);
        },
}

</script>
