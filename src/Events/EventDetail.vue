
<template>
    <main>
        <section>
            <div class="w-100 position-relative">
                <div class="feat-wrap2 w-100 position-relative">
                    <div class="feat-caro2">
                      
                        <div class="feat-item">
                            <div
                                class="feat-img"
                                :style="`background-image: url(${data?.images})`"
                            ></div>
                        </div>
                    </div>
                    <div class="feat-nav-caro">
 

                        <div class="feat-nav-item">
                            <img
                                class="img-fluid w-100"
                                src="assets/images/resources/feat-nav-img6.jpg"
                                alt="Featured Nav Image 6"
                            />
                        </div>
                    </div>
                </div>
                <!-- Featured Wrap 2 -->
            </div>
        </section>
        <section>
            <div class="w-100 pb-120 gray-bg position-relative">
                <div class="container">
                    <div class="event-detail-wrap2 w-100">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-lg-8">
                                <div class="event-detail-inner2 bg-white w-100 overlap205">
                                    <div class="event-detail-info2 w-100">
                                        <h2 class="mb-0">{{ data?.title }}</h2>
                                        <span class="d-inline-block thm-clr">{{data?.date}}</span
                                        >
                                        <ul class="event-detail-list mb-0 list-unstyled w-100">
                                            <li>Location:<span>{{data?.address}}</span></li>
                                            <li>
                                                Review:<span
                                                    ><span class="rate text-color2"
                                                        ><i class="fas fa-star"></i
                                                        ><i class="fas fa-star"></i
                                                        ><i class="fas fa-star"></i
                                                        ><i class="fas fa-star"></i
                                                        ><i class="far fa-star"></i></span
                                                    >563 reviews</span
                                                >
                                            </li>
                                            <li>Phone:<span>{{ }}</span></li>
                                            <li>Website:<span>www.jthemes.com</span></li>
                                        </ul>
                                        <div
                                            class="reviewer-review-btns d-inline-flex align-items-center w-100"
                                        >
                                            <a class="share-btn" href="javascript:void(0);" title=""
                                                >Share</a
                                            >
                                            <a class="thm-btn" href="javascript:void(0);" title=""
                                                >Join Event</a
                                            >
                                        </div>
                                    </div>
                                    <div class="event-detail-content-inner w-100">
                                        <h3>About Event</h3>
                                        <p class="mb-0">
                                            
                                            {{ data?.description }}
                                        </p>
                                        
                                    </div>
                                    <div v-if="speaker.length != 0" class="event-detail-content-inner">
                                        <h3>Who Speaking?</h3>
                                        <div class="speaker-wrap">
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 col-lg-4" v-for="person in speaker" :key="person._id">
                                                    <div class="speaker-box text-center w-100">
                                                        <img
                                                            class="rounded-full w-full h-[14rem] object-cover"
                                                            :src="person.photo"
                                                            alt="Speaker Image 1"
                                                        />
                                                        <h4 class="mb-0">{{person.name}}</h4>
                                                        <span class="d-block"
                                                            >{{ person.company }}</span
                                                        >
                                                    </div>
                                                </div>
                                                <!-- <div class="col-md-4 col-sm-4 col-lg-4">
                                                    <div class="speaker-box text-center w-100">
                                                        <img
                                                            class="img-fluid rounded-circle"
                                                            src="assets/images/resources/speaker-img2.jpg"
                                                            alt="Speaker Image 2"
                                                        />
                                                        <h4 class="mb-0">David Miller</h4>
                                                        <span class="d-block"
                                                            >Marketing Envato Pty Ltd.</span
                                                        >
                                                    </div>
                                                </div> -->
 
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="partner.length != 0"  class="event-detail-content-inner w-100">
                                        <h3>Our Sponsors</h3>
                                        <div class="sponsors-wrap w-100">
                                            <div class="row">
                                                <div class="col-md-4 col-sm-4 col-lg-4" v-for="p in partner" :key="p.id">
                                                    <div class="spr-box w-100">
                                                        <a href="javascript:void(0);" title=""
                                                            ><img
                                                                class="img-fluid"
                                                                :src="p.logo"
                                                                alt="Sponsor Image 1"
                                                        /></a>
                                                    </div>
                                                </div>
                    
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- Comment section -->
                                 <br>
                                <hr />
                            <div class="event-detail-content-inner ">
                                <h3>មតិទាំងអស់</h3>
                                <div class="pl-3 mb-3" v-for="cmt in allComments" :key="cmt.id">
                                    <div class="flex items-center">

                                            <p class="font-bold">{{ cmt?.byUser?.username }}:</p>
                                            <p class="ml-2 font-medium px-3 py-2 bg-white rounded-full"> {{ cmt?.content }}</p>
                                    </div>
                                </div>
                                <Form @submit="handleComment" class="w-100">
                                    <div class="mb-3">
                                        <Field name="comment"
                                        v-model="comment"
                                        id="comment"
                                        :rules="commentRule"
                                        class="rounded-pill w-full px-2 py-2"
                                        type="text"
                                        placeholder="មតិរបស់អ្នក"
                                        />
                                        <ErrorMessage class="text-red-400" name="comment" />
                                        
                                    </div>
                    
                                    <button class="btn btn-success" :disabled="comment === ''" type="submit">
                                        រក្សាទុក
                                    </button>
                                    </Form>
                            </div>
                            </div>
                            

                            <div class="col-md-6 col-sm-12 col-lg-4">
                                <div class="sidebar-wrap2 pt-140 w-100">
                                    <div class="widget-box w-100">
                                        <h3 class="thm-bg">Who Host this Event</h3>
                                        <div class="event-organizer w-100">
                                            <div class="tab-content">
                                                <div
                                                    class="tab-pane fade show active"
                                                    id="event-organizer1"
                                                >
                                                    <div class="event-organizer-box w-100">
                                                        <div
                                                            class="event-organizer-info d-flex flex-wrap align-items-center w-100"
                                                        >
                                                            <img
                                                                class="img-fluid rounded-circle"
                                                                :src="data?.uploadBy?.path"
                                                                alt="Event Organizer Image 1"
                                                            />
                                                            <div class="event-organizer-info-inner">
                                                                 <h4 class="mb-0">{{ username }}</h4>
                                                                <span class="thm-clr"
                                                                    >Posted 3 days ago</span
                                                                >
                                                            </div>
                                                        </div>
                                                        <ul
                                                            class="post-meta event-organizer-meta mb-0 list-unstyled w-100"
                                                        >
                                                            <li>
                                                                <i
                                                                    class="fas fa-map-marker-alt rounded-circle"
                                                                ></i
                                                                > {{ data?.uploadBy?.address}}
                                                            </li>
                                                            <li>
                                                                <i
                                                                    class="far fa-envelope rounded-circle"
                                                                ></i
                                                                >{{ data?.uploadBy?.email}}
                                                            </li>
                                                            <li>
                                                                <i
                                                                    class="fas fa-phone rounded-circle"
                                                                ></i
                                                                >{{data?.uploadBy?.phone }}
                                                            </li>
                                                            <li>
                                                                <i
                                                                    class="fas fa-globe rounded-circle"
                                                                ></i
                                                                >www.yourwebsite.com
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <!-- Event Detail Wrap 2 -->
                </div>
            </div>
        </section>
    </main>
    <!-- Main Wrapper -->
