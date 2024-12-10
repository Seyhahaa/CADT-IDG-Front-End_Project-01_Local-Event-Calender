// stores/counter.js
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return { token: "", user: {} };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_SERVER}/user/signin`,
          {
            email: email,
            password: password,
          }
        );

        // const { data } = await axios.get(`${process.env.VUE_APP_SERVER}/auth/me`, {
        //     headers: {
        //         authorization: `Bearer ${response.data.token}`
        //     }
        // });
        this.token = response.data.token;
        console.log(this.token);
        //this.user = data
      } catch (error) {
        console.log(error);
        alert("Login failed");
      }
    },
    // async logout() {
    //     this.token = ""
    //     this.user = {}
    // }
  },
});
