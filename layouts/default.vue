<template>
  <div>
    <app-header />
    <Nuxt />
    <!-- <div
      class="anim-slider fixed inset-0 w-full h-screen bg-brand-pink z-10"
    ></div> -->
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

// .layout-enter-active,
// .layout-leave-active {
//   transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// }
// .layout-enter,
// .layout-leave-to {
//   opacity: 0;
//   transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// }
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
      tl.fromTo(
        "#header, .anim-stagger",
        { opacity: 0, yPercent: -10 },
        {
          duration: 1,
          delay: 1.6,
          stagger: 0.3,
          yPercent: 0,
          opacity: 1,
          ease: "slowmo.out",
        }
      );
    },
  },
};
</script>