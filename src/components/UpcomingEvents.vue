<template>
    <section>
        <div class="w-100 pb-10 position-relative">
            <div class="sec-title text-center w-100">
                <span class="d-block thm-clr">ព្រឹត្តិការណ៍សំខាន់ក្នុងប្រភេទនីមួយៗ</span>
                <h2 class="mb-0 font-semibold">មានព្រឹត្តិការណ៍នាពេលខាងមុខជាច្រើនក្នុងដំណាច់ឆ្នាំនេះ</h2>
            </div>
            <!-- Sec Title -->
            <div class="feat-post-wrap w-100">
                <div class="row mrg10">
                    <div class="col-md-6 col-sm-6 col-lg-3" v-for="item in event" :key="item.id">
                        <div class="feat-post-box position-relative w-100">
                            <div class="feat-post-img position-relative overflow-hidden w-100">
                                <img
                                    class="w-100 object-cover h-[27rem]"
                                    :src="item.images"
                                    alt="Featured Post Image 1"
                                />
                            </div>
                            <div
                                class="feat-post-info d-flex flex-wrap justify-content-between position-absolute w-100"
                            >
                                <div class="feat-post-info-inner">
                                    <h3 class="mb-0 line-clamp-4">
                                        <routerLink :to="`/category/${item.category}`" title=""
                                            >{{item.title}}</routerLink>
                                    </h3>
                                    <span class="d-inline-block rate-star text-color2"
                                        ><span class="bg-color3">4.5</span
                                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                                        ><i class="fas fa-star"></i
                                    ></span>
                                    <i class="d-block cite-cate">{{ item.category }}</i>
                                </div>
                                <span class="loc"
                                    ><i class="rounded d-block fas fa-map-marker-alt"></i
                                    >{{ item.address }}</span
                                >
                            </div>
                            <!-- <a class="thm-btn" href="event-detail2.html" title="">Discover Now</a> -->
                            <router-link :to="`/category/${item.category}`" class="thm-btn">
                                ស្វែងរកបន្ត
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Featured Post Wrap -->
        </div>
    </section>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return{
            
            event: []
        }
    },
    mounted() {
        this.getCategory()
    },
    methods: {
        async  getCategory() {
            const res = await axios.get(`${process.env.VUE_APP_SERVER}/event`);
            this.event = res.data.data
            console.log(this.event);
        },
    },
}   
</script>

