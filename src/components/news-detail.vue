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
                                    <a class="text-color21" href="javascript:void(0);" title="">Like (50)</a>
                                    <a class="text-color22" href="javascript:void(0);" title="">Comment (12)</a>
                                    <a class="text-color23" href="javascript:void(0);" title="">Unlike (00)</a>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-lg-4">
                            <div class="place-detail-sidebar-wrap w-100">
                                <div class="wdgt2 w-100">
                                    <div class="listing-loc-map place-map" id="listing-loc-map"></div>
                                </div>
                                <!-- <div class="wdgt2 w-100">
                                    <div class="slc-wp w-100">
                                        <select>
                                            <option>Location</option>
                                            <option>Location 1</option>
                                            <option>Location 2</option>
                                        </select>
                                    </div>
                                    <button class="thm-btn" type="submit">Search Now</button>
                                </div> -->
               
                                <div class="wdgt2 w-100">
                                    <h4 class="font-bold !text-3xl">បណ្តាញទំនាក់ទំនងសង្គម</h4>
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
    export default{
        data() {
        return {
            news: '',
            social: '',
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