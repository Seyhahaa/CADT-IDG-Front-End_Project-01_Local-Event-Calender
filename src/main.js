import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
// import "../public/assets/css/tailwind01.css";

import Home from "@/Pages/HomePage.vue";
import EventDetail from "@/Events/EventDetail.vue";
import EventImage from "@/Events/EventsImage.vue";
import EventsImageDetail from "@/Events/EventsImageDetail.vue";
import EventsPlacesListing from "@/PlacesListing.vue/EventsPlacesListing.vue";
import PlaceListingWithMap1 from "@/PlacesListing.vue/PlaceListingWithMap1.vue";
import AboutUs from "@/components/AboutUs.vue";
import ContactUs from "@/components/ContactUs.vue";
import LogIn from "@/components/Login.vue";
import PageNotFound from "@/components/pageNotFound.vue";
import OurBlog from "@/components/OurBlog.vue"
import Media from "@/components/Media.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/eventdetail", component: EventDetail },
  { path: "/eventimage", component: EventImage },
  { path: "/eventimagedetail", component: EventsImageDetail },
  { path: "/eventplacelisitng", component: EventsPlacesListing },
  { path: "/placewithmap", component: PlaceListingWithMap1 },
  { path: "/aboutus", component: AboutUs },
  { path: "/contactus", component: ContactUs },
  { path: "/login", component: LogIn },
  { path: "/blog", component: OurBlog },
  { path: "/media", component: Media },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
