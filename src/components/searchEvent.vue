<template>
    <section>
       <!-- Header -->
       <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
           <div class="fixed-bg" style="background-image: url(https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEV2ZW50fGVufDB8fDB8fHww)"></div>
           <div class="container">
               <div class="pg-tp-wrp text-center w-100">
                   <h1 class="mb-0 font-semibold">ព្រឹត្តិការណទាំងអស់</h1>
                   <ol class="breadcrumb">
                       <li class="breadcrumb-item">
                           <routerLink to="/" title="Home">ទំព័រដើម</routerLink>
                       </li>
                       <li class="breadcrumb-item active">ព្រឹត្តិការណ៍</li>
                   </ol>
               </div>
               <!-- Page Top Wrap -->
           </div>
       </div>
               <div class="w-100 pt-120 pb-140 gray-bg position-relative">
                   <div class="container">
                       <div class="listing-top-bar d-flex flex-wrap align-items-center justify-content-between w-100">
                           <div class="listing-filter-inner d-inline-flex align-items-center">
                               <!-- <a class="rounded advanc-filter-btn" href="javascript:void(0);" title=""><i class="fas fa-sliders-h"></i>Show Filter</a> -->
                               <p v-if="events.length != 0" class="mb-0">Result Found in Cambodia</p>
                                <p v-else class="mb-0">No Result Found in Cambodia</p>
                           </div>
                           <!-- <div class="slc-wp">
                               <select>
                                   <option>Sort By</option>
                                   <option>Date</option>
                                   <option>Name</option>
                               </select>
                           </div> -->
                       </div>
                       <div class="listing-layout mt-70 w-100">
                           <div class="row">
                               <div class="col-md-6 col-sm-6 col-lg-4" v-for="item in events" :key="item.id">
                                   <div class="list-post-box brd-rd5 overflow-hidden position-relative w-100">
                                       <div class="list-post-img overflow-hidden position-relative w-100">
                                           <img class="h-[15rem] object-cover w-100" :src="item.images" alt="List Post Image 1">
                                           <span class="list-post-cat position-absolute"><a class="rounded-pill" href="javascript:void(0);" title="">{{ item.category }}</a></span>
                                           <span class="list-post-like position-absolute rounded-circle"><a class="" href="javascript:void(0);" title=""><i class="far fa-heart"></i></a></span>
                                       </div>
                                       <div class="list-post-info w-100">
                                           <div class="list-post-inner w-100">
                                               <div class="list-post-info-top d-flex flex-wrap justify-content-between">
                                                   <span class="list-post-date"><i class="thm-clr far fa-clock"></i>{{ item.date }}</span>
                                                   <span class="list-post-rate text-color2">{{ date }}</span>
                                               </div>
                                               <h3 class="mb-0 line-clamp-3"><routerLink :to="`event/${item._id}`" title="">{{ item.title }}</routerLink></h3>
                                               <div class="list-post-author-stats d-flex flex-wrap justify-content-between align-items-center">
                                                   <div class="list-post-author d-inline-flex align-items-center">
                                                       <img class="rounded-circle w-8" :src="item.uploadBy.path" alt="Author Image 1">
                                                       <span>By {{ item.uploadBy.firstname }}</span>
                                                   </div>
                                                   <span class="rounded-pill bg-color5">Open</span>
                                               </div>
                                           </div>
                                           <ul class="list-post-meta mb-0 list-unstyled">
                                               <li class="active"><i class="thm-clr fas fa-map-marker-alt"></i><span>{{ item.address }}</span></li>
                                               <li v-if=" item.uploadBy.email == undefined "><i class="thm-clr far fa-envelope"></i><a href="javascript:void(0);" title="">+61 2 8236 9200</a></li>
                                               <li v-else><i class="thm-clr far fa-envelope"></i><a href="javascript:void(0);" title="">{{ item.email }}</a></li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                               

                           </div>
                       </div><!-- Listing Layout -->
                       <div class="view-all mt-30 text-center w-100">
                           <a class="thm-btn brd-btn" href="listing-layout2.html" title="">Load More</a>
                       </div><!-- View All -->
                       <div class="listing-explore-info-wrap advance-filter-wrap">
                           <span class="advanc-filter-close-btn"><i class="fas fa-times"></i></span>
                           <div class="mini-title w-100">
                               <h4 class="mb-0">What are you looking for?</h4>
                               <span class="d-block">Search or select categories</span>
                           </div>
                           <div class="listing-explore-form-wrap w-100">
                               <form>
                                   <div class="wdgt w-100">
                                       <div class="field w-100"><input type="text" placeholder="What are you looking for?"></div>
                                       <div class="field slc-wp w-100">
                                           <select>
                                               <option>All Categories</option>
                                               <option>Restaurant</option>
                                               <option>Fast Food</option>
                                               <option>Drink</option>
                                           </select>
                                       </div>
                                       <div class="field w-100"><input type="text" placeholder="Where to Look?"><i class="fas fa-map-marker-alt"></i></div>
                                   </div>
                                   <div class="wdgt advance-search w-100">
                                       <h4>Advance Search</h4>
                                       <div class="search-range">
                                           <label>Price Range</label>
                                           <ul class="search-price-opt">
                                               <li><span>$$</span></li>
                                               <li><span>$$$</span></li>
                                               <li><span>$$$$</span></li>
                                           </ul>
                                           <div class="slc-wp">
                                               <label>Sort by:</label>
                                               <select>
                                                   <option>Name</option>
                                                   <option>Date</option>
                                               </select>
                                           </div>
                                       </div>
                                   </div>
                                   <div class="wdgt search-tags w-100">
                                       <h4>Tags</h4>
                                       <ul class="tags-list row mb-0 list-unstyled">
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-1"><label for="tag1-1">Reservations (04)</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-2"><label for="tag1-2">Outdoor Seating</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-3"><label for="tag1-3">Wheelchair Accesible</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-4"><label for="tag1-4">Smoking Allowed</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-5"><label for="tag1-5">Accepts Credit Cards</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-6"><label for="tag1-6">Parking street</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-7"><label for="tag1-7">Outdoor Seating</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-8"><label for="tag1-8">Accepts Credit Cards</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-9"><label for="tag1-9">Wireless Internet</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-10"><label for="tag1-10">Parking street</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-11"><label for="tag1-11">Wirless Internet</label></span></li>
                                           <li class="col-md-6 col-sm-6 col-lg-6"><span><input type="checkbox" id="tag1-12"><label for="tag1-12">Parking street</label></span></li>
                                       </ul>
                                   </div>
                                   <div class="wdgt location-search w-100">
                                       <div class="field slc-wp w-100">
                                           <select>
                                               <option>Location</option>
                                               <option>Location 1</option>
                                               <option>Location 2</option>
                                           </select>
                                       </div>
                                   </div>
                                   <button class="thm-btn" type="submit">Search Now</button>
                               </form>
                           </div>
                       </div><!-- Listing Explore Info Wrap -->
                   </div>
               </div>
           </section>
</template>
<script>
import { searchStore } from '@/stores/searchStore';
import axios from 'axios';
import moment from 'moment';
import { mapState } from 'pinia';

export default {
   data(){
     return {
         events: null,
         date: null,
     }
   },
   computed: {
        ...mapState(searchStore, ['event'])
        
    },
    async created() {
        this.events = this.event
        this.date = moment(this.event.date).format('MMMM Do YYYY');
        //console.log(this.events)
    }
}
</script>
