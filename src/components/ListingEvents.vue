<template>
    <section>
        <div class="w-100 pt-140 pb-140 gray-layer opc55 position-relative">
            <div
                class="fixed-bg"
                style="background-image: url(assets/images/pattern-bg1.png)"
            ></div>
            <div class="container">
                <div class="sec-title text-center w-100">
                    <span class="d-block thm-clr">ព្រឹត្តិការណ៍ថ្មីៗ</span>
                    <h2 class="mb-0 font-semibold">ចំណាត់ថ្នាក់ព្រឹត្តិការណ៍សំខាន់ៗ</h2>
                </div>
                <!-- Sec Title -->
                <div class="">
                    <div class="grid grid-cols-3 gap-10">
                <div v-for="(item, index) in event" :key="index">
                        <div class="post-box brd-rd5 w-100 overflow-hidden">
                            <div class="post-img w-100">
                                <routerLink :to="`/event/${item._id}`" title=""
                                    ><img
                                        class="h-[15rem] object-cover w-100"
                                        :src="item.images"
                                        alt="Post Image 1"
                                /></routerLink>
                            </div>
                            <div class="post-info w-100">
                                <span class="d-inline-block text-color2">{{ date }}</span>
                                <h3 class="mb-0 line-clamp-3">
                                    <routerLink :to="`/event/${item._id}`" title="">{{item.title}}</routerLink>
                                </h3>
                                <p class="mb-0">{{  }}</p>
                                <ul class="post-meta mb-0 list-unstyled w-100">
                                    <li>
                                        <i class="fas fa-map-marker-alt rounded-circle"></i>{{item.address}}
                                    </li>
                                    <li v-if="item.phone == undefined "><i class="fas fa-phone rounded-circle"></i>{{ item?.uploadBy?.phone }}</li>
                                    <li v-else><i class="fas fa-phone rounded-circle"></i>{{ item.phone }}</li>
                                </ul>
                                <span class="evnt-loc d-block thm-bg"
                                    ><i class="fas fa-building rounded-circle"></i>{{item.category}}</span
                                >
                            </div>
                        </div>
                    </div>
                    <!-- <div class="post-box-wrap">
                        <div class="post-box brd-rd5 w-100 overflow-hidden">
                            <div class="post-img w-100">
                                <span class="rounded-pill bg-white position-absolute">Open</span>
                                <a href="event-detail.html" title=""
                                    ><img
                                        class="img-fluid w-100"
                                        src="assets/images/resources/post-img1-2.jpg"
                                        alt="Post Image 2"
                                /></a>
                            </div>
                            <div class="post-info w-100">
                                <span class="d-inline-block text-color2"
                                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                                    ><i class="fas fa-star"></i>
                                    <span class="d-inline-block">4.5</span></span
                                >
                                <h3 class="mb-0">
                                    <a href="event-detail.html" title="">Private Hotel-Spa</a>
                                </h3>
                                <p class="mb-0">Luxury hotel in the heart of Bloomsbury.</p>
                                <ul class="post-meta mb-0 list-unstyled w-100">
                                    <li>
                                        <i class="fas fa-map-marker-alt rounded-circle"></i>95 South
                                        Park Avenue
                                    </li>
                                    <li>
                                        <i class="fas fa-phone rounded-circle"></i>+61 2 8236 9200
                                    </li>
                                </ul>
                                <span class="evnt-loc d-block thm-bg"
                                    ><i class="fas fa-building rounded-circle"></i>Restaurant</span
                                >
                            </div>
                        </div>
                    </div> -->
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            event: [],
            date: null,
        };
    },

    methods: {
        async getData() {
            try {
                const result = await axios.get(`${process.env.VUE_APP_SERVER}/event/all-events?limit=6`);
                this.event = result.data.docs;
                this.date = moment(result.data.docs.date).format('MMMM Do YYYY');
                //console.log(this.event);
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
