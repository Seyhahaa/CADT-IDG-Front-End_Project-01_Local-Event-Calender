<template>
    <div>
        <!-- Loading State -->
        <div v-if="loading" class="text-center">
            <p class="text-gray-500">Loading event details...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center">
            <p class="text-red-500">{{ error }}</p>
        </div>

        <!-- Event Content -->
        <div v-else>
            <!-- Event Header -->
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="min-w-0 flex-1">
                    <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight"
                    >
                        {{ data.title }}
                    </h2>
                    <h5
                        class="font-bold leading-7 text-gray-500 sm:tracking-tight"
                    >
                        {{ data.subTitle }}
                    </h5>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{ data.address }}
                        </div>
                        <div class="mt-2 flex items-center text-sm text-gray-500">
                            <UserGroupIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            {{}} 
                        </div>
                    </div>
                </div>
                <div class="mt-5 flex lg:ml-4 lg:mt-0">
                    <!-- <span class="ml-3 hidden sm:block">
                        <button  @click="edditEvent(events._id)"
                            type="button"
                            class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <TicketIcon class="-ml-0.5 mr-1.5 h-5" aria-hidden="true" />
                            កែប្រែ
                        </button>
                    </span> -->
                </div>
            </div>

            <!-- Event Image -->
            <div class="mt-8 aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                <img
                    :src="data.image"
                    :alt="data.title"
                    class="h-full w-full object-cover object-center"
                />
            </div>

            <!-- Event Details -->
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    <div class="prose max-w-none mb-5">
                        <h3 class="text-2xl font-bold mb-5">About this News</h3>
                        <p>{{ data.content }}</p>
                    </div>

                </div>
                

                <!-- Sidebar -->
                <div>
                    <div class="rounded-lg bg-gray-50 p-6">
                        <h3 class="text-base font-semibold leading-6 text-gray-900">
                            News Details
                        </h3>

                        <dl class="mt-4 space-y-4">
                            <div>
                                <dt class="text-sm font-medium text-gray-500">Date and Time</dt>
                                <dd class="mt-1 text-sm text-gray-900">
                                    {{ newDate }}
                                </dd>
                            </div>

                            <div>
                                <dd class="mt-1 text-md text-yellow-700">{{ during }}</dd>
                            </div>
                        </dl>
                        
                        <div class="mt-5">
                            <div class="mb-5">
                            <!-- Trigger Button -->
                            <button @click="showPopup = true" class="px-4 py-2 bg-blue-500 text-white rounded">
                             បន្ថែមបណ្តាញសង្គម
                            </button>
                        </div>
                        </div>

                        <div class="wdgt2 w-100">
                            <div class="social-links5 w-100">
                                <a v-if="social[0]?.facebook != undefined " class="facebook py-3" :href="`https://${social[0]?.facebook}`" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i>Facebook</a>
                                <a v-if="social[1]?.instagram != undefined " class="instagram py-3" :href="`https://${social[1]?.instagram}`" title="Instagram" target="_blank"><i class="fab fa-instagram"></i>Instagram</a>
                                <a v-if="social[2]?.youtube != undefined " class="youtube py-3" :href="`https://${social[2]?.youtube}`" title="Youtube" target="_blank"><i class="fab fa-youtube"></i>Youtube</a>
                            </div>
                        </div>

                        <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                                    <div class="flex justify-between items-center mb-4">
                                    <h2 class="text-xl font-bold">បណ្តាញសង្គម</h2>
                                    <button @click="closePopup" class="text-gray-500 hover:text-gray-700">
                                        ✕
                                    </button>
                                    </div>

                                    <form @submit.prevent="handleSubmit">
                                        <div class="flex justify-start gap-2 items-center ">
                                            <label for=""><img class="w-[5rem]" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt=""></label>
                                            <div class="">
                                                <input name="facebook"
                                                placeholder="សូមបញ្ចូលតំណរភ្ជាប់អោយបានត្រឹមត្រូវ"
                                                id="facebook"
                                                v-model="socialMedia.facebook"
                                                class="w-[18rem] p-[1rem] border rounded"
                                                 >
                                            </div>
                                        </div>
                                        <div class="flex justify-start gap-2 items-center ">
                                            <label for=""><img class="ml-1 w-[4.5rem]" src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" alt=""></label>
                                            <div class="">
                                                <input name="instagram"
                                                placeholder="សូមបញ្ចូលតំណរភ្ជាប់អោយបានត្រឹមត្រូវ"
                                                id="instagram"
                                                v-model="socialMedia.instagram"
                                                class="w-[18rem] p-[1rem] border rounded"
                                                 >
                                            </div>
                                        </div>
                                        <div class="flex justify-start gap-4 items-center ">
                                            <label for=""><img class="ml-3 w-[3.5rem]" src="https://static.vecteezy.com/system/resources/previews/042/127/122/non_2x/red-circle-bordered-youtube-logo-with-long-shadow-on-transparent-background-free-png.png" alt=""></label>
                                            <div class="">
                                                <input name="youtube"
                                                id="youtube"
                                                placeholder="សូមបញ្ចូលតំណរភ្ជាប់អោយបានត្រឹមត្រូវ"
                                                v-model="socialMedia.youtube"
                                                class="w-[18rem] p-[1rem] border rounded"
                                                 >
                                            </div>
                                        </div>
                                        <div class="flex justify-end mt-5">
                                            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">បន្ថែម</button>
                                            <button
                                                type="button"
                                                @click="closePopup"
                                                class="ml-3 px-4 py-2 border rounded" >Cancel
                                            </button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import moment from'moment';
