<template>
    <section>
        <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
            <div class="fixed-bg" style="background-image: url(assets/images/bg/bg1.avif)"></div>
            <div class="container">
                <div class="pg-tp-wrp text-center w-100">
                    <h1 class="mb-0">ពត៌មាន​ទាំងអស់</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <routerLink to="/" title="Home">Home</routerLink>
                        </li>
                        <li class="breadcrumb-item active">ពត៌មាន​</li>
                    </ol>
                </div>
                <!-- Page Top Wrap -->
            </div>
        </div>
                <div class="w-100 position-relative">
                    <div class="container">
                        <div class=" pb-100 pt-100 listing-top-bar d-flex flex-wrap align-items-center justify-content-between w-100">
                            <div class="listing-filter-inner d-inline-flex align-items-center">
                                <a class="rounded advanc-filter-btn" href="javascript:void(0);" title=""><i class="fas fa-sliders-h"></i>Show Filter</a>
                                <p class="mb-0">20 Result Found in Cambodia<strong>( Showing 1 - 20 )</strong></p>
                            </div>
                            <div class="slc-wp">
                                <select>
                                    <option>Sort By</option>
                                    <option>Date</option>
                                    <option>Name</option>
                                </select>
                            </div>
                        </div>

                        
                        <div class="blog-wrap res-row w-100">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-lg-4" v-for="item in news" :key="item.id">
                                    <div class="blog-post-box w-100">
                                        <div class="blog-post-img overflow-hidden w-100">
                                            <routerLink :to="`news/${item._id}`" title=""><img class="h-[16rem] w-100 object-cover" :src="item.image" alt="Blog Image 1"></routerLink>
                                        </div>
                                        <div class="blog-post-info w-100">
                                            <span class="post-date d-inline-block">{{item.date}}</span>
                                            <h3 class="mb-0 line-clamp-1"><routerLink :to="`news/${item._id}`" title="">{{ item.title }}</routerLink></h3>
                                            <p class="mb-0 line-clamp-2">{{ item.content }}</p>
                                            <span class="post-auth d-inline-block">Posted by <a href="" title="">{{ item.uploadBy.firstname }}</a></span>
                                        </div>
                                    </div>
                                </div>
   
                            </div>
                        </div><!-- Blog Wrap -->
                    </div>
                </div>
    </section>
</template>
<script>
import axios from 'axios';
    export default{
        data() {
        return {
            news: '',
        };
    },

    methods: {
        async getData() {
            try {
                const result = await axios.get(`${process.env.VUE_APP_SERVER}/news/all-news`);
                const jsonString = JSON.stringify(result.data.docs);
                this.news = JSON.parse(jsonString);
                //this.news = result.data;
                //console.log(this.news );
            } catch (e) {
                console.log(e.message);
            }
        },
    },
    mounted() {
        this.getData();
    },
};
</script>