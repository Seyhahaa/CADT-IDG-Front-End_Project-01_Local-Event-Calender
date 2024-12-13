import EventDetail from '@/Events/EventDetail.vue';
import EventImage from '@/Events/EventsImage.vue';
import EventsImageDetail from '@/Events/EventsImageDetail.vue';
import EventsPlacesListing from '@/PlacesListing.vue/EventsPlacesListing.vue';
import PlaceListingWithMap1 from '@/PlacesListing.vue/PlaceListingWithMap1.vue';
import AboutUs from '@/components/AboutUs.vue';
import ContactUs from '@/components/ContactUs.vue';
import LogIn from '@/components/Login.vue';
import OurBlog from '@/components/OurBlog.vue';
import Media from '@/components/Media.vue';
import PageNotFound from '@/components/pageNotFound.vue';
import HomePage from '@/Pages/HomePage.vue';

export default [
    { path: '/', component: HomePage },
    { path: '/eventdetail', component: EventDetail },
    { path: '/eventimage', component: EventImage },
    { path: '/eventimagedetail', component: EventsImageDetail },
    { path: '/eventplacelisitng', component: EventsPlacesListing },
    { path: '/placewithmap', component: PlaceListingWithMap1 },
    { path: '/aboutus', component: AboutUs },
    { path: '/contactus', component: ContactUs },
    { path: '/login', component: LogIn,name: 'login'},
    { path: '/blog', component: OurBlog },
    { path: '/media', component: Media },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
];
