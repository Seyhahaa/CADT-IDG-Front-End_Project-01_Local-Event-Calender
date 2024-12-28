<template>
    <section>
                <div class="w-100 pb-140 position-relative">
                    <div class="container">
                        <div class="sec-title text-center w-100">
                            <span class="d-block thm-clr">Upcoming Event</span>
                            <h2 class="mb-0">ព្រឹត្តិការណ៍ជិតនិងមកដល់</h2>
                        </div><!-- Sec Title -->
                        <div class="top-list-post-wrap position-relative w-100">
                            <div class="top-list-img position-relative">
                                <span class="rounded-pill position-absolute">Now Closed</span>
                                <img class="img-fluid rounded" :src="image" alt="Top List Image">
                            </div>
                            <div class="top-list-info position-absolute rounded">
                                <span class="d-block"><i class="fas fa-ticket-alt"></i>Ticket: $25 - $35</span>
                                <h3 class="mb-0"><a href="place-layout-detail.html" title="">{{ event.title }}</a></h3>
                                <p class="mb-0">{{ description }}</p>
                                <ul class="post-meta mb-0 list-unstyled w-100">
                                    <li><i class="fas fa-map-marker-alt rounded-circle"></i>{{ event.address }}</li>
                                    <!-- <li><i class="fas fa-phone rounded-circle"></i>{{ event.phone }}</li> -->
                                </ul>
                                <a class="thm-btn" href="place-layout-detail.html" title="">Discover Now</a>
                            </div>
                        </div><!-- Top List Post Wrap -->
                    </div>
                </div>
            </section>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            event: [],
            image: null,
            description: null
        };
    },

    methods: {
        async getData() {
            try {
                const result = await axios.get(`${process.env.VUE_APP_SERVER}/event/all-events?limit=1&sort={{$timestamp}}`);
                this.event = result.data.docs[0];
                this.image = result.data.docs[0].images;
                const description = result.data.docs[0].description;
                this.description = description.substring(0,330)
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
