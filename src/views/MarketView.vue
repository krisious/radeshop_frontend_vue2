<template>
    <div class="market">
      <HeaderRadeshop />
      <div>
        <!-- Popular Section Begin -->
        <section class="popular-banner spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 mt-5">
                <div class="section-title">
                  <h2>Katalog Products</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 mt-5" v-if="products.length > 0">
                <div class="row">
                  <div class="col-lg-4" v-for="itemProduct in products" :key="itemProduct.id">
                    <div class="product-item">
                      <div class="pi-pic">
                        <img :src="itemProduct.galleries[0].photo" alt="" />
                        <ul>
                          <li @click="saveCart(itemProduct)" class="w-icon active">
                            <a href="#">
                              <i class="icon_bag_alt"></i>
                            </a>
                          </li>
                          <li class="quick-view">
                            <router-link :to="'/product/' + itemProduct.id">+ Quick View</router-link>
                          </li>
                          <li class="w-icon">
                            <router-link :to="'/product/' + itemProduct.id" class="fa fa-random"></router-link>
                          </li>
                        </ul>
                      </div>
                      <div class="pi-text">
                        <div class="catagory-name">{{ itemProduct.type }}</div>
                        <router-link :to="'/product/' + itemProduct.id">
                          <h5>{{ itemProduct.name }}</h5>
                        </router-link>
                        <div class="product-price">Rp{{ itemProduct.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-lg-12" v-else>
                <p>Produk terbaru belum tersedia untuk saat ini.</p>
              </div>
            </div>
          </div>
        </section>
        <!-- Popular Section End -->
      </div>
      <FooterRadeshop />
    </div>
  </template>
  
  <script>
  import HeaderRadeshop from "@/components/HeaderRadeshop.vue";
  import FooterRadeshop from "@/components/FooterRadeshop.vue";
  import axios from "axios";
  
  export default {
    name: "MarketView",
    components: {
      HeaderRadeshop,
      FooterRadeshop,
    },
    data() {
      return {
        products: [],
        cartUser: [],
      };
    },
    methods: {
      saveCart(itemProduct) {
        const productStored = {
          id: itemProduct.id,
          name: itemProduct.name,
          price: itemProduct.price,
          photo: itemProduct.galleries[0].photo,
        };
  
        this.cartUser.push(productStored);
        const parsed = JSON.stringify(this.cartUser);
        localStorage.setItem("cartUser", parsed);
      },
    },
    mounted() {
      axios
        .get("http://127.0.0.1:8000/api/products")
        .then((res) => (this.products = res.data.data.data))
        .catch((err) => console.log(err));
    },
  };
  </script>
  