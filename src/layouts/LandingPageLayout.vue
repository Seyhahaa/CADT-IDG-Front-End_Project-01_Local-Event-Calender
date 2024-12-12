<template>
    <div>
        <HeaderLayout />
        <RouterView />
        <FooterLayout />
    </div>
</template>
<script setup>
    import FooterLayout from '@/components/Footer.vue';
    import HeaderLayout from '@/components/Header.vue';
</script>
