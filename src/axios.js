import axios from "axios";
import { useAuthStore } from "./stores/auth";

const getToken = () =>{
    const authStore = useAuthStore();
    return authStore.token;
    
}

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_SERVER,
  });
  axiosInstance.interceptors.request.use(function (config){
    config.headers.Authorization  = 'Bearer ' + getToken();
    return config;
  })
export {axiosInstance};