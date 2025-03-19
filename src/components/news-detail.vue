<template>
    <section>
        <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
            <div class="fixed-bg opacity-95" style="background-image: url(https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"></div>
            <div class="container">
                <div class="pg-tp-wrp text-center w-100">
                    <h1 class="mb-0">{{news.title}}</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><routerLink to="/" title="Home">ទំព័រដើម</routerLink></li>
                        <li class="breadcrumb-item active">News</li>
                    </ol>
                </div><!-- Page Top Wrap -->
            </div>
        </div>
    </section>
    <section>
        <div class="w-100 pt-50 pb-140 gray-bg position-relative">
            <div class="container">
                <div class="place-layout-detail-wrap2 bg-white w-100">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-lg-8">
                            <div class="place-layout-detail-content w-100">
                                <!-- <div class="place-layout-detail-top d-flex justify-content-between align-items-end w-100">
                                    <div class="place-layout-detail-info d-inline-flex">
                                        <span class="rounded-circle text-center"><i class="fas fa-map-marker-alt"></i><span>Find</span></span>
                                        <div class="place-layout-detail-info-inner">
                                            <h3 class="mb-0">Liman Restaurant</h3>
                                            <p class="mb-0">Aspects of the Mediterranean kitchen</p>
                                        </div>
                                    </div>
                                    <div class="place-layout-detail-btns d-inline-flex">
                                        <a class="thm-btn" href="listing-review.html" title=""><i class="far fa-star"></i>Add review</a>
                                        <a class="thm-btn brd-btn" href="javascript:void(0);" title=""><i class="far fa-bookmark"></i>Bookmark</a>
                                        <a class="opt-btn" href="javascript:void(0);" title=""><i class="fas fa-ellipsis-h"></i></a>
                                    </div>
                                </div> -->
                                
                                <img class="img-fluid w-100" :src="news.image" alt="Place Layout Detail Image 2">
                                <p class="mb-0">{{ news.content }}</p>
                                <div class="place-layout-detail-links d-flex flex-wrap w-100">
                                    <!-- <a class="text-color21" href="javascript:void(0);" title="">Like (50)</a> -->
                                    <!-- <a class="text-color22" href="javascript:void(0);" title="">Comment (12)</a> -->
                                    <!-- <a class="text-color23" href="javascript:void(0);" title="">Unlike (00)</a> -->
                                </div>
                                
                                
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-lg-4">
                            <div class="place-detail-sidebar-wrap w-100">
                                <p class="text-yellow-500">{{date}}</p>
                                <div class="wdgt2 w-100">
                                    <h1 class="text-2xl font-bold">បង្ហេាះដោយ</h1>
                                    <img class="max-w-[10rem]" :src="news?.uploadBy?.path" alt="">
                                    
                                    <div class="flex gap-3 items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                        </svg>

                                        <h2 class="font-bold text-2xl">{{news?.uploadBy?.firstname}}</h2>
                                    </div>
                                    <div class="flex gap-3  items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                        </svg>
                                        
                                        <p>{{ news?.uploadBy?.email }}</p>
                                    </div>
                                    <div class="flex gap-3  items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                                        <path fill-rule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clip-rule="evenodd" />
                                        </svg>

<p>{{ news?.uploadBy?.phone }}</p>
                                    </div>



                                </div>
                                <div>
                                </div>
               
                                <div class="wdgt2 w-100">
                                    <h4 class="font-bold !text-2xl">បណ្តាញទំនាក់ទំនងសង្គម</h4>
                                    <div class="social-links5 w-100">
                                        <a v-if="social[0]?.facebook != undefined "  class="facebook" :href="social[0]?.facebook" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i>Facebook</a>
                                        <a v-if="social[1]?.instagram != undefined "  class="instagram" :href="social[1]?.instagram" title="Instagram" target="_blank"><i class="fab fa-instagram"></i>Instagram</a>
                                        <a v-if="social[2]?.youtube != undefined "  class="youtube" :href="social[2]?.youtube" title="Youtube" target="_blank"><i class="fab fa-youtube"></i>Youtube</a>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div><!-- Place Layout Detail Wrap 2 -->
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { UserIcon } from '@heroicons/vue/24/solid'
import moment from 'moment';
    export default{
        components: { UserIcon },
        data() {
        return {
            news: '',
            social: '',
            date: '',
        };
    },

    methods: {
        async geById() {
            const newsId = useRoute().params.id
            try {
                const result = await axios.get(`${process.env.VUE_APP_SERVER}/news/${newsId}`);
                const jsonString = JSON.stringify(result.data);
                this.news = JSON.parse(jsonString);

                //get social
                const arrSocial = JSON.stringify(result.data.socialMedia)
                this.social = JSON.parse(arrSocial)

                this.date = moment(this.social.date).format('LLLL')

                //this.news = result.data;
                console.log(this.news );
            } catch (e) {
                console.log(e.message);
            }
        },
    },
    mounted() {
        this.geById();
    },
};
</script>