export default {
    name: 'PopupForm',
    data() {
        return {
            newDate: '',
            during: '',
            eventId: useRoute().params.id,
            data: '',

            showPopup: false,

            social: '',

            socialMedia: [
                { facebook: ''},
                { instagram: ''},
                { youtube: ''},
                // add more social media here...
            ],

        };
    },
    mounted() {
        this.getData()
    },

    methods: {
    async getData() {
        try{
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/news/${this.eventId}`)

        this.data= response.data;

        const arrSocial = JSON.stringify(response.data.socialMedia)
        this.social = JSON.parse(arrSocial)

        this.newDate = moment(response.data.createdAt).format('LLLL')
        this.during = moment(response.data.createdAt).fromNow()
        console.log(this.social[0]);
        }catch(e){console.log(e.message)}
    },

    async handleSubmit(){
        const data = {socialMedia : 
            [
            {facebook: this.socialMedia.facebook},
            {instagram: this.socialMedia.instagram},
            {youtube: this.socialMedia.youtube},
        ],
        }
        try{
            const result = await axios.put(`${process.env.VUE_APP_SERVER}/news/social/${this.eventId}`,data)
            {
                if(result.status==200)

                this.closePopup()
                alert('អ្នកបានបន្ថែមបណ្តាញសង្គមដោយជោគជ័យ')
            }
        }catch(e){console.log(e.message)}

        this.getData();

    },
    closePopup() {
      this.showPopup = false
      this.resetForm()
    },
    resetForm() {
        this.socialMedia.facebook = ''
        this.socialMedia.instagram = ''
        this.socialMedia.youtube = ''
    },
},
    
};
</script>

<style scoped>
.fab{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}

.social-links5 > a i {
  width: 2.5rem;
  line-height: 2.25rem;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,.3);
  margin-right: .9375rem;
  font-size: 1.125rem;
}
.social-links5 > a {
  display: block;
  color: #fff;
  border-width: 2px;
  border-style: solid;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 14px;
  font-family: Jost;
  font-weight: 500;
  text-transform: uppercase;
}
.facebook,
.facebook-hvr:hover,
.facebook-hvr:focus {
  background-color: #3b5999;
  border-color: #3b5999;
}

.youtube,
.youtube-hvr:hover,
.youtube-hvr:focus {
  background-color: #cd201f;
  border-color: #cd201f;
}
.instagram,
.instagram-hvr:hover,
.instagram-hvr:focus {
  background-color: #e4405f;
  border-color: #e4405f;
}
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
  width: 90%;
  max-width: 650px;
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