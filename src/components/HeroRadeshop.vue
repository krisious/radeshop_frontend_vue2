<template>
  <div>
    <!-- Hero Section Begin -->
    <section class="hero-section">
      <carousel
        class="hero-items"
        :items="1"
        :nav="false"
        :autoplay="true"
        :dots="false"
      >
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/banner/banher1.png')"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>RADE Shop</span>
                <h1>Welcome!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#/Market" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/banner/banher2.png')"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Promo</span>
                <h1>11.11</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#/Market" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/banner/banher3.png')"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>Customers</span>
                <h1>RADEscount</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <a href="#/Market" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </section>
    <!-- Hero Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "HeaderRadeshop",
  components: {
    carousel,
  },
};
</script>
