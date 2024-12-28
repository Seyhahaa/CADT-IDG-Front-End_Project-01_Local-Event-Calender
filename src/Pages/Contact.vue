<template>
    <section>
        <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
            <div class="fixed-bg" style="background-image: url(https://media.istockphoto.com/id/1466862796/photo/business-analysis-analyst-working-data-management-system-on-computer.jpg?s=612x612&w=0&k=20&c=gzDS6-jDV_cciERk0SgdGHZj9H1mK5a_8Qh6E-4y1to=);"></div>
            <div class="container">
                <div class="pg-tp-wrp text-center w-100">
                    <h1 class="mb-0">ទំនាក់ទំនងមកកាន់ពួកយើង</h1>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html" title="Home">ទំព័រដើម</a></li>
                        <li class="breadcrumb-item active">ទំនាក់ទំនង</li>
                    </ol>
                </div><!-- Page Top Wrap -->
            </div>
        </div>
    </section>
    <section>
        <div class="w-100 pb-100 gray-bg position-relative">
            <div class="w-100" id="cont-map"></div>
            <div class="container">
                <div class="get-touch-wrap2 w-100">
                    <div class="get-touch-info-wrap res-row w-100">
                        <div class="row mrg15">
                            <div class="col-md-6 col-sm-6 col-lg-4">
                                <div class="get-touch-info-box d-flex flex-wrap w-100">
                                    <i class="fas fa-phone-alt thm-clr"></i>
                                    <div class="get-touch-info-inner">
                                        <h4 class="mb-0">លេខទូរស័ព្ទ</h4>
                                        <span class="d-block">+855 09833 59</span>
                                        <span class="d-block">+855 09833 59</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-lg-4">
                                <div class="get-touch-info-box d-flex flex-wrap w-100">
                                    <i class="fas fa-map-marker-alt thm-clr"></i>
                                    <div class="get-touch-info-inner">
                                        <h4 class="mb-0">អាស័យដ្ខាន</h4>
                                        <span class="d-block">861 S.Grand Prairie Pkwy Grand Prairie TX 5891 Phnom Penh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-lg-4">
                                <div class="get-touch-info-box d-flex flex-wrap w-100">
                                    <i class="far fa-envelope thm-clr"></i>
                                    <div class="get-touch-info-inner">
                                        <h4 class="mb-0">អ៊ីម៉ែល</h4>
                                        <a href="javascript:void(0);" title="">youremail@wegokh.com</a>
                                        <a href="javascript:void(0);" title="">www.wegokh.onling</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- Get In Touch Info Wrap -->
                    <div class="form-wrap v2 text-center w-100">
                        <h2 class="mb-0">មានសំណួរ?<br>
                            ទម្លាក់ខាងក្រោមនេះ! និងឈ្មោះ</h2>
                        <form class="w-100" @submit.prevent="sendMessage">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-lg-12">
                                    <div class="form-group w-100">
                                        <div class="response w-100"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <input class="w-100 brd-rd5 mt-25 fname" id="name" type="text" v-model="param.name" placeholder="ឈ្មេាះ">
                                </div>
                                <div class="col-md-6 col-sm-6 col-lg-4">
                                    <input class="w-100 brd-rd5 mt-25 email" id="email" type="email" v-model="param.email" placeholder="អ៊ីម៉ែល">
                                </div>
                                <div class="col-md-12 col-sm-6 col-lg-4">
                                    <input class="w-100 brd-rd5 mt-25 subject" type="tel" v-model="param.phone" placeholder="លេខទូរស័ព្ទ">
                                </div>
                                <div class="col-md-12 col-sm-12 col-lg-12">
                                    <textarea class="w-100 brd-rd5 mt-25 contact_message" v-model="param.message" placeholder="សាររបស់អ្នក..."></textarea>
                                    <button class="thm-btn mt-5" id="submit" type="submit">ផ្ញើសារ</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div><!-- Get In Touch Style 2 --->
            </div>
        </div>
    </section>
</template>
<script>

export default{
    data(){
        return{
            param:{
                name: '',
                email: '',
                phone: '',
                message: '',
            }
        }
    },
    methods: {
        sendMessage(){
            console.log(this.param)
            emailjs.send('service_yeq08zw','template_odbtt2m',this.param).then(alert('email send!!'))
            this.clearForm()
        },
        clearForm(){  
            this.param = {
                name: '',
                email: '',
                phone: '',
                message: '',
            }
        }
      
    }
}
</script>