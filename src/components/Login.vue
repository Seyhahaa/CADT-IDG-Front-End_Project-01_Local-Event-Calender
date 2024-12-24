<template>
  <section>
    <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
      <div
        class="fixed-bg"
        style="background-image: url(assets/images/pg-tp-bg.jpg)"
      ></div>
      <div class="container">
        <div class="pg-tp-wrp text-center w-100">
          <h1 class="mb-0">Login & Register</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html" title="Home">this is Event calender</a>
            </li>
            <li class="breadcrumb-item active">Login & Register</li>
          </ol>
        </div>
        <!-- Page Top Wrap -->
      </div>
    </div>
  </section>
  <section>
    <div class="w-100 gray-bg position-relative">
      <div class="login-register-wrap w-100">
        <div class="row mrg align-items-center">
          <div class="col-md-12 col-sm-12 col-lg-5">
            <div
              class="login-wrap w-100 position-relative"
              style="background-image: url(assets/images/login-bg.jpg)"
            >
              <div class="login-inner">
                <div class="title2 w-100">
                  <h2 class="mb-0">Login your Account</h2>
                  <p class="mb-0">
                    Login to your account to discovery all great features in
                    this template.
                  </p>
                </div>
                <form @submit.prevent="passwordLogin" class="w-100">
                  <input
                  v-model="email"
                  id="email"
                  class="rounded-pill"
                  type="email"
                  placeholder="Email Address"
                  />
                  <input
                    v-model="password"
                    id="password"
                    class="rounded-pill"
                    type="password"
                    placeholder="Password"
                  />
                  <div
                    class="kep-forget-pas d-flex flex-wrap justify-content-between align-items-center"
                  >
                    <span class="check-box"
                      ><input type="checkbox" id="keep-login" /><label
                        for="keep-login"
                        >Keep me logged in</label
                      ></span
                    >
                    <a href="javascript:void(0);" title=""
                      >Forgot your Password?</a
                    >
                  </div>
                  <button class="thm-btn brd-btn rounded-pill" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <!-- signup Form -->
           <register />


        </div>
      </div>
      <!-- Login Register Wrap -->
    </div>
  </section>
</template>
<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '@/stores/auth.js'
import register from './register.vue';
export default {
  components: { register },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        ...mapActions(useAuthStore, ['login','isAuthenticated']),
        async passwordLogin() {
            await this.login(this.email, this.password)
            this.$toast.success('Login Success.', {
                // override the global option
                position: 'bottom'
              })
            this.$router.push('/user')
        }
    }
}</script>
