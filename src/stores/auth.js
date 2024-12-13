// stores/counter.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return { token: '', user: {} };
    },
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER}/user/signin`, {
                    email: email,
                    password: password,
                });

                // const { data } = await axios.get(`${process.env.VUE_APP_SERVER}/auth/me`, {
                //     headers: {
                //         authorization: `Bearer ${response.data.token}`
                //     }
                // });
                localStorage.setItem('token',response.data.token); 
                this.token = response.data.token
                this.user = response.data.token
            } catch (error) {
                console.log(error);
                alert('Login failed');
            }
        },
        // async logout() {
        //     this.token = ""
        //     this.user = {}
        // }
    },
});
