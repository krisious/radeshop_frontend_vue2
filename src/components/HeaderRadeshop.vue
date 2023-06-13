<template>
  <div>
    <!-- Header Section Begin -->
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="ht-left">
            <div class="mail-service">
              <i class="fa fa-envelope"></i> radeshop@gmail.com
            </div>
            <div class="phone-service">
              <i class="fa fa-phone"></i> +628 20012003
            </div>
          </div>
          <div class="ht-right">
            <div class="login-panel">
              <a
                href="http://127.0.0.1:8000/"
                target="_blank"
                class="primary-btn"
                >Admin</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div
          class="inner-header d-flex justify-content-between align-items-center"
        >
          <div>
            <div class="logo">
              <router-link to="/">
                <img src="img/logo-rade/ritem.png" alt="" width="200px" />
              </router-link>
            </div>
          </div>
          <div class="text-right">
            <ul class="nav-right">
              <li class="cart-icon">
                Keranjang Belanja &nbsp;
                <a href="#">
                  <i class="icon_bag_alt"></i>
                  <span>{{ cartUser.length }}</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table>
                      <tbody v-if="cartUser.length > 0">
                        <tr v-for="cart in cartUser" :key="cart.id">
                          <td class="si-pic">
                            <img
                              class="photo-item"
                              :src="cart.photo"
                              alt
                              width
                            />
                          </td>
                          <td class="si-text">
                            <div class="product-selected">
                              <p>Rp{{ cart.price }}</p>
                              <h6>{{ cart.name }}</h6>
                            </div>
                          </td>
                          <td
                            @click="removeItem(cartUser.index)"
                            class="si-close"
                          >
                            <i class="ti-close"></i>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td>Keranjang kosong</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="select-total">
                    <span>total:</span>
                    <h5>Rp{{ priceTotal }}</h5>
                  </div>
                  <div class="select-button">
                    <a href="#" class="primary-btn view-card"
                      ><router-link to="/cart" style="color: #fff"
                        >VIEW CART</router-link
                      ></a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
export default {
  name: "HeaderRadeshop",
  data() {
    return {
      cartUser: [],
    };
  },
  methods: {
    removeItem(index) {
      this.cartUser.splice(index, 1);
      const parsed = JSON.stringify(this.cartUser);
      localStorage.setItem("cartUser", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
  },
  computed: {
    priceTotal() {
      return this.cartUser.reduce(function (items, data) {
        return items + data.price;
      }, 0);
    },
  },
};
</script>

<style scoped>
.inner-header {
  padding: 10px;
}
.photo-item {
  width: 80px;
  height: 80px;
}

.header-top .ht-right .login-panel {
  padding: 15px;
}

.login-panel .primary-btn {
  width: 100px;
  padding: 5px;
}
</style>
