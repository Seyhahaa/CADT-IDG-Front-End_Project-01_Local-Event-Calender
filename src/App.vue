<template>
  <router-view></router-view>
    <Header></Header>
    <!-- <AboutUs></AboutUs> -->
    <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
// import AboutUs from "./components/AboutUs.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    // AboutUs,
    Footer,
  },
};
</script>
