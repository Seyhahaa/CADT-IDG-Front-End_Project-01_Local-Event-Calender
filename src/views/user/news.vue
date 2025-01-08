<template>
    <div>
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-2xl font-semibold leading-6 text-gray-900">Dashboard</h1>
                <p class="mt-2 text-sm text-gray-700">Welcome to your personal dashboard.</p>
            </div>

        </div>

        

        <!-- News/blog -->
        <div class="mt-20">
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold leading-6 text-gray-900">News/blogs</h2>
                <routerLink to="/user/events/uploadNews" class="btn btn-primary">បង្ហេាះពត៌មានថ្មី</routerLink>

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
                                    <button class="ml-3 btn btn-warning text-white" @click="edditNews(item._id)">កែប្រែ</button>

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
        const result = await axios.get(`${process.env.VUE_APP_SERVER}/user/all-event`,{
            headers: {
                authorization: `Bearer ${token}`
            }})
        const res = await axios.get(`${process.env.VUE_APP_SERVER}/news/user`,{
            headers: {
                authorization: `Bearer ${token}`
            }
        })

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
        async edditEvent(id){
            this.$router.push(`/user/events/edit-event/`+id)
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
        async edditNews(id){
            this.$router.push(`/user/news/edit-news/`+id)
        }
    }

}
</script>