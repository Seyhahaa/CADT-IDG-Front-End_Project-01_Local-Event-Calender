// stores/counter.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const viewStore = defineStore('viewer', {
    state: () => {
        return { viewerToken:'', viewer: '' };
    },
    
    actions: {
        async googleLogin(code) {
            try {
                let user = await axios.get(`${process.env.VUE_APP_SERVER}/auth/me`,{
                    headers: {
                        Authorization: `Bearer ${code}`,
                    },
                })
                    this.viewerToken = code;
                    this.viewer = user.data;
                    localStorage.setItem('viewerToken', code);
                    localStorage.setItem('viewer', JSON.stringify(user.data));
                    alert('login successful')
                    window.close();
                    //console.log(user.data);

            } catch (error) {
                localStorage.removeItem('viewerToken');
            }
        },
        
    },
});
