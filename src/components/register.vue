<template>
    <div class="col-md-12 col-sm-12 col-lg-7">
            <div class="register-wrap w-100">
              <div class="register-inner">
                <div class="title2 w-100">
                  <h2 class="mb-0">មិនមានគណនីទេ? ចុះឈ្មោះឥឡូវនេះ</h2>
                  <p class="mb-0">
                    តាមរយៈការបង្កើតគណនីជាមួយយើងអ្នកនឹងអាចធ្វើកាបង្ហោះព្រឹត្តិការណ៍និងពត៌មានជាច្រើនទៅកាន់អ្នកមើលគ្រប់ពេលវេលា។
                  </p>
                </div>
                <Form @submit="registerNewUser" class="w-100">
                  <div class="row mrg20">
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="firstname"
                        class="rounded-pill"
                        type="text"
                        :rules="fnameRule"
                        placeholder="នាមត្រកូល*"
                        id="firstname"
                        v-model="formData.firstname"
                      />
                      <ErrorMessage class="text-red-400" name="firstname" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="lastname"
                        class="rounded-pill"
                        type="text"
                        :rules="lnameRule"
                        placeholder="នាមខ្លួន*"
                        id="lastname"
                        v-model="formData.lastname"
                      />
                      <ErrorMessage class="text-red-400" name="lastname" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                     
                      <select v-model="formData.gender" class="w-full rounded-full border-gray-200 p-3 text-sm">
                          <option value="">ភេទ</option>
                          <option value="male">ប្រុស</option>
                          <option value="female">ស្រី</option>
                          <option value="other">ផ្សេងៗ</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="phone"
                        class="rounded-pill"
                        type="tel"
                        :rules="phoneRule"
                        placeholder="លេខទូរស័ព្ទ*"
                        id="phone"
                        v-model="formData.phone"
                      />
                      <ErrorMessage class="text-red-400" name="phone" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="email"
                        class="rounded-pill"
                        type="email"
                        :rules="emailRule"
                        placeholder="អ៊ីម៉េល*"
                        id="email"
                        v-model="formData.email"
                      />
                      <ErrorMessage class="text-red-400" name="email" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="អាស័យដ្ខាន"
                        id="address"
                        v-model="formData.address"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field @change="onFileSelected" name="file"
                        class="rounded-pill"
                        type="file"
                        :rules="fileRule"
                        placeholder="Photo"
                      />
                      <ErrorMessage class="text-red-400" name="file" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="organizer"
                        class="rounded-pill"
                        type="text"
                        placeholder="ក្រុមហ៊ុន/ស្ថាប័ន*"
                        :rules="organizeRule"
                        id="organization"
                        v-model="formData.organization"
                      />
                      <ErrorMessage class="text-red-400" name="organizer" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="position"
                        class="rounded-pill"
                        type="text"
                        placeholder="តំណែង*"
                        :rules="positionRule"
                        id="position"
                        v-model="formData.position"
                      />
                      <ErrorMessage class="text-red-400" name="position" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="date"
                        placeholder="ថ្ងៃខែឆ្នាំកំណើត"
                        id="dob"
                        v-model="formData.dob"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="password" ref="password"
                        class="rounded-pill"
                        type="password"
                        :rules="password"
                        placeholder="លេខសំងាត់*"
                        id="password"
                        v-model="formData.password"
                      />
                      <ErrorMessage class="text-red-400" name="password" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <Field name="cfpassword"
                        class="rounded-pill"
                        type="password"
                        :rules="cfpassRule"
                        placeholder="បញ្ចាក់លេខសម្ងាត់*"
                        id="confirmPassword"
                        v-model="formData.confirmPassword"
                      />
                      <ErrorMessage class="text-red-400" name="cfpassword" />
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-12">
                      <button class="thm-btn rounded-pill" type="submit">
                        ចុះឈ្មោះឥឡូវនេះ
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
</template>
<script>
    import axios from 'axios';
    import { ErrorMessage, Field, Form } from 'vee-validate';
import * as Yup from "yup";
export default {
  components: { 
        Form,
        Field,
        ErrorMessage,
  },
    data() {
        return {
          emailRule: Yup.string().email().required(),
          phoneRule: Yup.string().required(),
          fnameRule: Yup.string().required(),
          lnameRule: Yup.string().required(),
          organizeRule: Yup.string().required(),
          positionRule: Yup.string().required(),
          password: Yup.string().required().min(8),
          cfpassRule: Yup.string().required(),
          fileRule: Yup.string().required(),
          isLoading: false,

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
              if(response.status == 400){
                alert(response.data.message)
              this.$router.push('/login')
            }
            else{
              alert('Success continue login')
            this.$router.push('/login')
              
            }
            } catch (error) {
                console.log(error);
                alert(error.response.data.message);
            }
            
        },
        
    }
}</script>
