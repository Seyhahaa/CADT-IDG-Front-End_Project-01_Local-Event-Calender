<template>
    <header class="stick style1 w-100 d-flex flex-wrap justify-content-between align-items-center bg-gray-600/20">
        <div class="logo">
            <h1 class="mb-0">
                <a href="/" title="Home"
                    >
                    <img
                        class="max-w-[7rem] top-[-2rem] relative"
                        src="../../public/assets/Wegocolor.png"
                        alt="Logo"
                        
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
                            <router-link to="/" class="font-bold text-2xl">ទំព័រដើម</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link to="/event" class="font-bold text-2xl">កម្មវិធី</router-link>
                        </li>
                        <!-- <li class="menu-item-has-children">
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
                        </li> -->
                        
                        <li class="menu-item">
                            <router-link to="/news" class="font-bold text-2xl">ពត៌មាន</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link to="/about" class="font-bold text-2xl">អំពីខ្ញុំ</router-link>
                        </li>
                        <li class="menu-item">
                            <router-link class="font-bold text-2xl" to="/contact">ទំនាក់ទំនងមក</router-link>
                        </li>
                        <button class="menu-item">
                            <router-link to="/login">
                                <h4 class="font-bold text-2xl !text-white cursor-pointer mb-3 px-4 py-3 !border-2 !border-[#cf4328]
                                hover:bg-[#cf4328] group-hover:text-white hover:decoration-clone">
                                    បង្ហេាះព្រឹត្តិការ
                                </h4> 
                            </router-link>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- Menu Wrap -->
    </header>
    <!-- Header -->
    <!-- <div class="rspn-hdr">
        <div class="lg-mn">
            <div class="logo">
                <a href="/" title="Home"
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
                <li class="menu-item">
                    <router-link to="/"><v-icon name="fc-home" class="text-3xl" /></router-link>
                </li>
                <li class="menu-item-has-children">
                    <a href="javascript:void(0);" title="">Events</a>
                    <ul class="children mb-0 inline-block text-left">
                        <li>
                            <router-link to="/eventimage">Agenda/Events</router-link>
                        </li>
                        <li>
                            <router-link to="/eventplacelisitng">Venue/Location</router-link>
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
            <div class="ps__rail-x" style="left: 0px; bottom: 0px">
                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px">
                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
            </div>
        </div>
    </div> -->
</template>
