<template>
    <section>
                <div class="w-100 pb-100 position-relative">
                    <div class="container">
                        <div class="sec-title text-center w-100">
                            <span class="d-block thm-clr">ស្វែងរកដំណឹងចុងក្រោយបំផុតទាក់ទងនិងព្រឹត្តិការរបស់ពួកយើង</span>
                            <h2 class="mb-0">ពត៌មាន​និងគន្លឹះថ្មីៗ</h2>
                        </div><!-- Sec Title -->
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
                const result = await axios.get(`${process.env.VUE_APP_SERVER}/news/all-news?limit=3`);
                const jsonString = JSON.stringify(result.data.docs);
                this.news = JSON.parse(jsonString);
                //this.news = result.data;
                console.log(this.news );
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
