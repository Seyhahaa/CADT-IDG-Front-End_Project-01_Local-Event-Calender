<template>
    <searchingEvent></searchingEvent>
    <ListingEvents></ListingEvents>
    <UpcomingEvents></UpcomingEvents>
    <CalenderEvents></CalenderEvents>
    <AboutUs></AboutUs>
    <news />
</template>

<script>
    import SearchingEvent from '@/components/SearchingEvent.vue';
    import TopListingEvent from '@/components/TopListingEvent.vue';
    import ListingEvents from '@/components/ListingEvents.vue';
    import UpcomingEvents from '@/components/UpcomingEvents.vue';
    import AboutUs from '@/components/AboutUs.vue';
import News from '@/components/news.vue';

    export default {
        name: 'App',
        components: {
            SearchingEvent,
            TopListingEvent,
           
            // EventTrending,
            ListingEvents,
            UpcomingEvents,
            // OurBlog,
            AboutUs,
            News
        },
    };
</script>
