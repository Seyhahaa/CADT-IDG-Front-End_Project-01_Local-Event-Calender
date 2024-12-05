<template>
        <main>
            <section>
                <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
                    <div class="fixed-bg" style="background-image: url(assets/images/pg-tp-bg.jpg);"></div>
                    <div class="container">
                        <div class="pg-tp-wrp text-center w-100">
                            <h1 class="mb-0">City Night Life Directory</h1>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html" title="Home">Home</a></li>
                                <li class="breadcrumb-item active">Listing Place</li>
                            </ol>
                        </div><!-- Page Top Wrap -->
                    </div>
                </div>
            </section>
            <section>
                <div class="w-100 pt-140 pb-140 gray-bg position-relative">
                    <div class="container">
                        <div class="city-search-wrap d-flex flex-wrap w-100">
                            <div class="field search-city">
                                <i class="thm-clr fas fa-long-arrow-alt-right"></i>
                                <input type="text" placeholder="Enter Address, City or State">
                            </div>
                            <div class="field search-event-name">
                                <i class="thm-clr fas fa-long-arrow-alt-right"></i>
                                <input type="text" placeholder="Event Name">
                            </div>
                            <div class="city-search-btn">
                                <button class="thm-btn" type="submit"><i class="fas fa-search"></i>Update Location</button>
                            </div>
                        </div><!-- City Search Wrap -->
                        <div class="place-listing-wrap mt-70 w-100">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <div class="place-list-box w-100">
                                        <div class="place-list-img overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/place-list-img1-1.jpg" alt="Place List Image 1">
                                            <div class="place-map position-absolute w-100" id="place-map1"></div>
                                        </div>
                                        <div class="place-list-info w-100">
                                            <h3 class="mb-0"><a href="place-layout-detail.html" title="">New York</a></h3>
                                            <span class="d-block thm-clr"><i class="fas fa-glass-cheers"></i> 24 City Events Available</span>
                                            <i class="thm-clr fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <div class="place-list-box w-100">
                                        <div class="place-list-img overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/place-list-img1-2.jpg" alt="Place List Image 2">
                                            <div class="place-map position-absolute w-100" id="place-map2"></div>
                                        </div>
                                        <div class="place-list-info w-100">
                                            <h3 class="mb-0"><a href="place-layout-detail.html" title="">Melbourne</a></h3>
                                            <span class="d-block thm-clr"><i class="fas fa-glass-cheers"></i> 24 City Events Available</span>
                                            <i class="thm-clr fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <div class="place-list-box w-100">
                                        <div class="place-list-img overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/place-list-img1-3.jpg" alt="Place List Image 3">
                                            <div class="place-map position-absolute w-100" id="place-map3"></div>
                                        </div>
                                        <div class="place-list-info w-100">
                                            <h3 class="mb-0"><a href="place-layout-detail.html" title="">Paris</a></h3>
                                            <span class="d-block thm-clr"><i class="fas fa-glass-cheers"></i> 24 City Events Available</span>
                                            <i class="thm-clr fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <div class="place-list-box w-100">
                                        <div class="place-list-img overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/place-list-img1-4.jpg" alt="Place List Image 4">
                                            <div class="place-map position-absolute w-100" id="place-map4"></div>
                                        </div>
                                        <div class="place-list-info w-100">
                                            <h3 class="mb-0"><a href="place-layout-detail.html" title="">India</a></h3>
                                            <span class="d-block thm-clr"><i class="fas fa-glass-cheers"></i> 24 City Events Available</span>
                                            <i class="thm-clr fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <div class="place-list-box w-100">
                                        <div class="place-list-img overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/place-list-img1-5.jpg" alt="Place List Image 5">
                                            <div class="place-map position-absolute w-100" id="place-map5"></div>
                                        </div>
                                        <div class="place-list-info w-100">
                                            <h3 class="mb-0"><a href="place-layout-detail.html" title="">New York</a></h3>
                                            <span class="d-block thm-clr"><i class="fas fa-glass-cheers"></i> 24 City Events Available</span>
                                            <i class="thm-clr fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <div class="place-list-box w-100">
                                        <div class="place-list-img overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/place-list-img1-6.jpg" alt="Place List Image 6">
                                            <div class="place-map position-absolute w-100" id="place-map6"></div>
                                        </div>
                                        <div class="place-list-info w-100">
                                            <h3 class="mb-0"><router-link to="/placewithmap">Phnom Penh</router-link></h3>
                                            <span class="d-block thm-clr"><i class="fas fa-glass-cheers"></i> 24 City Events Available</span>
                                            <i class="thm-clr fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Place Listing Wrap -->
                        <div class="view-all mt-35 text-center w-100">
                            <a class="thm-btn brd-btn" href="javascript:void(0);" title="">Load More</a>
                        </div><!-- View All -->
                    </div>
                </div>
            </section>
        </main><!-- Main Wrapper -->
</template>