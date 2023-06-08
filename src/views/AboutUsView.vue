<template>
    <div class="about-us">
      <HeaderRadeshop />
      <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>For artists, by artists</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis, <br>error officia. Rem aperiam laborum voluptatum
            vel, pariatur modi <br>hic provident eum iure natus quos non a
            sequi, id accusantium! Autem.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
            <div class="set-bg" style="background-image: url('img/contributor/rakha.png'); height: 20rem;" ></div>
            </div>
            <div class="pi-text">
              <div class="catagory-name">2110512036</div>
              <a href="#">
                <h5>Rakha Dimas Ramadhan M</h5>
              </a>
              <!-- <div class="product-price">
                $14.00
                <span>$35.00</span>
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
            <div class="set-bg" style="background-image: url('img/contributor/agung.png'); height: 20rem;" ></div>              
            </div>
            <div class="pi-text">
              <div class="catagory-name">2110512017</div>
              <a href="#">
                <h5>Agung Krissanto</h5>
              </a>
              <!-- <div class="product-price">$13.00</div> -->
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
            <div class="set-bg" style="background-image: url('img/contributor/dwi.png'); height: 20rem;" ></div>
            </div>
            <div class="pi-text">
              <div class="catagory-name">2110512018</div>
              <a href="#">
                <h5>Dwi Krisdiyanto</h5>
              </a>
              <!-- <div class="product-price">$34.00</div> -->
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="product-item">
            <div class="pi-pic">
            <div class="set-bg" style="background-image: url('img/contributor/estu.png'); height: 20rem;" ></div>
            </div>
            <div class="pi-text">
              <div class="catagory-name">2110512034</div>
              <a href="#">
                <h5>Pangestu Dwi Panggo</h5>
              </a>
              <!-- <div class="product-price">$34.00</div> -->
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
  