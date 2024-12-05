<template>
  <Header></Header>
  <router-view></router-view>
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
