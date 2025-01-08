import EventDetail from '@/Events/EventDetail.vue';
import EventImage from '@/Events/EventsImage.vue';
import EventsImageDetail from '@/Events/EventsImageDetail.vue';
import EventsPlacesListing from '@/PlacesListing.vue/EventsPlacesListing.vue';
import PlaceListingWithMap1 from '@/PlacesListing.vue/PlaceListingWithMap1.vue';
import AboutUs from '@/components/AboutUs.vue';
import OurBlog from '@/components/OurBlog.vue';
import Media from '@/components/Media.vue';
import PageNotFound from '@/components/pageNotFound.vue';
import HomePage from '@/Pages/HomePage.vue';
import Event from '@/Pages/Event.vue';
import NewsDetail from '@/components/news-detail.vue';
import News from '@/Pages/News.vue';
import Contact from '@/Pages/Contact.vue';
import About from '@/Pages/About.vue';
import SearchEvent from '@/components/searchEvent.vue';
import Category from '@/Pages/category.vue';
import GoogleLogin from '@/Pages/googleLogin.vue';
import Admin from '@/Pages/Admin.vue';
import { useAdminStore } from '@/stores/adminStore';

export default [
    { path: '/', component: HomePage },
    { path: '/event',name:'listingEvent', component: Event },
    {path: '/category/:id',name:'category', component: Category},
    { path: '/event/:id',name: 'eventDetail', component: EventDetail },
    {path: '/news/:id', name: 'newsDetail', component: NewsDetail},
    { path: '/eventimage', component: EventImage },
    { path: '/eventimagedetail', component: EventsImageDetail },
    { path: '/eventplacelisitng', component: EventsPlacesListing },
    {path: '/oauth-callback', component: GoogleLogin},

    {path: '/search-event', component: SearchEvent},
    { path: '/placewithmap', component: PlaceListingWithMap1 },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/news', component: News },
    { path: '/media', component: Media },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
];
