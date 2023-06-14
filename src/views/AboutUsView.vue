<template>
  <div class="about-us">
    <HeaderRadeshop />
    <div class="related-products spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <img src="img/logo-rade/rade-icon.png" alt="logo" width="80px" />
              <h2>RADE Founder</h2>
              <p>
                RADE, toko baju yang terdepan, dengan bangga menghadirkan
                koleksi yang tak tertandingi dalam kenyamanan, kualitas, dan
                gaya. Kami berkomitmen untuk menyediakan pakaian yang tidak
                hanya memanjakan Anda dengan bahan-bahan yang lembut dan nyaman,
                tetapi juga menghadirkan sentuhan kemewahan dalam setiap
                jahitan. Dengan visi kami yang tak tergoyahkan, RADE membawa
                Anda ke dunia mode yang penuh keanggunan dan keindahan, di mana
                setiap pakaian yang Anda kenakan memberikan kepuasan tak
                tertandingi. Dengan RADE, kelas bukan hanya sekadar kata,
                <strong>
                  melainkan pengalaman hidup yang tak terlupakan.</strong
                >
              </p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <div
                  class="set-bg"
                  style="
                    background-image: url('img/contributor/rakha.png');
                    height: 20rem;
                  "
                ></div>
              </div>
              <div class="pi-text">
                <div class="catagory-name">2110512036</div>
                <a href="#">
                  <h5>Rakha Dimas Ramadhan M</h5>
                </a>
              </div>
              <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <div
                  class="set-bg"
                  style="
                    background-image: url('img/contributor/agung.png');
                    height: 20rem;
                  "
                ></div>
              </div>
              <div class="pi-text">
                <div class="catagory-name">2110512017</div>
                <a href="#">
                  <h5>Agung Krissanto</h5>
                </a>
              </div>
              <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <div
                  class="set-bg"
                  style="
                    background-image: url('img/contributor/dwi.png');
                    height: 20rem;
                  "
                ></div>
              </div>
              <div class="pi-text">
                <div class="catagory-name">2110512018</div>
                <a href="#">
                  <h5>Dwi Krisdiyanto</h5>
                </a>
              </div>
              <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="product-item">
              <div class="pi-pic">
                <div
                  class="set-bg"
                  style="
                    background-image: url('img/contributor/estu.png');
                    height: 20rem;
                  "
                ></div>
              </div>
              <div class="pi-text">
                <div class="catagory-name">2110512034</div>
                <a href="#">
                  <h5>Pangestu Dwi Panggo</h5>
                </a>
              </div>
              <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterRadeshop />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderRadeshop from "@/components/HeaderRadeshop.vue";
import FooterRadeshop from "@/components/FooterRadeshop.vue";

export default {
  name: "AboutUsView",
  components: {
    HeaderRadeshop,
    FooterRadeshop,
  },
};
</script>

<style>
.footer-social a {
  margin-top: 1rem;
  display: inline-block;
  height: 30px;
  width: 30px;
  background: #434445;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  margin-right: 7px;
  position: relative;
  z-index: 1;
}

.footer-social a:hover:before {
  opacity: 1;
}

.footer-social a:before {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #e7ab3c;
  content: "";
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  z-index: -1;
}
</style>
