// stores/counter.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const useAdminStore = defineStore('admin', {
    state: () => {
        return { token: '' };
    },
    getters: {
        isAuthenticated: (state) => {
            const accessToken = localStorage.getItem('adminToken')
            if (!accessToken) {
                return false
            }
            const decoded = jwtDecode(accessToken)
            const expire = new Date(decoded.exp * 1000)
            const current = new Date()
            return current > expire ? false : true
        },
        
    
    },
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER}/auth/login`, {
                    email: email,
                    password: password,
                });
                localStorage.setItem('adminToken', response.data.token)
                this.token = response.data.token;
                if(response.status == 200){
                    const data = await axios.get(`${process.env.VUE_APP_SERVER}/auth/me`,{
                        headers: {
                            Authorization: `Bearer ${response.data.token}`,
                        },
                    })
                    const user = JSON.stringify(data.data)
                    localStorage.setItem('admin', user)
                    this.user = user;
                    console.log(user)
                    
                    
            }
                
            } catch (error) {
                localStorage.removeItem('adminToken');
                alert('Login failed');
            }
        },
        async logout() {
            this.token = ""
         this.isLoggedIn = false
        }
    },
});
