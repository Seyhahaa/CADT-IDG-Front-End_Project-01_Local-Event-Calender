<template>
  <header
    class="stick style1 w-100 d-flex flex-wrap justify-content-between align-items-center"
  >
    <div class="logo">
      <h1 class="mb-0">
        <a href="/" title="Home"
          ><img
            class="img-fluid"
            src="assets/images/bg.jpg"
            alt="Logo"
            srcset="assets/images/retina-logo.png"
        /></a>
      </h1>
    </div>
    <!-- Logo -->
    <div class="menu-wrap">
      <!-- <span class="d-block"
        >Your Location: Sanfrancisco, CA
        <a class="thm-clr" href="javascript:void(0);" title=""
          ><i class="fas fa-map-marker-alt"></i>Change location</a
        ></span
      > -->
      <nav class="d-inline-flex align-items-center">
        <div>
          <ul class="mb-0 list-unstyled d-inline-flex">
            <li class="menu-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="menu-item-has-children">
              <a href="javascript:void(0);" title="">Events</a>
              <ul class="children mb-0 inline-block text-left">
                <li>
                  <router-link to="/eventimage">Agenda/Events</router-link>
                </li>
                <li>
                  <router-link to="/eventplacelisitng"
                    >Venue/Location</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <router-link to="/media">Media</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/blog">Blog/News</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/aboutus">About Us</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/contactus">Contact Us</router-link>
            </li>
            <li class="menu-item">
              <router-link to="/login">Login OR Register</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- Menu Wrap -->
  </header>
  <!-- Header -->
  <div class="rspn-hdr">
    <div class="lg-mn">
      <div class="logo">
        <a href="index.html" title="Home"
          ><img
            src="assets/images/logo2.png"
            alt="Logo"
            srcset="assets/images/retina-logo2.png"
        /></a>
      </div>
      <span class="rspn-mnu-btn"><i class="fa fa-list-ul"></i></span>
    </div>
    <div class="rsnp-mnu ps">
      <span class="rspn-mnu-cls"><i class="fa fa-times"></i></span>
      <ul class="mb-0 list-unstyled w-100">
        <li class="menu-item-has-children">
          <a href="javascript:void(0);" title="">Home</a>
          <ul class="children mb-0 list-unstyled">
            <li><a href="index.html" title="">Homepage 1</a></li>
            <li><a href="index2.html" title="">Homepage 2</a></li>
            <li><a href="index3.html" title="">Homepage 3</a></li>
            <li><a href="index4.html" title="">Homepage 4</a></li>
            <li><a href="index5.html" title="">Homepage 5</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a href="javascript:void(0);" title="">Listing</a>
          <ul class="children mb-0 list-unstyled">
            <li><a href="place-listing.html" title="">Place Listing</a></li>
            <li>
              <a href="listing-explore-map-sidebar.html" title=""
                >Listing With Map Style 1</a
              >
            </li>
            <li>
              <a href="place-layout-detail.html" title=""
                >Listing Detail Style 1</a
              >
            </li>
            <li>
              <a href="listing-explore-map-sidebar2.html" title=""
                >Listing With Map Style 2</a
              >
            </li>
            <li>
              <a href="place-layout-detail2.html" title=""
                >Listing Detail Style 2</a
              >
            </li>
            <li><a href="add-listing.html" title="">Add Listing</a></li>
            <li><a href="listing-review.html" title="">Listing Review</a></li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <a href="javascript:void(0);" title="">Pages</a>
          <ul class="children mb-0 list-unstyled">
            <li><a href="listing-layout.html" title="">Listing Style 1</a></li>
            <li><a href="listing-layout2.html" title="">Listing Style 2</a></li>
            <li>
              <a href="event-detail.html" title="">Event Detail Style 1</a>
            </li>
            <li>
              <a href="event-detail2.html" title="">Event Detail Style 2</a>
            </li>
            <li><a href="price-table.html" title="">Price Table</a></li>
            <li><a href="gallery.html" title="">Gallery Style 1</a></li>
            <li><a href="gallery2.html" title="">Gallery Style 2</a></li>
            <li><a href="gallery3.html" title="">Gallery Style 3</a></li>
            <li><a href="gallery-detail.html" title="">Gallery Detail</a></li>
            <li><a href="login.html" title="">Login</a></li>
          </ul>
        </li>
        <li><a href="about.html" title="">About us</a></li>
        <li class="menu-item-has-children">
          <a href="javascript:void(0);" title="">Contact us</a>
          <ul class="children mb-0 list-unstyled">
            <li><a href="contact.html" title="">Contact us 1</a></li>
            <li><a href="contact2.html" title="">Contact us 2</a></li>
          </ul>
        </li>
      </ul>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div
          class="ps__thumb-x"
          tabindex="0"
          style="left: 0px; width: 0px"
        ></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; right: 0px">
        <div
          class="ps__thumb-y"
          tabindex="0"
          style="top: 0px; height: 0px"
        ></div>
      </div>
    </div>
    <!-- Responsive Menu -->
  </div>
</template>

<style scoped>
/* #navBar {
  background-color: #2f2f2f;
  width: auto;
  height: auto;
} */
</style>
