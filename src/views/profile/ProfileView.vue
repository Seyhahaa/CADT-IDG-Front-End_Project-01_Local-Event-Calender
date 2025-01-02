<template>
    <div class="space-y-10 divide-y divide-gray-900/10">


   
        <section>
            <!-- Profile Header with Edit Button -->
            <div class="flex justify-between items-center pt-10">
                <div>
                    <h2 class="text-base font-semibold leading-7 text-gray-900">
                        Profile Information
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                        Personal details and information.
                    </p>
                </div>
                <div>
                    <RouterLink
                        to="/user/edit"
                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Edit Profile
                    </RouterLink>
                </div>
            </div>

            <!-- Profile Content -->
            <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">Details</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                        View your profile information.
                    </p>
                    <img :src="user.path" alt="">
                </div>

                <div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                    <dl class="divide-y divide-gray-100">
                        <!-- Role Badge -->
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Role</dt>
                            <dd class="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                <span class="
                                        inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700">
                                    {{ user.role }}
                                </span>
                            </dd>
                        </div>

                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ fullname }}
                            </dd>
                        </div>

                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ user.email }}
                            </dd>
                        </div>

                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">
                                Phone number
                            </dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ user.phone }}
                            </dd>
                        </div>

                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Organization</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ user.organization }}
                            </dd>
                        </div>

                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Position</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ user.position }}
                            </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium leading-6 text-gray-900">date of birth</dt>
                            <dd v-if="dob != 'null' " class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {{ dob }}
                            </dd>
                        </div>


                    </dl>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import moment from 'moment';

    export default{
        data(){
            return{
                user: '',
                fullname: '',
                dob: ''
            }
        },
        methods:{
            getUser(){
                const user = localStorage.getItem("user")
                this.user = JSON.parse(user);
                this.fullname = this.user.firstname.concat(' ', this.user.lastname);

                if(this.user.dob != null){
                    this.dob = moment(this.user.dob).format('LL')
                }
                this.dob = '';

                console.log(this.dob)
            }
        },
        mounted(){this.getUser()}
    }
   
</script>