</template>
<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as Yup from 'yup'
import { mapState } from 'pinia';
import { viewStore } from '@/stores/viewStore';
import { computed } from 'vue';

export default{
    components:{
        ErrorMessage,
        Field,
        Form,
    },
    data(){
        return{
            //commentRule : Yup.string().required('សូមបញ្ចូលមតិ...'),

            eventId : useRoute().params.id,

            data :null,
            username : '',
            allComments : '',

            comment: '',
            speaker : '',

            partner : '',

        }
    },

    // speaker


mounted() {
    this.getData();
    this.getComments();
},


methods:{
    async getData(){
    //console.log(eventId);
    try{
        const response = await axios.get(`${process.env.VUE_APP_SERVER}/event/${this.eventId}`);
        const speakers = await axios.get(`${process.env.VUE_APP_SERVER}/event/speaker/${this.eventId}/`);
        const result = await axios.get(`${process.env.VUE_APP_SERVER}/event/partner/${this.eventId}/`);

        
        const arrayData = JSON.stringify(response.data);
        this.data = JSON.parse(arrayData);
        console.log(this.data);

        this.username = this.data.firstname + " " + this.data.lastname;

        this.partner = result.data;

        this.speaker = speakers.data

    }catch(e){
        console.log(e.message)
    }

},
async getComments(){
    try{
        const comment = await axios.get(`${process.env.VUE_APP_SERVER}/comments/${this.eventId}`);
        const comments = JSON.stringify(comment.data);
        this.allComments = JSON.parse(comments);
        console.log(this.allComments);
    }catch(e) {
        console.log(e.message);
    }
},

    async handleComment(){
        const token = localStorage.getItem('viewerToken')
        console.log(token);
        if(!token){
            let alert = 'អ្នកត្រូវចុះឈ្មេាះមុននឹងអាចបញ្ចេញមតិបាន!';
            if(confirm(alert) === true) {
            this.googleLogin();
            }
        }else{
            try{
                const response =await axios.post(`${process.env.VUE_APP_SERVER}/comments/${this.eventId}/`, {content: comment.value },{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
            }catch(e){console.log(e.message)}
            this.clearComment();
            this.getComments();
        }
        
    },
    clearComment() {
        this.comment = '';
    },
    googleLogin() {
            const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.VUE_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_GOOGLE_REDIRECT_URL}&response_type=code&scope=profile%20email&access_type=offline`;
            window.open(googleAuthUrl)
        },
}
}

</script>
