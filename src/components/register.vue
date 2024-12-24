<template>
    <div class="col-md-12 col-sm-12 col-lg-7">
            <div class="register-wrap w-100">
              <div class="register-inner">
                <div class="title2 w-100">
                  <h2 class="mb-0">Don't have an Account? Register Now</h2>
                  <p class="mb-0">
                    By creating an account with our store, you will be able to
                    move through the checkout process faster,store multiple
                    shipping addresses.
                  </p>
                </div>
                <form @submit.prevent="registerNewUser" class="w-100">
                  <div class="row mrg20">
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="First Name"
                        id="firstname"
                        v-model="formData.firstname"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Last Name"
                        id="lastname"
                        v-model="formData.lastname"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Gender"
                        id="gender"
                        v-model="formData.gender"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="tel"
                        placeholder="Phone Number"
                        id="phone"
                        v-model="formData.phone"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="tel"
                        placeholder="Email"
                        id="email"
                        v-model="formData.email"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Address"
                        id="address"
                        v-model="formData.address"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input @change="onFileSelected"
                        class="rounded-pill"
                        type="file"
                        placeholder="Photo"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Companey/Organisation"
                        id="organization"
                        v-model="formData.organization"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Position"
                        id="position"
                        v-model="formData.position"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="date"
                        placeholder="Data of Birth"
                        id="dob"
                        v-model="formData.dob"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="password"
                        placeholder="Password"
                        id="newPassword"
                        v-model="formData.password"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="password"
                        placeholder="Re - Password"
                        id="confirmPassword"
                        v-model="formData.confirmPassword"
                      />
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-12">
                      <button class="thm-btn rounded-pill" type="submit">
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
</template>
<script>
    import axios from 'axios';
export default {
    data() {
        return {
          formData: {
            email: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            gender: '',
            phone: '',
            address: '',
            organization: '',
            position: '',
            dob: '',
            file: null,
          }
        };
    },
    methods: {
      onFileSelected(event) {
          this.formData.file = event.target.files[0];
          console.log(this.file);
        },
        async registerNewUser(){  
          const formData = new FormData()
            formData.append('file', this.formData.file); 
            formData.append('email', this.formData.email); 
            formData.append('password', this.formData.password);
            formData.append('confirmPassword', this.formData.confirmPassword);
            formData.append('firstname', this.formData.firstname);
            formData.append('lastname', this.formData.lastname);
            formData.append('gender', this.formData.gender);
            formData.append('phone', this.formData.phone);
            formData.append('address', this.formData.address);
            formData.append('organization', this.formData.organization);
            formData.append('position', this.formData.position);
            formData.append('dob', this.formData.dob);

            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER}/user/signup`, formData,{
                  headers: { 
                    "Content-Type": "multipart/form-data" 
                  }
                });
                
              console.log(response);
              if(response.status == 201){
                this.$toast.success('Register Success. Continou login', {
                // override the global option
                position: 'bottom'
              })
              this.$router.push('/login')
            }
            else{
              this.$router.push('/login')
            }
            } catch (error) {
                console.log(error);
                alert('Registration failed');
            }
            
        },
        
    }
}</script>
