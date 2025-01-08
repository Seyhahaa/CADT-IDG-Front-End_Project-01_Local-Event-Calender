<template>
    <div class="grid place-content-center bg-slate-500 h-screen">
        <div class="text-center  bg-[#cf4328] p-5 rounded-lg">
            <div class="title2 w-100 ">
                <h2 class="mb-0 text-white">ចូលគណនីរបស់អ្នក</h2>
            </div>
            <Form @submit="passwordLogin" class="w-100">
            <div class="flex flex-col gap-3">
                <Field
                name="email"
                v-model="email"
                id="email"
                :rules="emailRule"
                class="rounded-full p-2"
                type="email"
                placeholder="អ៊ីម៉ែល"
                />
                <ErrorMessage class="text-red-400" name="email" />
                <Field
                name="password"
                v-model="password"
                id="password"
                :rules="passRule"
                class="rounded-pill p-2 border-gray-400"
                type="password"
                placeholder="លេខសម្ងាត់"
                />
                <ErrorMessage class="text-red-400" name="password" />
            </div>

            

            <button class="btn btn-primary px-3 rounded-pill mt-3 !text-white text-2xl !hover:bg-[#cf4328]" type="submit">ចូល</button>
            </Form>
            <button @click="showPopup = true" class="text-white">
                            បង្កើតគណនីថ្មី
            </button>

            <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                                    <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-xl font-bold">Who Speaking</h2>
                                    <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
                                        ✕
                                    </button>
                                    </div>

                <Form @submit="registerNewUser" class="w-100">
                  <div class="row mrg20">
                    <div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                      <Field name="firstname"
                        class="rounded-pill p-2 border-gray-500 border"
                        type="text"
                        :rules="fnameRule"
                        placeholder="នាមត្រកូល*"
                        id="firstname"
                        v-model="formData.firstname"
                      />
                      <ErrorMessage class="text-red-400" name="firstname" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                      <Field name="lastname"
                        class="rounded-pill p-2 border-gray-500 border"
                        type="text"
                        :rules="lnameRule"
                        placeholder="នាមខ្លួន*"
                        id="lastname"
                        v-model="formData.lastname"
                      />
                      <ErrorMessage class="text-red-400" name="lastname" />
                    </div>

                    <div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                      <Field name="email"
                        class="rounded-pill p-2 border-gray-500 border"
                        type="email"
                        :rules="emailRule"
                        placeholder="អ៊ីម៉េល*"
                        id="email"
                        v-model="formData.email"
                      />
                      <ErrorMessage class="text-red-400" name="email" />
                    </div>
 
                    <div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                      <Field name="password" ref="password"
                        class="rounded-pill p-2 border-gray-500 border"
                        type="password"
                        :rules="password"
                        placeholder="លេខសំងាត់*"
                        id="password"
                        v-model="formData.password"
                      />
                      <ErrorMessage class="text-red-400" name="password" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 mb-2">
                      <Field name="cfpassword"
                        class="rounded-pill p-2 border-gray-500 border"
                        type="password"
                        :rules="cfpassRule"
                        placeholder="បញ្ចាក់លេខសម្ងាត់*"
                        id="confirmPassword"
                        v-model="formData.confirmPassword"
                      />
                      <ErrorMessage class="text-red-400" name="cfpassword" />
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-12">
                      <button class="thm-btn rounded-pill p-2 border-gray-500 border" type="submit">
                        ចុះឈ្មោះឥឡូវនេះ
                      </button>
                    </div>
                  </div>
                </Form>
                                </div>
            </div>
        </div>
    </div>
</template>
  <script>
import { mapActions } from "pinia";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import Register from "../components/register.vue";
import { useAdminStore } from "@/stores/adminStore";
import axios from "axios";
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
      passRule: Yup.string().required(),

      username: "",
      password: "",

      showPopup: false,

      formData: {
            email: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
          },
          emailRule: Yup.string().email().required(),
          fnameRule: Yup.string().required(),
          lnameRule: Yup.string().required(),
          password: Yup.string().required().min(8),
          cfpassRule: Yup.string().required(),
    };
  },
  methods: {
    ...mapActions(useAdminStore, ["login", "isAuthenticated"]),
    async passwordLogin() {
      await this.login(this.email, this.password);
      this.$router.push("/admin-dashboard");
    },

        async registerNewUser(){  
          // const formData = new FormData()
          //   formData.append('email', this.formData.email); 
          //   formData.append('password', this.formData.password);
          //   formData.append('confirmPassword', this.formData.confirmPassword);
          //   formData.append('firstname', this.formData.firstname);
          //   formData.append('lastname', this.formData.lastname);
          console.log(this.formData);
            try {
                const response = await axios.post(`${process.env.VUE_APP_SERVER}/auth/register`, this.formData);
                
            
            } catch (error) {
                console.log(error);
                alert(error.response.data.message);
            }
              this.closePopup()
            
        },
        closePopup() {
      this.showPopup = false
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-open {
  background-color: #4CAF50;
  color: white;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
}
</style>
  