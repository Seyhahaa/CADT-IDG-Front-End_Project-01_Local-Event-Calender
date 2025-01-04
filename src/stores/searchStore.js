// stores/counter.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const searchStore = defineStore('event', {
    state: () => {
        return { event:'' };
    },
    
    actions: {
        async searchEvent(title, address, category) {
            console.log(title, address, category);
            try {
                const response = await axios.get(`${process.env.VUE_APP_SERVER}/event/search-events?title=${title}&address=${address}&category=${category}`);
                    this.event = response.data;
                    //console.log(response.data) 

            } catch (error) {
                console.log(error.messaga);
            }
        },
        
    },
});
