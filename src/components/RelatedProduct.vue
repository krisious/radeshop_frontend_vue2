<template>
  <div>
    <!-- Related Products Section End -->
    <section class="related-products spad">
      <div class="container fluid">
        <div class="row">
          <div class="col-lg-12 mt-5">
            <div class="section-title">
              <h2>Related Products</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-5" v-if="products.length > 0">
            <carousel
              class="product-slider"
              :items="3"
              :nav="false"
              :autoplay="true"
            >
              <div
                class="product-item"
                v-for="itemProduct in products"
                v-bind:key="itemProduct.id"
              >
                <div class="pi-pic">
                  <img v-bind:src="itemProduct.galleries[0].photo" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <router-link
                        v-bind:to="'/product/' + itemProduct.id"
                        class="icon_bag_alt"
                      ></router-link>
                    </li>
                    <li class="quick-view">
                      <router-link v-bind:to="'/product/' + itemProduct.id" >
                        + Quick View
                      </router-link>
                    </li>
                    <li class="w-icon">
                      <router-link
                        v-bind:to="'/product/' + itemProduct.id"
                        class="fa fa-random" @click="refreshPage()"
                      ></router-link>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">{{ itemProduct.type }}</div>
                  <router-link v-bind:to="'/product/' + itemProduct.id">
                    <h5>{{ itemProduct.name }}</h5>
                  </router-link>
                  <div class="product-price">Rp{{ itemProduct.price }}</div>
                </div>
              </div>
            </carousel>
          </div>

          <div class="col-lg-12" v-else>
            <p>Belum ada produk</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Popular Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import axios from "axios";

export default {
  name: "RelatedProduct",
  components: {
    carousel,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => (this.products = res.data.data.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.product-item {
  margin-right: 30px;
}
</style>
