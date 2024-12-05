<template>
  <searchingEvent></searchingEvent>
  <ListingEvents></ListingEvents>
  <Discover></Discover>
  <!-- <EventTrending></EventTrending> -->
  <!-- <TopListingEvent></TopListingEvent> -->
  <UpcomingEvents></UpcomingEvents>
  <!-- <OurBlog></OurBlog> -->
  <CalenderEvents></CalenderEvents>
  <AboutUs></AboutUs>
  <ContactUs></ContactUs>
</template>

<script>
import SearchingEvent from "@/components/SearchingEvent.vue"
import TopListingEvent from "@/components/TopListingEvent.vue";
import Discover from "@/components/Discover.vue";
// import EventTrending from "@/components/EventTrending.vue";
import ListingEvents from "@/components/ListingEvents.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
// import OurBlog from "@/components/OurBlog.vue";
import CalenderEvents from '@/components/CalenderEvents.vue'
import AboutUs from "@/components/AboutUs.vue";
import ContactUs from "@/components/ContactUs.vue";

export default {
  name: "App",
  components: {
    SearchingEvent,
    TopListingEvent,
    Discover,
    // EventTrending,
    ListingEvents,
    UpcomingEvents,
    // OurBlog,
    CalenderEvents,
    AboutUs,
    ContactUs,
  },
};
</script>
