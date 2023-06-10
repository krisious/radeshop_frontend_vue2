<template>
  <div>
    <!-- Footer Section Begin -->
    <footer class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="footer-left text-left">
              <div class="footer-logo">
                <a href="#">
                  <img
                    src="img/logo-rade/rputih1.png"
                    alt=""
                  />
                </a>
              </div>
              <ul>
                <li>Address: Belum punya gedung bang</li>
                <li>Phone: +628 20012003</li>
                <li>Email: radeshop@gmail.com</li>
              </ul>
              <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1">
            <div class="footer-widget text-left">
              <h5>Information</h5>
              <ul>
                <li>
                  <router-link to="/about-us">About Us</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-reserved">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-text">
                Copyright &copy; 2023 All rights reserved | RADEShop
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer Section End -->
  </div>
</template>

<script>
export default {
  name: "FooterRadeshop",
};
</script>

<style>
.footer-section {
  background-color: #484a66;
}
</style>
