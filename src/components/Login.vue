<template>
  <section>
    <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
      <div
        class="fixed-bg"
        style="background-image: url(https://media.istockphoto.com/id/2054541846/photo/network-security-security-internet-technology-security-internet-data-privacy-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=y1JjTeeI_jFvqcXtGSBBvaXOzKTfZOiMViV_1o0ZDj8=)"
      ></div>
      <div class="container">
        <div class="pg-tp-wrp text-center w-100">
          <h1 class="mb-0">ចូលប្រើ / ចុះឈ្មេាះ</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <routerLink to="/" title="Home">ទំព័រដើម</routerLink>
            </li>
            <li class="breadcrumb-item active">ចូលប្រើប្រាស់</li>
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
                  <h2 class="mb-0">ចូលគណនីរបស់អ្នក</h2>
                  
                </div>
                <Form @submit="passwordLogin" class="w-100">
                  <div>
                    <Field name="email"
                      v-model="email"
                      id="email"
                      :rules="emailRule"
                      class="rounded-pill"
                      type="email"
                      placeholder="អ៊ីម៉ែល"
                      />
                      <ErrorMessage class="text-red-400" name="email" />
                      <Field name="password"
                        v-model="password"
                        id="password"
                        :rules="passRule"
                        class="rounded-pill"
                        type="password"
                        placeholder="លេខសម្ងាត់"
                      />
                      <ErrorMessage class="text-red-400" name="password" />
                  </div>
 
                  <button class="thm-btn brd-btn rounded-pill" type="submit">
                    ចូល
                  </button>
                </Form>
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
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as Yup from "yup";
import Register from './register.vue';
export default {
  components: { 
        Form,
        Field,
        ErrorMessage,
    Register,
     },
    data() {
        return {

          emailRule: Yup.string().required(),
          passRule: Yup.string().required().min(8),

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
