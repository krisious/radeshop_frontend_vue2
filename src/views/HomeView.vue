<template>
  <div class="home">
    <HeaderRadeshop />
    <HeroRadeshop />
    <PopularRadeshop />
    <InstagramRadeshop />
    <FooterRadeshop />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderRadeshop from "@/components/HeaderRadeshop.vue";
import HeroRadeshop from "@/components/HeroRadeshop.vue";
import PopularRadeshop from "@/components/PopularRadeshop.vue";
import InstagramRadeshop from "@/components/InstagramRadeshop.vue";
import FooterRadeshop from "@/components/FooterRadeshop.vue";

export default {
  name: "HomeView",
  components: {
    HeaderRadeshop,
    HeroRadeshop,
    PopularRadeshop,
    InstagramRadeshop,
    FooterRadeshop,
  },
};
</script>
