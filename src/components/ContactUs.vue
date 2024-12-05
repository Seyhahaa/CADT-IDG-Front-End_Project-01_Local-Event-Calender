<template>
  <main>
    <section>
      <div class="w-100 pt-180 pb-110 black-layer opc45 position-relative">
        <div
          class="fixed-bg"
          style="background-image: url(assets/images/pg-tp-bg.jpg)"
        ></div>
        <div class="container">
          <div class="pg-tp-wrp text-center w-100">
            <h1 class="mb-0">Contact Us</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html" title="Home">Home</a>
              </li>
              <li class="breadcrumb-item active">Contact Us</li>
            </ol>
          </div>
          <!-- Page Top Wrap -->
        </div>
      </div>
    </section>
    <section>
      <div class="w-100 pb-100 gray-bg position-relative">
        <div class="cont-map place-map w-100" id="cont-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8949.788735180888!2d104.90911947747932!3d11.653065142407767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516bdea989b3%3A0x372d2c5e0e14b706!2sCambodia%20Academy%20of%20Digital%20Technology%20(CADT)!5e1!3m2!1sen!2skh!4v1728676468198!5m2!1sen!2skh"
            width="800"
            height="600"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="container">
          <div class="get-touch-wrap2 w-100">
            <div class="get-touch-info-wrap res-row w-100">
              <div class="row mrg15">
                <div class="col-md-6 col-sm-6 col-lg-4">
                  <div class="get-touch-info-box d-flex flex-wrap w-100">
                    <i class="fas fa-phone-alt thm-clr"></i>
                    <div class="get-touch-info-inner">
                      <h4 class="mb-0">Phone</h4>
                      <span class="d-block">+2569 09833 59</span>
                      <span class="d-block">+2569 09833 59</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-4">
                  <div class="get-touch-info-box d-flex flex-wrap w-100">
                    <i class="fas fa-map-marker-alt thm-clr"></i>
                    <div class="get-touch-info-inner">
                      <h4 class="mb-0">Address</h4>
                      <span class="d-block"
                        >861 S.Grand Prairie Pkwy Grand Prairie TX 5891</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-4">
                  <div class="get-touch-info-box d-flex flex-wrap w-100">
                    <i class="far fa-envelope thm-clr"></i>
                    <div class="get-touch-info-inner">
                      <h4 class="mb-0">Email</h4>
                      <a href="javascript:void(0);" title=""
                        >youremail@here.com</a
                      >
                      <a href="javascript:void(0);" title="">www.yourweb.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Get In Touch Info Wrap -->
            <div class="form-wrap v2 text-center w-100">
              <h2 class="mb-0">
                Have A Question? <br />
                Drop Us A Line! Name
              </h2>
              <form class="w-100" action="#" method="post" id="email-form">
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-lg-12">
                    <div class="form-group w-100">
                      <div class="response w-100"></div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-lg-4">
                    <input
                      class="w-100 brd-rd5 mt-25 fname"
                      type="text"
                      name="fname"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-md-6 col-sm-6 col-lg-4">
                    <input
                      class="w-100 brd-rd5 mt-25 email"
                      type="email"
                      name="email"
                      placeholder="Email *"
                    />
                  </div>
                  <div class="col-md-12 col-sm-6 col-lg-4">
                    <input
                      class="w-100 brd-rd5 mt-25 subject"
                      type="url"
                      name="subject"
                      placeholder="Website"
                    />
                  </div>
                  <div class="col-md-12 col-sm-12 col-lg-12">
                    <textarea
                      class="w-100 brd-rd5 mt-25 contact_message"
                      name="contact_message"
                      placeholder="Message"
                    ></textarea>
                    <button class="thm-btn mt-40" id="submit" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- Get In Touch Style 2 --->
        </div>
      </div>
    </section>
  </main>
  <!-- Main Wrapper -->
</template>
