<template>
  <RouterView />
</template>
<!-- <template>
 <template v-if="$route.path.startsWith('/admin')">
   <AdminLayout>
      <RouterView />
    </AdminLayout>
  </template>
  <template v-else>
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </template>
</template> -->
<script setup>
import { RouterView } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
