import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import SuccessView from '../views/SuccessView.vue'
import AboutUsView from '../views/AboutUsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartView
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsView
  }
]

const router = new VueRouter({
  routes
})

export default router
