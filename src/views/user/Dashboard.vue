<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Dashboard</h1>
                <p class="mt-2 text-sm text-gray-700">Welcome to your personal dashboard.</p>
            </div>
            <div>
                <routerLink to="/user/events/uploadEvent" class="btn btn-primary">បង្កើតព្រឹត្តិការណ៍ថ្មី</routerLink>
            </div>
        </div>

        <!-- Quick Stats -->
        <!-- <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <CalendarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">Upcoming Events</p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">3</p>
                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpIcon
                            class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            aria-hidden="true"
                        />
                        <span class="sr-only">Increased by</span>
                        2
                    </p>
                </dd>
            </div>

            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <StarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">Favorite Events</p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">5</p>
                </dd>
            </div>

            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <ClockIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">
                        Recent Activities
                    </p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-gray-900">12</p>
                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpIcon
                            class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            aria-hidden="true"
                        />
                        <span class="sr-only">Increased by</span>
                        5
                    </p>
                </dd>
            </div>
        </dl>

        <-- Recent Events -->
        <div class="mt-8">
            <h2 class="text-base font-semibold leading-6 text-gray-900">Recent Events</h2>
            <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                                Event
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Action
                            </th>
                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="events in event" :key="events.id">
                            <td
                                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                {{ events.title.substring(0,100) }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {{ 
                                    new Date(events.date).toLocaleDateString(
                                        'en-KH')
                                        
                                     }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span>
                                    <button class="btn btn-danger" @click="deleteEvent(events._id)">លុប</button>
                                    <button class="ml-3 btn btn-warning text-white" @click="edditEvent(events._id)">កែប្រែ</button>
                                </span>
                            </td>
                            <td
                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                            >
                                <RouterLink
                                    :to="`/user/events/${events._id}`"
                                    class="text-indigo-600 hover:text-indigo-900"
                                >
                                    View
                                </RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
    export default{
    data() {
        const user = useAuthStore()
        return{

            user: user,
            event: null
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        async getData() {
        const token = localStorage.getItem('token');
        try{
        const result = await axios.get(`${process.env.VUE_APP_SERVER}/user/all-event`,{
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        this.event = result.data;
        console.log(this.user) 
        
    }catch(e) {console.log(e.message)}
        
    },
         async deleteEvent(id){
            const token = localStorage.getItem('token');
            //console.log(id)  
            try{
                const result = await axios.delete(`${process.env.VUE_APP_SERVER}/event/delete/`+id,{
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                this.getData()
            }catch(e) {console.log(e.message)}
        },
        async edditEvent(id){
            this.$router.push(`/user/events/edit-event/`+id)
        }
    }

}
</script>