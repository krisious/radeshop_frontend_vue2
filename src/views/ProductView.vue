<template>
  <div class="product">
    <HeaderRadeshop />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <!-- <a href="./home.html"> Home</a> -->
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="image_default" alt="" />
                </div>
                <div class="product-thumbs">
                  <carousel
                    class="product-thumbs-track ps-slider"
                    :dots="false"
                    :nav="false"
                  >
                    <div
                      class="pt"
                      @click="changeImage(images[0])"
                      :class="images[0] == image_default ? 'active' : ''"
                    >
                      <img src="img/mickey1.jpg" alt="" />
                    </div>

                    <div
                      class="pt"
                      @click="changeImage(images[1])"
                      :class="images[1] == image_default ? 'active' : ''"
                    >
                      <img src="img/mickey2.jpg" alt="" />
                    </div>

                    <div
                      class="pt"
                      @click="changeImage(images[2])"
                      :class="images[2] == image_default ? 'active' : ''"
                    >
                      <img src="img/mickey3.jpg" alt="" />
                    </div>

                    <div
                      class="pt"
                      @click="changeImage(images[3])"
                      :class="images[3] == image_default ? 'active' : ''"
                    >
                      <img src="img/mickey4.jpg" alt="" />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                  </div>
                  <div class="pd-desc text-justify">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis, error officia. Rem aperiam laborum voluptatum
                      vel, pariatur modi hic provident eum iure natus quos non a
                      sequi, id accusantium! Autem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quam possimus quisquam animi, commodi, nihil voluptate
                      nostrum neque architecto illo officiis doloremque et
                      corrupti cupiditate voluptatibus error illum. Commodi
                      expedita animi nulla aspernatur. Id asperiores blanditiis,
                      omnis repudiandae iste inventore cum, quam sint molestiae
                      accusamus voluptates ex tempora illum sit perspiciatis.
                      Nostrum dolor tenetur amet, illo natus magni veniam quia
                      sit nihil dolores. Commodi ratione distinctio harum
                      voluptatum velit facilis voluptas animi non laudantium, id
                      dolorem atque perferendis enim ducimus? A exercitationem
                      recusandae aliquam quod. Itaque inventore obcaecati, unde
                      quam impedit praesentium veritatis quis beatae ea atque
                      perferendis voluptates velit architecto?
                    </p>
                    <h4>$495.00</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/cart" class="primary-btn pd-cart">
                      Add To Cart
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
    <RelatedProduct />
    <FooterRadeshop />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderRadeshop from "@/components/HeaderRadeshop.vue";
import RelatedProduct from "@/components/RelatedProduct.vue";
import FooterRadeshop from "@/components/FooterRadeshop.vue";

import carousel from "vue-owl-carousel";

export default {
  name: "ProductView",
  components: {
    HeaderRadeshop,
    RelatedProduct,
    FooterRadeshop,
    carousel,
  },
  data() {
    return {
      image_default: "img/mickey1.jpg",
      images: [
        "img/mickey1.jpg",
        "img/mickey2.jpg",
        "img/mickey3.jpg",
        "img/mickey4.jpg",
      ],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.image_default = urlImage;
    },
  },
};
</script>

<style>
.product-thumbs .pt {
  margin-right: 15px;
}
</style>
