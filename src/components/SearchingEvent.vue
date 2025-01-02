<template>
    <section>
        <div class="w-100 position-relative">
            <!-- <div class="feat-wrap pt-140 pb-140 dark-layer position-relative opc7 w-100"> -->
            <div class="pt-140 pb-140 dark-layer position-relative opc7 w-100">
                <div class="fixed-bg" style="background-image: url(https://images.unsplash.com/photo-1484914440268-8d352fe4db95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"></div>
                <div class="container">
                    <div class="pt-[10rem] w-100">
                        <h2 class="mb-5 text-white font-bold text-[3rem] leading-[5rem] text-center">
                          ស្វែងរកព្រឹត្តិការណ៍ដែលកំពុងបន្ត និង<br />
                            
                            ព្រឹត្តិការណ៍នាពេលខាងមុខនៅជុំវិញអ្នក...
                        </h2>
                        <form class="dir-form d-flex" @submit.prevent="submitForm">
                            <div class="field">
                                <label class="thm-clr">ខ្ញុំកំពុងចង់រកអំពី...</label>
                                <input type="text" v-model="title" placeholder="ឈ្មេាះកម្មវិធី" />
                                <i class="fas fa-search"></i>
                            </div>
                            <div class="field loc">
                                <label class="thm-clr">ទីតាំង</label>
                                <input type="text" v-model="address" placeholder="ភ្នំពេញ" />
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="field slc">
                                <div class="slc-wp">
                                    <select v-model="category">
                                        <option value="">គ្រប់ប្រភេទកម្មវិធី</option>
                                        <option value="exhibition">ការតាំងពិពណ៌</option>
                                        <option value="seminar">សិក្ខាសាលា</option>
                                        <option value="conference">កិច្ចប្រជុំ</option>
                                        <option value="social event">កម្មវិធីសង្គម</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <button class="thm-btn" type="submit">
                              <i class="fas fa-search"></i>ស្វែងរកឥឡូវនេះ
                            </button>
                        </form>
                        <!-- <div class="dir-cate-wrap text-center w-100">
                <h4 class="mb-0">Use quick search by category</h4>
                <ul class="dir-opt-list d-inline-flex mb-0 list-unstyled">
                  <li>
                    <a href="listing-layout.html" title=""><span class="rounded-circle"><i
                          class="fas fa-hamburger thm-clr"></i></span>
                      <h5 class="mb-0">Concert Event</h5>
                    </a>
                  </li>
                  <li>
                    <a href="listing-layout.html" title=""><span class="rounded-circle"><i
                          class="fas fa-hotel thm-clr"></i></span>
                      <h5 class="mb-0">Resturants Event</h5>
                    </a>
                  </li>
                  <li>
                    <a href="listing-layout.html" title=""><span class="rounded-circle"><i
                          class="fas fa-store-alt thm-clr"></i></span>
                      <h5 class="mb-0">Shopping Mall</h5>
                    </a>
                  </li>
                  <li>
                    <a href="listing-layout.html" title=""><span class="rounded-circle"><i
                          class="fas fa-school thm-clr"></i></span>
                      <h5 class="mb-0">School Event</h5>
                    </a>
                  </li>
                  <li>
                    <a href="listing-layout.html" title=""><span class="rounded-circle"><i
                          class="fas fa-hamburger thm-clr"></i></span>
                      <h5 class="mb-0">Gym Event</h5>
                    </a>
                  </li>
                </ul>
              </div> -->
                    </div>
                    <!-- Feat Wrap -->
                </div>
            </div>
        </div>
    </section>
  
</template>
<script>
import { searchStore } from '@/stores/searchStore';
import axios from 'axios';
import { mapActions } from 'pinia';
import SearchEvent from './searchEvent.vue';

export default{
  components: { SearchEvent },
  data(){
    return {
      event: '',
      
        title: '',
        address: '',
        category: '',
      
    }
  },
  methods: {

        ...mapActions(searchStore, ['searchEvent']),
        async submitForm() {
            await this.searchEvent(this.title, this.address, this.category)
            this.$router.push('/search-event')
        }
    },

  }
</script>

