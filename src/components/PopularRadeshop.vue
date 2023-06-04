<template>
  <div>
    <!-- Popular Section Begin -->
    <section class="popular-banner spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mt-5">
            <carousel
              class="product-slider"
              :items="3"
              :nav="false"
              :autoplay="true"
            >
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/coming-soon.png" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view">
                      <router-link to="/product"> + Quick View </router-link>
                    </li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coming Soon</div>
                  <router-link to="/product">
                    <a href="#">
                      <h5>Coming Soon</h5>
                    </a>
                  </router-link>
                  <div class="product-price">Rp.0</div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/coming-soon.png" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coming Soon</div>
                  <a href="#">
                    <h5>Coming Soon</h5>
                  </a>
                  <div class="product-price">Rp.0</div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/coming-soon.png" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coming Soon</div>
                  <a href="#">
                    <h5>Coming Soon</h5>
                  </a>
                  <div class="product-price">Rp.0</div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/coming-soon.png" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coming Soon</div>
                  <a href="#">
                    <h5>Coming Soon</h5>
                  </a>
                  <div class="product-price">Rp.0</div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/coming-soon.png" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coming Soon</div>
                  <a href="#">
                    <h5>Coming Soon</h5>
                  </a>
                  <div class="product-price">Rp.0</div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/coming-soon.png" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Coming Soon</div>
                  <a href="#">
                    <h5>Coming Soon</h5>
                  </a>
                  <div class="product-price">Rp.0</div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- Popular Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "PopularRadeshop",
  components: {
    carousel,
  },
};
</script>

<style>
.product-item {
  margin-right: 30px;
}
</style>
