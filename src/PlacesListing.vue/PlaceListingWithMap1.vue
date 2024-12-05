<template>
        <main>
            <section>
                <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
                    <div class="fixed-bg" style="background-image: url(assets/images/pg-tp-bg.jpg);"></div>
                    <div class="container">
                        <div class="pg-tp-wrp text-center w-100">
                            <h1 class="mb-0">Submit Place</h1>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html" title="Home">Home</a></li>
                                <li class="breadcrumb-item active">Submit Place</li>
                            </ol>
                        </div><!-- Page Top Wrap -->
                    </div>
                </div>
            </section>
            <section>
                <div class="w-100 gray-bg position-relative">
                    <div class="listing-explore-wrap d-flex flex-wrap w-100">
                        <div class="listing-explore-info-wrap">
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
                        <div class="listing-explore-posts-wrap">
                            <div class="listing-explore-top">
                                <span class="advance-search-btn"><i class="fas fa-align-left"></i></span>
                                <ul class="listing-explore-opt d-inline-flex mb-0 list-unstyled">
                                    <li><span class="list-btn"><i class="fas fa-th-list"></i></span></li>
                                    <li><span class="grid-btn"><i class="fas fa-th-large"></i></span></li>
                                </ul>
                            </div>
                            <div class="listing-explore-posts-inner w-100">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-lg-12">
                                        <div class="list-post-box brd-rd5 overflow-hidden position-relative w-100">
                                            <div class="list-post-img overflow-hidden position-relative w-100">
                                                <img class="img-fluid w-100" src="assets/images/resources/list-post-img1-5.jpg" alt="List Post Image 5">
                                                <span class="list-post-cat position-absolute"><a class="rounded-pill" href="javascript:void(0);" title="">Restaurants</a></span>
                                                <span class="list-post-like position-absolute rounded-circle"><a class="" href="javascript:void(0);" title=""><i class="far fa-heart"></i></a></span>
                                            </div>
                                            <div class="list-post-info w-100">
                                                <div class="list-post-inner w-100">
                                                    <div class="list-post-info-top d-flex flex-wrap justify-content-between">
                                                        <span class="list-post-date"><i class="thm-clr far fa-clock"></i>27 May 2020</span>
                                                        <span class="list-post-rate text-color2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><span>4.0/5</span></span>
                                                    </div>
                                                    <h3 class="mb-0"><a href="event-detail.html" title="">Seafood Rooftop into Dinner and Wine</a></h3>
                                                    <div class="list-post-author-stats d-flex flex-wrap justify-content-between align-items-center">
                                                        <div class="list-post-author d-inline-flex align-items-center">
                                                            <img class="rounded-circle img-fluid" src="assets/images/resources/author-img1-5.jpg" alt="Author Image 5">
                                                            <span>By Master Event</span>
                                                        </div>
                                                        <span class="rounded-pill bg-color5">Open</span>
                                                    </div>
                                                </div>
                                                <ul class="list-post-meta mb-0 list-unstyled">
                                                    <li class="active"><i class="thm-clr fas fa-map-marker-alt"></i><span>27th Brooklyn New York, USA</span></li>
                                                    <li><i class="thm-clr far fa-envelope"></i><a href="javascript:void(0);" title="">yourdomain@web.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-lg-12">
                                        <div class="list-post-box brd-rd5 overflow-hidden position-relative w-100">
                                            <div class="list-post-img overflow-hidden position-relative w-100">
                                                <img class="img-fluid w-100" src="assets/images/resources/list-post-img1-6.jpg" alt="List Post Image 6">
                                                <span class="list-post-cat position-absolute"><a class="rounded-pill" href="javascript:void(0);" title="">Restaurants</a></span>
                                                <span class="list-post-like position-absolute rounded-circle"><a class="" href="javascript:void(0);" title=""><i class="far fa-heart"></i></a></span>
                                            </div>
                                            <div class="list-post-info w-100">
                                                <div class="list-post-inner w-100">
                                                    <div class="list-post-info-top d-flex flex-wrap justify-content-between">
                                                        <span class="list-post-date"><i class="thm-clr far fa-clock"></i>27 May 2020</span>
                                                        <span class="list-post-rate text-color2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><span>4.0/5</span></span>
                                                    </div>
                                                    <h3 class="mb-0"><a href="event-detail.html" title="">Seafood Rooftop into Dinner and Wine</a></h3>
                                                    <div class="list-post-author-stats d-flex flex-wrap justify-content-between align-items-center">
                                                        <div class="list-post-author d-inline-flex align-items-center">
                                                            <img class="rounded-circle img-fluid" src="assets/images/resources/author-img1-6.jpg" alt="Author Image 6">
                                                            <span>By Master Event</span>
                                                        </div>
                                                        <span class="rounded-pill bg-color6">Now Closed</span>
                                                    </div>
                                                </div>
                                                <ul class="list-post-meta mb-0 list-unstyled">
                                                    <li class="active"><i class="thm-clr fas fa-map-marker-alt"></i><span>27th Brooklyn New York, USA</span></li>
                                                    <li><i class="thm-clr far fa-envelope"></i><a href="javascript:void(0);" title="">yourdomain@web.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="view-all mt-30 text-center w-100">
                                <a class="thm-btn brd-btn" href="listing-layout.html" title="">Load More</a>
                            </div><!-- View All -->
                        </div><!-- Listing Explore Posts Wrap -->
                        <div class="listing-loc-map place-map" id="listing-map"></div>
                    </div><!-- Listing Explore Wrap -->
                </div>
            </section>
        </main><!-- Main Wrapper -->
</template>