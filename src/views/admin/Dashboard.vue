<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Dashboard</h1>
                <p class="mt-2 text-sm text-gray-700">Welcome to your personal dashboard.</p>
            </div>

        </div>

        <!-- Quick Stats -->
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
                class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
                <dt>
                    <div class="absolute rounded-md bg-indigo-500 p-3">
                        <CalendarIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">All your Events</p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    
                    <p class="ml-2 flex items-baseline text-2xl font-semibold text-green-600">
                        
                        {{ total }}
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
                    <p class="ml-16 truncate text-sm font-medium text-gray-500">All News</p>
                </dt>
                <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p class="ml-2 flex items-baseline text-2xl font-semibold text-green-600">
                        
                        {{ allNews }}
                    </p>
                </dd>
            </div>
<!-- 
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
                    <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowUpIcon
                            class="h-5 w-5 flex-shrink-0 self-center text-green-500"
                            aria-hidden="true"
                        />
                        <span class="sr-only">Interested</span>
                        5
                    </p>
                </dd>
            </div> -->
        </dl>

        
        <div class="mt-8">
            <h2 class="text-3xl font-bold leading-6 text-gray-900">ព្រឹត្តិការណ៍ថ្មីៗ</h2>
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
                                    new Date(events.startdate).toLocaleDateString(
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

        <!-- News/blog -->
        <div class="mt-20">
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold leading-6 text-gray-900">News/blogs</h2>
            </div>
            <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                                News
                            </th>
                            <th
                                scope="col"
                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Image
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
                        <tr v-for="item in news" :key="item.id">
                            <td
                                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                                {{ item.title.substring(0,100) }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <img class="w-12" :src="item.image" alt="">
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span>
                                    <button class="btn btn-danger" @click="deleteNews(item._id)">លុប</button>
                                </span>
                            </td>
                            <td
                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                            >
                                <RouterLink
                                    :to="`/user/news/${item._id}`"
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
            total: '',

            user: user,
            event: null,
            news: null,
            allNews: '',
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        async getData() {
        const token = localStorage.getItem('token');
        try{
        const result = await axios.get(`${process.env.VUE_APP_SERVER}/event/all-events`)
        const res = await axios.get(`${process.env.VUE_APP_SERVER}/news/all-news`)

        this.event = result.data.docs;
        this.total = result.data.totalDocs;

        this.news = res.data.docs;
        this.allNews = res.data.totalDocs;

        console.log(this.event) 
        
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

        async deleteNews(id){
            const token = localStorage.getItem('token');
            //console.log(id)  
            try{
                const result = await axios.delete(`${process.env.VUE_APP_SERVER}/news/delete/`+id,{
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                this.getData()
            }catch(e) {alert(e.message)}
        },

    }

}
</script>