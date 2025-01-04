<template>
    <section>
                <div class="w-100 pb-140 position-relative">
                    <div class="container">
                        <div class="sec-title text-center w-100">
                            <span class="d-block thm-clr">Upcoming Event</span>
                            <h2 class="mb-0 font-semibold">ព្រឹត្តិការណ៍ជិតនិងមកដល់</h2>
                        </div><!-- Sec Title -->
                        <div class="top-list-post-wrap position-relative w-100">
                            <div class="top-list-img position-relative">
                                <img class="img-fluid rounded" :src="image" alt="Top List Image">
                            </div>
                            <div class="top-list-info position-absolute rounded">
                                <span class="!text-yellow-500 d-block">{{ date }}</span>
                                <h3 class="mb-0 line-clamp-3"><routerLink :to="`/event/${event._id}`" title="">{{ event.title }}</routerLink></h3>
                                <p class="mb-0">{{ description }}</p>
                                <ul class="post-meta mb-0 list-unstyled w-100">
                                    <li><i class="fas fa-map-marker-alt rounded-circle"></i>{{ event.address }}</li>
                                    <!-- <li><i class="fas fa-phone rounded-circle"></i>{{ event.phone }}</li> -->
                                </ul>
                                <router-link class="thm-btn !text-2xl" :to="`/event/${event._id}`" title="">អានបន្ត...</router-link> 
                            </div>
                        </div><!-- Top List Post Wrap -->
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
            image: null,
            description: null,

            date: '',
        };
    },

    methods: {
        async getData() {
            try {
                const result = await axios.get(`${process.env.VUE_APP_SERVER}/event/all-events?limit=1`);
                this.event = result.data.docs[0];
                this.image = result.data.docs[0].images;
                const description = result.data.docs[0].description;
                this.description = description.substring(0,330)

                this.date = moment(result.data.docs[0].startdate).format('ddd DD-MMM-YYYY')
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
