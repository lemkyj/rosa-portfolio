<template>
  <div>
    <app-header class="opacity-0" />
    <Nuxt />
    <!-- <div
      class="anim-slider fixed inset-0 w-full h-screen bg-brand-pink z-10"
    ></div> -->
    <div class="page-slider"></div>
  </div>
</template>

<style lang="scss">
/* 
NOTE Concentric CSS Approach
  - CSS Class Orders -
    1. 'custom-'prefix classes
    2. positioning/visibility 
    3. box model 
    4. borders 
    5. background 
    6. typography 
    7. others 

  ex) <div id="box" class="custom-box flex mx-4 border bg-red-200 text-bold"></div>
*/

body {
  // overflow: hidden;
}

/* ScrollBar */

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: $brand-black-color $brand-pink-color;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: $brand-pink-color;
}

*::-webkit-scrollbar-thumb {
  background-color: $brand-pink-color;
  border-radius: 20px;
  border: 3px solid $brand-black-color;
}

/* Scrollbar end */
</style>

<script>
import AppHeader from "../components/AppHeader.vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
// gsap.registerPlugin(ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);

export default {
  components: {
    AppHeader,
  },
  mounted() {
    this.animInit();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 2000);
    });
  },
  methods: {
    animInit() {
      const tl = gsap.timeline();
      // tl.fromTo(
      //   "#header, .anim-nav",
      //   { opacity: 0, x: -10 },
      //   {
      //     duration: 1,
      //     delay: 1.6,
      //     stagger: 0.2,
      //     x: 0,
      //     opacity: 1,
      //     ease: "power2.out",
      //   }
      // );
    },
  },
};
</script>