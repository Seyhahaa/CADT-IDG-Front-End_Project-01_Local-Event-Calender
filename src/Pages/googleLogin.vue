
<template>
    <div>Loading</div>
</template>
<script>
import { mapActions } from 'pinia'
import axios from 'axios';
import { viewStore } from '@/stores/viewStore';
export default {
    data(){
        return {
            viewerToken: '',
        }
    },
    async mounted() {
        const code = this.$route.query.code
        // Exchange code for JWT token
        try {
            let { data } = await axios.get(`${process.env.VUE_APP_SERVER}/auth/oauth-callback?code=${code}`)
            this.viewerToken = data.token
            localStorage.setItem('viewerToken', this.viewerToken)
            window.close();
        } catch (err) {
            localStorage.removeItem('viewerToken');
        }
    },

}
</script>