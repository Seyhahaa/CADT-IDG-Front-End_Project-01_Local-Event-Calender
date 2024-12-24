<template>
    <section>
        <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
            <div class="fixed-bg" style="background-image: url(assets/images/pg-tp-bg.jpg)"></div>
            <div class="container">
                <div class="pg-tp-wrp text-center w-100">
                    <h1 class="mb-0">About us</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html" title="Home">Home</a>
                        </li>
                        <li class="breadcrumb-item active">About us</li>
                    </ol>
                </div>
                <!-- Page Top Wrap -->
            </div>
        </div>
    </section>
    <section>
        <div class="w-100 pt-140 pb-140 gray-bg position-relative">
            <div class="container">
                <div class="about-wrap w-100">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-sm-12 col-lg-6">
                            <span class="p-3 rounded-sm text-white bg-orange-500 position-absolute">ជិតមកដល់...</span>
                            <img
                                class="img-fluid w-100"
                                :src="image"
                                alt="About Image 1"
                            />
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-6">
                            <div class="about-desc w-100">
                                <p class="text-orange-500">{{ event.date }}</p>
                                <h2 class="mb-0">{{ event.title }}</h2>
                                
                                <p class="mb-0">
                                    {{ description}}
                                </p>
                                <a class="thm-btn" href="listing-layout.html" title=""
                                    >Discover Now</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <!-- About Wrap -->
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
                console.log(this.image);
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
