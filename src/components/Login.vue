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
              <a href="index.html" title="Home">Home</a>
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
                <form class="w-100">
                  <input
                    class="rounded-pill"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
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
                <form class="w-100">
                  <div class="row mrg20">
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="tel"
                        placeholder="Phone"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6">
                      <input
                        class="rounded-pill"
                        type="password"
                        placeholder="Re - Password"
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
        </div>
      </div>
      <!-- Login Register Wrap -->
    </div>
  </section>
</template>
